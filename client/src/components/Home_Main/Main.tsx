import React from "react";
import { Main } from "./index";
import useWindowSize from "../../hooks/useWindowSize";
import { WindowSizeType } from "../../types/Types";
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
        <Main.Newsletter>
          <Main.NewsletterA>
            <Main.NewsletterTitle>
              Odbierz bon 20 zł w prezencie
            </Main.NewsletterTitle>
            <Main.NewsletterText>
              Zapisz się do newslettera i bądź na bieżąco.
            </Main.NewsletterText>
            <Main.NewsletterEmailInput>
              <Main.NewsletterInput type="email" placeholder="Twój e-mail" />
              <Main.NewsletterBtn>Zapisz się</Main.NewsletterBtn>
            </Main.NewsletterEmailInput>
          </Main.NewsletterA>
          <Main.NewsletterB>
            <Main.Image
              src="https://ma.stati.pl/is/kampanie/NL20_1apr2023/footer.png"
              alt="gift"
            />
          </Main.NewsletterB>
        </Main.Newsletter>
      </Main.Bottom>
    </Main>
  );
};

export default HomeMainSection;
