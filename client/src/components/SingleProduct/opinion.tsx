import React, { useState } from "react";
import SingleProduct from ".";
import { ProductsType } from "../../types/Types";
import { Rating } from "../Products/productList";
import { BiUserCircle } from "react-icons/bi";

const OpnionComment = ({ ProductData }: { ProductData: ProductsType }) => {
  const [activeAddOpinion, setActiveAddOpinon] = useState<boolean>(false);
  const [opinionValue, setOpinionValue] = useState("");
  return (
    <SingleProduct.OpinionCom>
      <SingleProduct.OpinionHeader>Opinie</SingleProduct.OpinionHeader>
      <SingleProduct.OpinionMain>
        <SingleProduct.OpinionMainTop>
          <SingleProduct.OpinionStars>
            <SingleProduct.OpinionStarsCount>
              <span className="opinion">
                {ProductData.opinion} <span className="opinionMax">/5</span>
              </span>
              <span className="opinionStars">
                {ProductData ? Rating(ProductData) : null}
              </span>
            </SingleProduct.OpinionStarsCount>
          </SingleProduct.OpinionStars>
          <SingleProduct.OpinionAdd>
            <SingleProduct.OpinionAddTitle>
              {!activeAddOpinion ? "Masz ten produkt?" : "Dodaj opinię"}
              {activeAddOpinion ? (
                <SingleProduct.OpinionAddCloseBtn click={setActiveAddOpinon}>
                  X
                </SingleProduct.OpinionAddCloseBtn>
              ) : null}
            </SingleProduct.OpinionAddTitle>
            {!activeAddOpinion ? (
              <SingleProduct.OpinionAddText>
                Oceń {ProductData.name} i pomóż innym w wyborze
              </SingleProduct.OpinionAddText>
            ) : (
              <SingleProduct.OpinionInput
                placeholder="Wpisz swoją opinię"
                value={opinionValue}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setOpinionValue((prev: string) =>
                    e.target.value.length < 250 ? e.target.value : prev
                  );
                }}
              />
            )}
            <SingleProduct.OpinionAddBtn
              click={setActiveAddOpinon}
              active={activeAddOpinion}
            >
              Dodaj opinię
            </SingleProduct.OpinionAddBtn>
          </SingleProduct.OpinionAdd>
        </SingleProduct.OpinionMainTop>
        <SingleProduct.OpinionMainBottom>
          <SingleProduct.OpinionShowTitle>
            Opinie użytkowników <span>(22)</span>
          </SingleProduct.OpinionShowTitle>
          <SingleProduct.OpinionShowList>
            <SingleProduct.OpinionShowEl>
              <SingleProduct.OpinionShowUser>
                <SingleProduct.OpinionShowUserName>
                  <SingleProduct.Image
                    src="https://assets.x-kom.pl/public-spa/xkom/a0ae57e317617575.svg"
                    alt="user"
                  />{" "}
                  Admin
                </SingleProduct.OpinionShowUserName>
              </SingleProduct.OpinionShowUser>
              <SingleProduct.OpinionShowContent>
                <SingleProduct.OpinionShowDate>
                  {new Date().toLocaleDateString()}
                </SingleProduct.OpinionShowDate>
                <SingleProduct.OpinionShowText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum culpa expedita qui quo! Vero eius, architecto iusto
                  repudiandae expedita perspiciatis mollitia ex, cumque cum
                  doloremque nam. Expedita, blanditiis! Distinctio, similique.
                </SingleProduct.OpinionShowText>
              </SingleProduct.OpinionShowContent>
            </SingleProduct.OpinionShowEl>
          </SingleProduct.OpinionShowList>
        </SingleProduct.OpinionMainBottom>
      </SingleProduct.OpinionMain>
    </SingleProduct.OpinionCom>
  );
};

export default OpnionComment;
