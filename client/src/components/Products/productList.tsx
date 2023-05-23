import React from "react";
import { Products } from ".";
import { BsCartPlus } from "react-icons/bs";
import { ProductsItemType } from "../../types/Types";

const Product = ({ item }: ProductsItemType) => {
  const Rating = () => {
    let value: Array<any> = [];
    for (let index = 0; index < Math.floor(item.opinion); index++) {
      value.push(
        <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/985a91ae09e6b303.svg" />
      );
    }

    if (item.opinion.toString().split(".").length > 1) {
      value.push(
        <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/6dcb53b14cc23c9f.svg" />
      );
    }
    if (value.length < 5) {
      for (let index = value.length; index < 5; index++) {
        value.push(
          <Products.Image src="https://assets.x-kom.pl/public-spa/xkom/d641261a2af6867e.svg" />
        );
      }
    }

    return value;
  };

  return (
    <Products.Item>
      <Products.I_Img>
        <Products.Image src={item.img} alt={item.name} />
      </Products.I_Img>
      <Products.I_Desc>
        <Products.I_Name>{item.name}</Products.I_Name>
        <Products.I_Opinion>{Rating()}</Products.I_Opinion>
        <Products.I_SpecList>
          {item.spec?.map((el, id) => (
            <Products.I_SpecEl key={id}>
              {el.split(":")[0] + ": " + el.split(":")[1]}
            </Products.I_SpecEl>
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
