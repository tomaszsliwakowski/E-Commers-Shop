import React from "react";
import { Main, TopRight } from "./index";
import { BsCartPlus } from "react-icons/bs";

const prod = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: "1269,00 zł",
};

const TopRightSection = () => {
  return (
    <TopRight>
      <Main.Title>Hity tygodnia</Main.Title>
      <TopRight.Hits>
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
      </TopRight.Hits>
    </TopRight>
  );
};

export default TopRightSection;

const Product = (prod: any) => {
  return (
    <TopRight.Product>
      <Main.Image src={prod.img} alt="prod" />
      <TopRight.Name>{prod.name}</TopRight.Name>
      <TopRight.BuyPanel>
        <TopRight.Price>{prod.price}</TopRight.Price>
        <TopRight.AddToCart>
          <BsCartPlus />
        </TopRight.AddToCart>
      </TopRight.BuyPanel>
    </TopRight.Product>
  );
};
