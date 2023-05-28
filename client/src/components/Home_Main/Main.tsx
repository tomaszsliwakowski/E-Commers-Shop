import React, { useState, useEffect } from "react";
import { Main } from "./index";
import useWindowSize from "../../hooks/useWindowSize";
import { AllProductsType, WindowSizeType } from "../../types/Types";
import TopLeftSection from "./TopLeft";
import TopRightSection from "./TopRight";
import BestSellerSection from "./BestSeller";
import axios from "axios";

const HomeMainSection = () => {
  const { width, height }: WindowSizeType = useWindowSize();
  const [ProductsData, setProductsData] = useState<AllProductsType>({
    products: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:10000/api/products/All")
      .then((reasult) => {
        setProductsData(reasult.data[0]);
      })
      .catch((err) => console.log(err));
  }, [width]);

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
        <TopRightSection {...ProductsData} />
      </Main.Top>
      <Main.BestSellery>
        <Main.BestSelleryTop>Bestsellery</Main.BestSelleryTop>
        <Main.BestSelleryBottom>
          <BestSellerSection {...ProductsData} />
        </Main.BestSelleryBottom>
      </Main.BestSellery>
      <Main.Bottom>
        <Main.Newsletter>
          <Main.BottomA>
            <Main.BottomTitle>Odbierz bon 20 zł w prezencie</Main.BottomTitle>
            <Main.BottomText>
              Zapisz się do newslettera i bądź na bieżąco.
            </Main.BottomText>
            <Main.BottomCon>
              <Main.BottomInput type="email" placeholder="Twój e-mail" />
              <Main.BottomBtn>Zapisz się</Main.BottomBtn>
            </Main.BottomCon>
          </Main.BottomA>
          <Main.BottomB>
            <Main.Image
              src="https://ma.stati.pl/is/kampanie/NL20_1apr2023/footer.png"
              alt="gift"
            />
          </Main.BottomB>
        </Main.Newsletter>
        <Main.MobileAd>
          <Main.BottomA>
            <Main.BottomTitle>Aplikacja mobilna</Main.BottomTitle>
            <Main.BottomText>
              Sprawdzaj promocje, które dostępne są tylko w aplikacji.
            </Main.BottomText>
            <Main.BottomCon>
              <Main.Image
                src="https://assets.x-kom.pl/public-spa/xkom/0f6ff6eee36d1bb3.svg"
                alt="AppStore"
              />
              <Main.Image
                src="https://assets.x-kom.pl/public-spa/xkom/32fe7e427a8819cc.svg"
                alt="GooglePlay"
              />
              <Main.Image
                src="https://assets.x-kom.pl/public-spa/xkom/de8bbc5c651b4ad9.svg"
                alt="AppGallery"
              />
            </Main.BottomCon>
          </Main.BottomA>
          <Main.BottomB>
            <Main.Image
              src="https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png"
              alt="mobile"
            />
          </Main.BottomB>
        </Main.MobileAd>
      </Main.Bottom>
    </Main>
  );
};

export default HomeMainSection;
