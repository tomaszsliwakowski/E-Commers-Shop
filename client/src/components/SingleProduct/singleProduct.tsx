import React, { useEffect, useState } from "react";
import SingleProduct from ".";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductsType, WindowSizeType } from "../../types/Types";
import useWindowSize from "../../hooks/useWindowSize";
import { Rating } from "../Products/productList";
import Basket from "../Basket";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BasketCon } from "./ProductCount";
import ProductDescription from "./ProductDescription";
import OpnionComment from "./opinion";

const SingleProductSection = () => {
  const [ActiveCount, setActiveCount] = useState<boolean>(false);
  const [ActiveCountInput, setActiveCountInput] = useState<boolean>(false);
  const [ProductCount, setProductCount] = useState<number>(1);
  const [CountInput, setCountInput] = useState<number>(1);
  let { width, height }: WindowSizeType = useWindowSize();
  const [ProductData, setProductData] = useState<ProductsType>();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:10000/api/product/${id}`)
        .then((reasult) => {
          setProductData(reasult.data[0]);
        })
        .catch((err) => {
          console.log("fail get data");
        });
    }
  }, [id]);

  const HandleCount = (count: number) => {
    setProductCount(count);
    setCountInput(count);
    setActiveCount(false);
  };

  const HandleActiveCountInput = () => {
    setActiveCountInput(true);
    setActiveCount(false);
    setTimeout(() => {
      const el: HTMLInputElement | null = document.querySelector(".inputCount");
      if (el && el !== null) {
        el.focus();
      }
    }, 300);
  };

  useEffect(() => {
    if (!ActiveCountInput) {
      setProductCount(() => {
        if (CountInput === 0) {
          return 1;
        } else {
          return CountInput;
        }
      });
    }
  }, [ActiveCountInput]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "count") {
        setActiveCount(false);
        setActiveCountInput(false);
      }
    };

    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  const HandleInputCount = (e: Event) => {
    let target = e.target as HTMLInputElement;
    const value: number = Number(target.value);
    if (Number.isInteger(value) && value >= 0 && value <= 999) {
      setCountInput(value);
    }
  };

  return (
    <SingleProduct>
      <SingleProduct.Top>
        {width && width <= 1250 ? (
          <SingleProduct.Header>
            <SingleProduct.Title>{ProductData?.name}</SingleProduct.Title>
            <SingleProduct.Opinion>
              {ProductData ? Rating(ProductData) : null}
            </SingleProduct.Opinion>
          </SingleProduct.Header>
        ) : null}
        <SingleProduct.ProdImg>
          <SingleProduct.Image src={ProductData?.img} alt={ProductData?.name} />
        </SingleProduct.ProdImg>
        <SingleProduct.ProdProperty>
          {width && width > 1250 ? (
            <SingleProduct.Header>
              <SingleProduct.Title>{ProductData?.name}</SingleProduct.Title>
              <SingleProduct.Opinion>
                {ProductData ? Rating(ProductData) : null}
              </SingleProduct.Opinion>
            </SingleProduct.Header>
          ) : null}
          <SingleProduct.Spec>
            <SingleProduct.SpecList>
              {ProductData?.spec?.map((item, id) => (
                <SingleProduct.SpecEl key={id}>
                  {item.split(":")[0] + ":" + " " + item.split(":")[1]}
                </SingleProduct.SpecEl>
              ))}
            </SingleProduct.SpecList>
          </SingleProduct.Spec>
          <SingleProduct.BuyPanel>
            <SingleProduct.Price>
              {ProductData?.price.toFixed(2) + " " + "zł"}
            </SingleProduct.Price>
            <SingleProduct.Basket>
              <BasketCon
                ActiveCount={ActiveCount}
                ActiveCountInput={ActiveCountInput}
                setActiveCount={setActiveCount}
                HandleInputCount={HandleInputCount}
                HandleCount={HandleCount}
                HandleActiveCountInput={HandleActiveCountInput}
                CountInput={CountInput}
                ProductCount={ProductCount}
              />
              <Basket.BuyPanelBtn>Dodaj do koszyka</Basket.BuyPanelBtn>
            </SingleProduct.Basket>
            <SingleProduct.BuyInfoList>
              <SingleProduct.BuyInfoEL>
                <SingleProduct.BuyInfo>
                  <AiOutlineCheckCircle />
                  Dostepny
                </SingleProduct.BuyInfo>
              </SingleProduct.BuyInfoEL>
              {ProductData?.price && ProductData.price > 99 ? (
                <SingleProduct.BuyInfoEL>
                  <SingleProduct.BuyInfo>
                    <CiDeliveryTruck />
                    Darmowa dostawa
                  </SingleProduct.BuyInfo>
                </SingleProduct.BuyInfoEL>
              ) : null}
              <SingleProduct.BuyInfoEL>
                <SingleProduct.BuyInfo>
                  <AiOutlineClockCircle /> Kup teraz, otrzymasz pojutrze
                </SingleProduct.BuyInfo>
              </SingleProduct.BuyInfoEL>
              <SingleProduct.BuyInfoEL>
                <SingleProduct.BuyInfo>
                  <AiOutlineShop /> Dostepny w salonach
                </SingleProduct.BuyInfo>
              </SingleProduct.BuyInfoEL>
            </SingleProduct.BuyInfoList>
          </SingleProduct.BuyPanel>
        </SingleProduct.ProdProperty>
      </SingleProduct.Top>
      <SingleProduct.Bottom>
        <SingleProduct.Navigation>
          <SingleProduct.NavBtn href="#">Opis</SingleProduct.NavBtn>
          <SingleProduct.NavBtn href="#">Opinie</SingleProduct.NavBtn>
        </SingleProduct.Navigation>
        <ProductDescription image={ProductData?.img ? ProductData.img : ""} />
        <OpnionComment />
      </SingleProduct.Bottom>
    </SingleProduct>
  );
};
export default SingleProductSection;
