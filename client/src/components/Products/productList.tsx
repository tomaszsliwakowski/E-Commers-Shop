import React from "react";
import { Products } from ".";
import { BsCartPlus } from "react-icons/bs";
import { ProductsItemType } from "../../types/Types";

const Product = ({ item }: ProductsItemType) => {
  return (
    <Products.Item>
      <Products.I_Img>
        <Products.Image src={item.img} alt={item.name} />
      </Products.I_Img>
      <Products.I_Desc>
        <Products.I_Name>{item.name}</Products.I_Name>
        <Products.I_Opinion>
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/985a91ae09e6b303.svg" />
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/985a91ae09e6b303.svg" />
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/985a91ae09e6b303.svg" />
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/d641261a2af6867e.svg" />
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/d641261a2af6867e.svg" />
        </Products.I_Opinion>
        <Products.I_SpecList>
          {item.spec?.map((el, id) => (
            <Products.I_SpecEl key={id}>{el}</Products.I_SpecEl>
          ))}
        </Products.I_SpecList>
      </Products.I_Desc>
      <Products.I_BuyPanel>
        <Products.I_Price>{item.price.toFixed(2)}zł</Products.I_Price>
        <Products.I_Basket>
          <Products.AddToCart>
            <BsCartPlus />
          </Products.AddToCart>
        </Products.I_Basket>
      </Products.I_BuyPanel>
    </Products.Item>
  );
};
export default Product;
