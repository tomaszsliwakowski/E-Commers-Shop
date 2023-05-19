import React from "react";
import { Main, TopRight } from "./index";
import { BsCartPlus } from "react-icons/bs";
import useWindowSize from "../../hooks/useWindowSize";
import { HomeProductType, WindowSizeType } from "../../types/Types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";

const prod = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "/products/:id",
};
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

const TopRightSection = () => {
  const { width, height }: WindowSizeType = useWindowSize();
  return (
    <TopRight>
      <Main.Title>Hity tygodnia</Main.Title>
      <TopRight.Hits>
        {width && width > 768 ? (
          <>
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
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
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
            <Product {...prod} />
          </Carousel>
        )}
      </TopRight.Hits>
    </TopRight>
  );
};

export default TopRightSection;

const Product = (prod: HomeProductType) => {
  return (
    <TopRight.Product to={prod.link}>
      <Main.Image src={prod.img} alt="prod" />
      <TopRight.Name>{prod.name}</TopRight.Name>
      <TopRight.BuyPanel>
        <TopRight.Price>{prod.price}zł</TopRight.Price>
        <TopRight.AddToCart>
          <BsCartPlus />
        </TopRight.AddToCart>
      </TopRight.BuyPanel>
    </TopRight.Product>
  );
};
