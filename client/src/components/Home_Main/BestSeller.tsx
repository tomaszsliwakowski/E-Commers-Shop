import React, { useEffect, useState } from "react";
import { Main } from "./index";
import { BsCartPlus } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";
import { AllProductsType, ProductsType } from "../../types/Types";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 700, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 1,
  },
};

const BestSellerSection = (ProductsData: AllProductsType) => {
  const ProductsShow = ProductsData.products
    .sort(function (a, b) {
      return b.opinion - a.opinion;
    })
    .splice(0, 10);

  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {ProductsShow.map((item, id) => (
          <Product {...item} key={id} />
        ))}
      </Carousel>
    </>
  );
};

export default BestSellerSection;

const Product = (item: ProductsType) => {
  return (
    <Main.Product to={`/product/${item.id}`}>
      <Main.Image src={item.img} alt={item.category} />
      <Main.Name>{item.name}</Main.Name>
      <Main.BuyPanel>
        <Main.Price>{item.price}zł</Main.Price>
        <Main.AddToCart>
          <BsCartPlus />
        </Main.AddToCart>
      </Main.BuyPanel>
    </Main.Product>
  );
};
