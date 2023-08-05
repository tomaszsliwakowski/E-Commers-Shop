import React, { useEffect, useState } from "react";
import { Main, TopLeft } from "./index";
import { ProductType, TimerType } from "../../types/Types";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { ServerRoute } from "../../routes";

const override = {
  display: "flex",
  alignItems: "center",
  margin: "5rem auto",
};

const TopLeftSection = () => {
  const [Timer, setTimer] = useState<TimerType | undefined>();
  const [ProductData, setProductData] = useState<ProductType>();

  useEffect(() => {
    axios
      .get(`${ServerRoute}/api/sale/product`)
      .then((reasult) => {
        setProductData(reasult.data);
      })
      .catch((err) => {
        console.log("fail get data");
      });
  }, []);

  const TimeToExpire = () => {
    let dateTomorrow: Date = new Date();
    let date: Date = new Date();
    let tomorrow: Date = new Date(
      dateTomorrow.setDate(dateTomorrow.getDate() + 1)
    );
    let expireToday: number = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    let expiretomorrow: number = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    if (date.getHours() >= 12) {
      let remainingTime: number = expiretomorrow - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    } else {
      let remainingTime: number = expireToday - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      TimeToExpire();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TopLeft href={`/E-Commers-Shop/product/sale`}>
      {!ProductData?.img ? (
        <>
          <TopLeft.ImageAndTitle>
            <Main.Title>Gorący strzał</Main.Title>
            <Main.Image src={ProductData?.img} alt={ProductData?.category} />
          </TopLeft.ImageAndTitle>
          <TopLeft.Name>{ProductData?.name}</TopLeft.Name>
          <TopLeft.PriceCon>
            <TopLeft.NewPrice>
              {ProductData?.newPrice?.toFixed(2)} zł
            </TopLeft.NewPrice>
            <TopLeft.OldPrice>
              Cena regularna: {ProductData?.price.toFixed(2)} zł
            </TopLeft.OldPrice>
          </TopLeft.PriceCon>
          <TopLeft.TimerCon>
            <TopLeft.NextShot>Następny gorący strzał:</TopLeft.NextShot>
            <TopLeft.RemTime>
              <TopLeft.OneTime>
                <TopLeft.Time>
                  {Timer !== undefined
                    ? Timer.hour > 9
                      ? Timer?.hour
                      : `0${Timer?.hour}`
                    : `00`}
                </TopLeft.Time>
                <TopLeft.TimeName>godz.</TopLeft.TimeName>
              </TopLeft.OneTime>
              <TopLeft.Dot>:</TopLeft.Dot>
              <TopLeft.OneTime>
                <TopLeft.Time>
                  {Timer !== undefined
                    ? Timer.minutes > 9
                      ? Timer?.minutes
                      : `0${Timer?.minutes}`
                    : `00`}
                </TopLeft.Time>
                <TopLeft.TimeName>min.</TopLeft.TimeName>
              </TopLeft.OneTime>
              <TopLeft.Dot>:</TopLeft.Dot>
              <TopLeft.OneTime>
                <TopLeft.Time>
                  {Timer !== undefined
                    ? Timer.second > 9
                      ? Timer?.second
                      : `0${Timer?.second}`
                    : `00`}
                </TopLeft.Time>
                <TopLeft.TimeName>sek.</TopLeft.TimeName>
              </TopLeft.OneTime>
            </TopLeft.RemTime>
          </TopLeft.TimerCon>{" "}
        </>
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
    </TopLeft>
  );
};

export default TopLeftSection;
