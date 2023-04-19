import React, { useEffect, useState } from "react";
import { Main, TopLeft } from "./index";
import { DateType, TimerType } from "../../types/propsTypes";

const TopLeftSection = () => {
  const [Timer, setTimer] = useState<TimerType | null>(null);
  const TimeToExpire = () => {
    let dateTomorrow: Date = new Date();
    let date: Date = new Date();
    let tomorrow: Date = new Date(
      dateTomorrow.setDate(dateTomorrow.getDate() + 1)
    );
    let expireToday = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      12,
      0,
      0,
      0
    ).getTime();
    let expiretomorrow = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    if (date.getHours() > 12) {
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
    setInterval(() => {
      TimeToExpire();
    }, 1000);
  }, []);

  return (
    <TopLeft>
      <TopLeft.ImageAndTitle>
        <Main.Title>Gorący strzał</Main.Title>
        <Main.Image
          src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/11/pr_2022_11_9_8_35_50_340_00.jpg"
          alt="product"
        />
      </TopLeft.ImageAndTitle>
      <TopLeft.Name>Taotronics TT-BH097</TopLeft.Name>
      <TopLeft.PriceCon>
        <TopLeft.NewPrice>149,00 zł</TopLeft.NewPrice>
        <TopLeft.OldPrice>Cena regularna: 299,00 zł</TopLeft.OldPrice>
      </TopLeft.PriceCon>
      <TopLeft.TimerCon>
        {Timer?.second}s : {Timer?.minutes}m : {Timer?.hour}h
      </TopLeft.TimerCon>
    </TopLeft>
  );
};

export default TopLeftSection;
