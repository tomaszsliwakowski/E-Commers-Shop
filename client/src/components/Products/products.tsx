import React, { useState, useEffect } from "react";
import { Products } from ".";
import { useParams } from "react-router-dom";
import Product from "./productList";
import {
  GetProductsType,
  ProductsType,
  WindowSizeType,
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

const ProductsSection = () => {
  const SortName = [
    "Ocena klientów: od najlepszej",
    "Cena: od najtańszych",
    "Cena: od najdroższych",
  ];
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
  let { width, height }: WindowSizeType = useWindowSize();
  let { category } = useParams();
  let { search } = useParams();

  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:10000/api/products/${category}`)
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
        <Products.H_Count>{`(${ProductsData.products.length} ${
          ProductsData.products.length === 1
            ? "wynik"
            : ProductsData.products.length > 0 &&
              ProductsData.products.length < 5
            ? "wyniki"
            : "wyników"
        })`}</Products.H_Count>
      </Products.Header>
      <Products.Filters active2={activeFilters} width={width}>
        <Products.F_Top>
          <Products.F_Title>Filtry</Products.F_Title>
          <Products.F_ClearBtn>
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
                <Products.F_PriceInput placeholder="od" type="number" />
                <Products.F_PriceCurrency>zł</Products.F_PriceCurrency>
              </Products.F_PriceFromTo>
              -
              <Products.F_PriceFromTo>
                <Products.F_PriceInput placeholder="do" type="number" />
                <Products.F_PriceCurrency>zł</Products.F_PriceCurrency>
              </Products.F_PriceFromTo>
            </Products.F_Price>
          </Products.F_PriceCon>
          <Filters product={ProductsData} />
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
          <Products.SP_Select active2={activeSort}>
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
        <Products.All>
          {ProductsData.products.length > 0
            ? ProductsData.products.map((item: ProductsType, id: number) => (
                <Product item={item} key={id} />
              ))
            : null}
        </Products.All>
      </Products.ProductsSec>
    </Products>
  );
};

export default ProductsSection;
