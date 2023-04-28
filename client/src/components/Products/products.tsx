import React from "react";
import { Products } from ".";
import { useParams } from "react-router-dom";

const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
  id: 0,
  filters: {
    category: "cat",
    producer: "prod",
    destiny: "des",
  },
};

const ProductsSection = () => {
  let { category } = useParams();
  let filtrCount: string[] = Object.keys(prod.filters);
  let filtrData: any = Object.values(prod.filters);
  return (
    <Products>
      <Products.Header>
        <Products.H_Title>{category}</Products.H_Title>
        <Products.H_Count>3434</Products.H_Count>
      </Products.Header>
      <Products.Filters>
        <Products.F_Top>
          <Products.F_Title>Filtry</Products.F_Title>
          <Products.F_ClearBtn>Wyczyść filtry</Products.F_ClearBtn>
        </Products.F_Top>
        <Products.F_Bottom>
          {filtrCount.map((item, id) => (
            <Products.F_Section key={id}>
              <Products.F_Name>{filtrCount[id]}</Products.F_Name>
              <Products.F_List>
                <Products.F_Element>{filtrData[id]}</Products.F_Element>
              </Products.F_List>
            </Products.F_Section>
          ))}
        </Products.F_Bottom>
      </Products.Filters>
      <Products.ProductsSec>
        <Products.SortPanel>sp</Products.SortPanel>
        <Products.All>al</Products.All>
      </Products.ProductsSec>
    </Products>
  );
};

export default ProductsSection;
