import React, { useState, useEffect } from "react";
import { Products } from ".";
import { useParams } from "react-router-dom";
import Product from "./productList";
import {
  GetProductsType,
  ProductType,
  WindowSizeType,
  filtr,
} from "../../types/Types";
import {
  AiOutlineCaretDown,
  AiFillCaretUp,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import Filters from "./filters";
import useWindowSize from "../../hooks/useWindowSize";
import axios from "axios";
import { GetAllProducts, GetProducts } from "../../routes";
import { BeatLoader } from "react-spinners";

const override = {
  display: "flex",
  borderColor: "red",
  margin: "5rem auto",
};
const SortName = [
  "Ocena klientów: od najlepszej",
  "Cena: od najtańszych",
  "Cena: od najdroższych",
];

const ProductsSection = () => {
  let { width, height }: WindowSizeType = useWindowSize();
  let { category } = useParams();
  let { search } = useParams();
  const [SortOpt, setSortOpt] = useState("Ocena klientów: od najlepszej");
  const [activeSort, setActiveSort] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<boolean>(false);
  const [ProductsData, setProductsData] = useState<GetProductsType>({
    category: "",
    products: [],
    filters: {
      Producent: [],
      Przeznaczenie: [],
    },
  });

  const [prodFilters, setprodFilters] = useState<filtr>({
    filtr_one: [],
    filtr_two: [],
    price: {
      from: 0,
      to: 0,
    },
  });

  useEffect(() => {
    setprodFilters({
      filtr_one: [],
      filtr_two: [],
      price: {
        from: 0,
        to: 0,
      },
    });
  }, [category, search]);

  useEffect(() => {
    if (category) {
      axios
        .get(GetProducts(category))
        .then((reasult) => {
          setProductsData(reasult.data[0]);
        })
        .catch((err) => {
          console.log("fail get data");
        });
    } else {
      axios
        .get(GetAllProducts)
        .then((reasult) => {
          setProductsData(reasult.data[0]);
        })
        .catch((err) => {
          console.log("fail get data");
        });
    }
  }, [category]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      let tag = ["SPAN", "LI", "DIV"];
      if (tag.includes(target.tagName) && target.id !== "sort") {
        setActiveSort(false);
      }
    };
    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  const FiltrOpt = (item: ProductType) => {
    let value = "";
    if (item.destiny) value = item.destiny;
    if (item.components) value = item.components;
    if (item.accesories) value = item.accesories;
    return value;
  };

  const ProductsFiltrOne = (): ProductType[] => {
    let returnValue: ProductType[] = [];
    if (prodFilters.filtr_one.length > 0)
      returnValue = ProductsData.products.filter((item) =>
        prodFilters.filtr_one.includes(item.producer)
      );
    if (prodFilters.filtr_one.length <= 0) returnValue = ProductsData.products;
    return returnValue;
  };

  const ProductsFiltrTwo = (): ProductType[] => {
    let returnValue: ProductType[] = [];
    if (prodFilters.filtr_two.length > 0)
      returnValue = ProductsFiltrOne().filter((item) =>
        prodFilters.filtr_two.includes(FiltrOpt(item))
      );
    if (prodFilters.filtr_two.length <= 0) returnValue = ProductsFiltrOne();
    return returnValue;
  };

  const FinalFiltersProducts = ProductsFiltrTwo().filter(
    (item) =>
      item.price > prodFilters.price.from &&
      item.price < (prodFilters.price.to !== 0 ? prodFilters.price.to : 100000)
  );

  const HandleSort = () => {
    switch (SortOpt) {
      case SortName[0]:
        return FinalFiltersProducts.sort(function (a, b) {
          return b.opinion - a.opinion;
        });
      case SortName[1]:
        return FinalFiltersProducts.sort(function (a, b) {
          return a.price - b.price;
        });

      case SortName[2]:
        return FinalFiltersProducts.sort(function (a, b) {
          return b.price - a.price;
        });
      default:
        return FinalFiltersProducts;
    }
  };
  let ShowProducts = (): ProductType[] => {
    let returnValue = HandleSort();
    if (search) {
      returnValue = returnValue.filter((item) =>
        item.name.toLowerCase().includes(search ? search.toLowerCase() : "")
      );
    }
    return returnValue;
  };

  return (
    <Products>
      <Products.Header>
        <Products.H_Title>
          {category
            ? category.split("-")[1] !== undefined
              ? category.split("-")[0] + " " + category.split("-")[1]
              : category
            : search}
        </Products.H_Title>
        <Products.H_Count>{`(${ShowProducts().length} ${
          ShowProducts().length === 1
            ? "wynik"
            : ShowProducts().length > 0 && ShowProducts().length < 5
            ? "wyniki"
            : "wyników"
        })`}</Products.H_Count>
      </Products.Header>
      <Products.Filters active={activeFilters} width={width}>
        <Products.F_Top>
          <Products.F_Title>Filtry</Products.F_Title>
          <Products.F_ClearBtn
            setfilters={() =>
              setprodFilters({
                filtr_one: [],
                filtr_two: [],
                price: {
                  from: 0,
                  to: 0,
                },
              })
            }
          >
            {activeFilters ? (
              <AiOutlineCloseCircle onClick={() => setActiveFilters(false)} />
            ) : (
              "Wyczyść filtry"
            )}
          </Products.F_ClearBtn>
        </Products.F_Top>
        <Products.F_Bottom>
          <Products.F_PriceCon>
            <Products.F_Name>Cena</Products.F_Name>
            <Products.F_Price>
              <Products.F_PriceFromTo>
                <Products.F_PriceInput
                  placeholder="od"
                  type="number"
                  name="from"
                  min={0}
                  max={9999}
                  value={
                    prodFilters.price.from === 0 ? "od" : prodFilters.price.from
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setprodFilters((prev) => ({
                      ...prev,
                      price: {
                        from: !Number.isNaN(parseInt(e.target.value))
                          ? parseInt(e.target.value)
                          : 0,
                        to: prev.price.to,
                      },
                    }))
                  }
                />
                <Products.F_PriceCurrency>zł</Products.F_PriceCurrency>
              </Products.F_PriceFromTo>
              -
              <Products.F_PriceFromTo>
                <Products.F_PriceInput
                  placeholder="do"
                  type="number"
                  name="to"
                  min={0}
                  max={99999}
                  value={
                    prodFilters.price.to === 0 ? "do" : prodFilters.price.to
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setprodFilters((prev) => ({
                      ...prev,
                      price: {
                        from: prev.price.from,
                        to: !Number.isNaN(parseInt(e.target.value))
                          ? parseInt(e.target.value)
                          : 0,
                      },
                    }))
                  }
                />
                <Products.F_PriceCurrency>zł</Products.F_PriceCurrency>
              </Products.F_PriceFromTo>
            </Products.F_Price>
          </Products.F_PriceCon>
          <Filters
            product={ProductsData}
            setfilters={setprodFilters}
            filters={prodFilters}
            ShowProd={ShowProducts()}
          />
          {activeFilters ? (
            <Products.AcceptFiltrBtn>Zastosuj</Products.AcceptFiltrBtn>
          ) : null}
        </Products.F_Bottom>
      </Products.Filters>
      <Products.ProductsSec>
        <Products.SortPanel>
          {width && width <= 550 ? (
            <Products.FiltrBtn>
              <BsFilter onClick={() => setActiveFilters(true)} />
            </Products.FiltrBtn>
          ) : null}
          <Products.SP_Select active={activeSort}>
            <Products.SP_Checkbox
              type="checkbox"
              checked={activeSort}
              onChange={() => setActiveSort((prev) => !prev)}
            />
            <Products.SP_Sort>sortowanie</Products.SP_Sort>
            <Products.SP_Show>
              <Products.SP_ShowOpt>{SortOpt}</Products.SP_ShowOpt>
              {activeSort ? <AiFillCaretUp /> : <AiOutlineCaretDown />}
            </Products.SP_Show>
            <Products.SP_List active={activeSort} click={setActiveSort}>
              {SortName.map((el, id) => (
                <Products.SP_ListEl key={id} click={setSortOpt} el={el}>
                  {el}
                </Products.SP_ListEl>
              ))}
            </Products.SP_List>
          </Products.SP_Select>
        </Products.SortPanel>
        <Products.All
          style={FinalFiltersProducts.length === 2 ? "flex" : "grid"}
        >
          {search !== undefined && search !== "" ? (
            ShowProducts().length > 0 ? (
              ShowProducts().map((item: ProductType, id: number) => (
                <Product item={item} key={id} />
              ))
            ) : (
              <div>Nie znaleziono produktów</div>
            )
          ) : ShowProducts().length > 0 ? (
            ShowProducts().map((item: ProductType, id: number) => (
              <Product item={item} key={id} />
            ))
          ) : (
            <BeatLoader
              color={"#0082fa"}
              loading={true}
              cssOverride={override}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </Products.All>
      </Products.ProductsSec>
    </Products>
  );
};

export default ProductsSection;
