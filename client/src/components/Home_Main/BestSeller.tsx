import React, { useEffect, useState } from "react";
import { Main } from "./index";
import { BsCartPlus } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";
import { AllProductsType, ProductType } from "../../types/Types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { AddToBasket } from "../../store/BasketSlice";
import { BeatLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const override = {
  display: "block",
  borderColor: "red",
  margin: "5rem 0",
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

const BestSellerSection = (ProductsData: AllProductsType) => {
  const ProductsShow = ProductsData.products
    .sort(function (a, b) {
      return b.opinion - a.opinion;
    })
    .splice(0, 10);

  return (
    <>
      {ProductsShow.length > 0 ? (
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
      ) : (
        <BeatLoader
          color={"#0082fa"}
          loading={true}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
};

export default BestSellerSection;

const Product = (item: ProductType) => {
  const dispatch = useAppDispatch();
  const AddProductToBasket = (Product: ProductType) => {
    try {
      dispatch(
        AddToBasket({
          product: {
            id: Product.id,
            name: Product.name,
            img: Product.img,
            price: Product.price,
            category: Product.category,
            producer: Product.producer,
            opinion: Product.opinion,
            count: 1,
          },
        })
      );
      toast.success("Dodano do koszyka");
    } catch (error) {
      toast.error("Błąd");
    }
  };
  return (
    <Main.Product>
      <Link to={`/E-Commers-Shop/product/${item.id}`}>
        <Main.Image src={item.img} alt={item.category} />
        <Main.Name>{item.name}</Main.Name>
      </Link>
      <Main.BuyPanel>
        <Main.Price>{item.price}zł</Main.Price>
        <Main.AddToCart click={() => AddProductToBasket(item)}>
          <BsCartPlus />
        </Main.AddToCart>
      </Main.BuyPanel>
    </Main.Product>
  );
};
