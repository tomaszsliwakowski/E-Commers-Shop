import React from "react";
import { Main } from "./index";
import { BsCartPlus } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
import "../../index.css";

const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: "1269,00 zł",
};

const breakPoints: any = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
];

const BestSellerSection = () => {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
        <Product {...prod} />
      </Carousel>
    </>
  );
};

export default BestSellerSection;

const Product = (prod: any) => {
  return (
    <Main.Product>
      <Main.Image src={prod.img} alt="prod" />
      <Main.Name>{prod.name}</Main.Name>
      <Main.BuyPanel>
        <Main.Price>{prod.price}</Main.Price>
        <Main.AddToCart>
          <BsCartPlus />
        </Main.AddToCart>
      </Main.BuyPanel>
    </Main.Product>
  );
};
