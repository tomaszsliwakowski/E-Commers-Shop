import React from "react";
import { Products } from ".";
import { useParams } from "react-router-dom";
import Product from "./productList";
import { GetProductsType, ProductsType } from "../../types/Types";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";

const prod: GetProductsType = {
  products: [
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ],
      //components: "karta graficzna",
    },
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ],
      //components: "karta graficzna",
    },
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ],
      //components: "karta graficzna",
    },
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ], //components: "karta graficzna",
    },
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ],
      //components: "karta graficzna",
    },
    {
      img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_7_14_59_54_423_00.jpg",
      name: "Acer Nitro 5 R5-6600H/16GB/512 RTX3060 165Hz",
      price: 4599.0,
      link: "#",
      id: 0,
      category: "Laptop",
      opinion: 3,
      spec: [
        "Procesor: AMD Ryzen 5 6600H",
        "Pamięć: 16 GB",
        "Grafika: Nvidia GeForce RTX 3060",
        "Ekran: Matowy,LED,IPS",
      ],
      //components: "karta graficzna",
    },
  ],
  filters: {
    Producent: ["Asus", "Acer", "Msi", "HP", "Dell"],
    Przeznaczenie: ["Do Gier", "Biznes", "Uniwersalne"],
  },
};

const ProductsSection = () => {
  let { category } = useParams();
  let filtrCount: string[] = prod.filters ? Object.keys(prod.filters) : [];
  let filtrData: Array<string[]> = prod.filters
    ? Object.values(prod.filters)
    : [];

  return (
    <Products>
      <Products.Header>
        <Products.H_Title>{category}</Products.H_Title>
        <Products.H_Count>{`(${prod.products.length} ${
          prod.products.length === 1
            ? "wynik"
            : prod.products.length > 0 && prod.products.length < 5
            ? "wyniki"
            : "wyników"
        })`}</Products.H_Count>
      </Products.Header>
      <Products.Filters>
        <Products.F_Top>
          <Products.F_Title>Filtry</Products.F_Title>
          <Products.F_ClearBtn>Wyczyść filtry</Products.F_ClearBtn>
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
          {filtrCount.map((item, id) => (
            <Products.F_Section key={id}>
              <Products.F_Name>{item}</Products.F_Name>
              {item === filtrCount[0]
                ? filtrData[0].map((it, id) => (
                    <Products.F_List key={id}>
                      <Products.F_Element>
                        <Products.F_Choose>
                          {it}
                          <Products.F_Checkbox type="checkbox" />
                          <Products.F_Checkmark></Products.F_Checkmark>
                        </Products.F_Choose>
                      </Products.F_Element>
                    </Products.F_List>
                  ))
                : filtrData[1].map((it, id) => (
                    <Products.F_List key={id}>
                      <Products.F_Element>
                        <Products.F_Choose>
                          {it}
                          <Products.F_Checkbox type="checkbox" />
                          <Products.F_Checkmark></Products.F_Checkmark>
                        </Products.F_Choose>
                      </Products.F_Element>
                    </Products.F_List>
                  ))}
            </Products.F_Section>
          ))}
        </Products.F_Bottom>
      </Products.Filters>
      <Products.ProductsSec>
        <Products.SortPanel>
          <Products.SP_Select>
            <Products.SP_Sort>sortowanie</Products.SP_Sort>
            <Products.SP_Show>
              <Products.SP_ShowOpt>Od najpopularniejszych</Products.SP_ShowOpt>
              <AiOutlineCaretDown />
            </Products.SP_Show>
            <Products.SP_List>
              <Products.SP_ListEl>cena</Products.SP_ListEl>
            </Products.SP_List>
          </Products.SP_Select>
        </Products.SortPanel>
        <Products.All>
          {prod.products.map((item: ProductsType, id: number) => (
            <Product item={item} key={id} />
          ))}
        </Products.All>
      </Products.ProductsSec>
    </Products>
  );
};

export default ProductsSection;
