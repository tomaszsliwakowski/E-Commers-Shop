import React from "react";
import { Main } from "./index";
import useWindowSize from "../../hooks/useWindowSize";
import { WindowSizeType } from "../../types/propsTypes";
import TopLeftSection from "./TopLeft";
import TopRightSection from "./TopRight";
import BestSellerSection from "./BestSeller";

const HomeMainSection = () => {
  const { width, height }: WindowSizeType = useWindowSize();
  return (
    <Main width={width}>
      <Main.Baner>
        {width && width > 550 ? (
          <Main.Image
            src="https://cdn.x-kom.pl/i/img/banners/normal,,229b75e02d70451ba3ba95bb375a1ec0.jpg?filters=trim"
            alt="baner"
          />
        ) : (
          <Main.Image
            src="https://cdn.x-kom.pl/i/img/banners/normal,,ec68270904714efeb90221110433f301.jpg?filters=trim"
            alt="baner"
          />
        )}
      </Main.Baner>
      <Main.Top>
        <TopLeftSection />
        <TopRightSection />
      </Main.Top>
      <Main.BestSellery>
        <Main.BestSelleryTop>Bestsellery</Main.BestSelleryTop>
        <Main.BestSelleryBottom>
          <BestSellerSection />
        </Main.BestSelleryBottom>
      </Main.BestSellery>
      <Main.Bottom>
        <Main.Newsletter>n</Main.Newsletter>
        <Main.MobileApp>ma</Main.MobileApp>
      </Main.Bottom>
    </Main>
  );
};

export default HomeMainSection;
