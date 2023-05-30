import React, { useEffect, useState } from "react";
import SingleProduct from ".";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BasketConPropsType,
  ProductsType,
  WindowSizeType,
} from "../../types/Types";
import useWindowSize from "../../hooks/useWindowSize";
import { Rating } from "../Products/productList";
import Basket from "../Basket";
import {
  AiOutlineCaretUp,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineCaretDown } from "react-icons/ai";

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {width && width <= 1050 ? (
          <SingleProduct.Header>
            <SingleProduct.Title>{ProductData?.name}</SingleProduct.Title>
            <SingleProduct.Opinion>stars</SingleProduct.Opinion>
          </SingleProduct.Header>
        ) : null}
        <SingleProduct.ProdImg>
          <SingleProduct.Image src={ProductData?.img} alt={ProductData?.name} />
        </SingleProduct.ProdImg>
        <SingleProduct.ProdProperty>
          {width && width > 1050 ? (
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
      <SingleProduct.Bottom></SingleProduct.Bottom>
    </SingleProduct>
  );
};
export default SingleProductSection;

const BasketCon = ({
  ActiveCount,
  ActiveCountInput,
  CountInput,
  HandleInputCount,
  ProductCount,
  setActiveCount,
  HandleCount,
  HandleActiveCountInput,
}: BasketConPropsType) => {
  return (
    <Basket.ProdCount active2={ActiveCount}>
      {ActiveCountInput ? (
        <Basket.CountInput
          type="number"
          value={CountInput || ""}
          id="count"
          className="inputCount"
          onChange={HandleInputCount}
        />
      ) : (
        <Basket.CountInput
          type="text"
          id="count"
          disabled={ActiveCount}
          value={ProductCount}
          readOnly
        />
      )}
      {!ActiveCountInput ? (
        ActiveCount ? (
          <AiOutlineCaretUp />
        ) : (
          <AiOutlineCaretDown />
        )
      ) : null}
      <Basket.CountActive
        type="checkbox"
        id="count"
        checked={ActiveCount}
        onChange={() => setActiveCount((prev: boolean) => !prev)}
        style={{
          display: `${ActiveCountInput ? "none" : "flex"}`,
        }}
      />
      <Basket.CountList active2={ActiveCount}>
        <Basket.CountEl>
          {CountOpt.map((item, id) =>
            item < 9 ? (
              <Basket.Count
                key={id}
                click={() => HandleCount(item)}
                item={item}
                id="count"
              >
                {item}
              </Basket.Count>
            ) : (
              <Basket.Count key={id} click={HandleActiveCountInput} item={item}>
                {item + "+"}
              </Basket.Count>
            )
          )}
        </Basket.CountEl>
      </Basket.CountList>
    </Basket.ProdCount>
  );
};
