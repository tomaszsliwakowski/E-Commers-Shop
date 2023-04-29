import React from "react";
import { Products } from ".";
import { ProductsItemType } from "../../types/Types";

const Product = ({ item }: ProductsItemType) => {
  return (
    <Products.Item>
      <Products.I_Img>
        <Products.Image src={item.img} alt={item.name} />
      </Products.I_Img>
      <Products.I_Desc>
        <Products.I_Name>{item.name}</Products.I_Name>
        <Products.I_Opinion>opinion</Products.I_Opinion>
        <Products.I_SpecList>
          <Products.I_SpecEl>spec el</Products.I_SpecEl>
        </Products.I_SpecList>
      </Products.I_Desc>
      <Products.I_BuyPanel>
        <Products.I_Price>{item.price}zł</Products.I_Price>
        <Products.I_Basket>basket</Products.I_Basket>
      </Products.I_BuyPanel>
    </Products.Item>
  );
};
export default Product;
