import React, { useState } from "react";
import { Main, TopRight } from "./index";
import { BsCartPlus } from "react-icons/bs";
import useWindowSize from "../../hooks/useWindowSize";
import {
  AllProductsType,
  ProductsType,
  WindowSizeType,
} from "../../types/Types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";
import { useAppDispatch } from "../../store/store";
import { AddToBasket } from "../../store/BasketSlice";
import { Link } from "react-router-dom";

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

const TopRightSection = (ProductsData: AllProductsType) => {
  const number = [0, 19, 46, 52, 57, 69];
  const { width, height }: WindowSizeType = useWindowSize();
  const ProductsShow = ProductsData.products.filter((item) =>
    number.includes(item.id)
  );

  return (
    <TopRight>
      <Main.Title>Hity tygodnia</Main.Title>
      <TopRight.Hits>
        {width && width > 768 ? (
          <>
            {ProductsShow.map((item, id) => (
              <Product key={id} {...item} />
            ))}
          </>
        ) : (
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
              <Product key={id} {...item} />
            ))}
          </Carousel>
        )}
      </TopRight.Hits>
    </TopRight>
  );
};

export default TopRightSection;

const Product = (item: ProductsType) => {
  const dispatch = useAppDispatch();
  return (
    <TopRight.Product>
      <Link to={`/product/${item.id}`}>
        <Main.Image src={item.img} alt={item.category} />
        <TopRight.Name>{item.name}</TopRight.Name>
      </Link>
      <TopRight.BuyPanel>
        <TopRight.Price>{item.price}zł</TopRight.Price>
        <TopRight.AddToCart
          click={() =>
            dispatch(
              AddToBasket({
                product: {
                  id: item.id,
                  name: item.name,
                  img: item.img,
                  price: item.price,
                  category: item.category,
                  producer: item.producer,
                  opinion: item.opinion,
                  count: 1,
                },
              })
            )
          }
        >
          <BsCartPlus />
        </TopRight.AddToCart>
      </TopRight.BuyPanel>
    </TopRight.Product>
  );
};
