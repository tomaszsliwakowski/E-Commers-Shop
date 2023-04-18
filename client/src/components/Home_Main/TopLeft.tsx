import React from "react";
import { Main, TopLeft } from "./index";

const TopLeftSection = () => {
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
      <TopLeft.TimerCon>timer</TopLeft.TimerCon>
    </TopLeft>
  );
};

export default TopLeftSection;
