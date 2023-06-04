import React, { useState, useContext, useEffect } from "react";
import SingleProduct from ".";
import { ProductsType, opinionType } from "../../types/Types";
import { Rating } from "../Products/productList";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../../assets/auth";
import axios from "axios";

const OpnionComment = ({
  ProductData,
  prodId,
}: {
  ProductData: ProductsType;
  prodId: string;
}) => {
  const [activeAddOpinion, setActiveAddOpinon] = useState<boolean>(false);
  const [opinionValue, setOpinionValue] = useState("");
  const [Opinions, setOpinions] = useState([]);
  const [FirstOpinions, setFirstOpinions] = useState<Array<opinionType>>([
    {
      uid: "",
      email: "",
      name: "",
      content: "",
      date: "",
      prod_id: "",
    },
  ]);
  const [User, setUser] = useState({ Name: "", Email: "", uid: "" });
  const logged: any = useContext(AuthContext);
  useEffect(() => {
    if (logged) {
      setUser({
        Name: logged.displayName,
        Email: logged.email,
        uid: logged.uid,
      });
    }
  }, [logged]);

  const HandleBuildOpinion = () => {
    if (User.uid !== "" && opinionValue !== "") {
      const FullOpinion = {
        uid: User.uid,
        email: User.Email,
        name: User.Name,
        content: opinionValue,
        date: new Date().toLocaleDateString(),
        prod_id: prodId,
      };
      axios
        .post("http://localhost:10000/api/add/opinion", FullOpinion, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((reasult) => console.log(reasult))
        .catch((err) => console.log(err));
      setActiveAddOpinon(false);
      setOpinionValue("");
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:10000/api/get/opinion/${prodId}`)
      .then((res) => {
        const data = res.data;
        setFirstOpinions(data.splice(0, 10));
        setOpinions(data);
      })
      .catch((err) => console.log(err));
  }, [prodId, activeAddOpinion]);

  const ShowMoreComments = () => {
    setFirstOpinions((prev) => prev.concat(Opinions.splice(0, 10)));
  };

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
              handle={HandleBuildOpinion}
            >
              Dodaj opinię
            </SingleProduct.OpinionAddBtn>
          </SingleProduct.OpinionAdd>
        </SingleProduct.OpinionMainTop>
        <SingleProduct.OpinionMainBottom>
          {FirstOpinions ? (
            FirstOpinions.length > 0 ? (
              <>
                <SingleProduct.OpinionShowTitle>
                  Opinie użytkowników
                  <span> ({FirstOpinions.length + Opinions.length})</span>
                </SingleProduct.OpinionShowTitle>
                <SingleProduct.OpinionShowList>
                  {FirstOpinions
                    ? FirstOpinions.map((item, id) => (
                        <SingleProduct.OpinionShowEl key={id}>
                          <SingleProduct.OpinionShowUser>
                            <SingleProduct.OpinionShowUserName>
                              <SingleProduct.Image
                                src="https://assets.x-kom.pl/public-spa/xkom/a0ae57e317617575.svg"
                                alt="user"
                              />
                              {item.name.split(" ")[0]}
                            </SingleProduct.OpinionShowUserName>
                          </SingleProduct.OpinionShowUser>
                          <SingleProduct.OpinionShowContent>
                            <SingleProduct.OpinionShowDate>
                              {item.date}
                            </SingleProduct.OpinionShowDate>
                            <SingleProduct.OpinionShowText>
                              {item.content}
                            </SingleProduct.OpinionShowText>
                          </SingleProduct.OpinionShowContent>
                        </SingleProduct.OpinionShowEl>
                      ))
                    : null}
                </SingleProduct.OpinionShowList>
              </>
            ) : null
          ) : null}
        </SingleProduct.OpinionMainBottom>
      </SingleProduct.OpinionMain>
      {Opinions.length > 0 ? (
        <SingleProduct.ShowMore>
          <SingleProduct.ShowMoreBtn handle={ShowMoreComments}>
            Pokaż więcej opini ({Opinions.length})
          </SingleProduct.ShowMoreBtn>
        </SingleProduct.ShowMore>
      ) : null}
    </SingleProduct.OpinionCom>
  );
};

export default OpnionComment;
