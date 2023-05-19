import React, { useEffect, useState } from "react";
import { Main, TopLeft } from "./index";
import { TimerType } from "../../types/Types";

const TopLeftSection = () => {
  const [Timer, setTimer] = useState<TimerType | undefined>();
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
    setInterval(() => {
      TimeToExpire();
    }, 1000);
  }, []);

  return (
    <TopLeft href="/products/:id">
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
      </TopLeft.TimerCon>
    </TopLeft>
  );
};

export default TopLeftSection;
