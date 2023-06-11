import React, { useState, useContext, useEffect } from "react";
import SingleProduct from ".";
import { ProductsType, WindowSizeType, opinionType } from "../../types/Types";
import { Rating } from "../Products/productList";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../../assets/auth";
import axios from "axios";
import { AddOpinion, DeleteOpnion, GetOpinion } from "../../routes";
import { SlOptionsVertical } from "react-icons/sl";
import useWindowSize from "../../hooks/useWindowSize";

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
  const { width, height }: WindowSizeType = useWindowSize();
  const [OpinionOptions, setOpinionOptions] = useState<{
    active: boolean;
    id: number;
  }>({
    active: false,
    id: 0,
  });
  const [FirstOpinions, setFirstOpinions] = useState<Array<opinionType>>([
    {
      uid: "",
      email: "",
      name: "",
      content: "",
      date: "",
      prod_id: "",
      opinionId: 0,
      _id: "",
    },
  ]);
  const [User, setUser] = useState({ Name: "", Email: "", uid: "" });
  const [render, setRender] = useState<boolean>(false);
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
        opinionId: Math.random() * 1000 + new Date().getTime(),
      };
      axios
        .post(AddOpinion, FullOpinion, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((reasult) => console.log(reasult))
        .catch((err) => console.log(err));
      setActiveAddOpinon(false);
      setOpinionValue("");
      setRender((prev) => !prev);
    }
  };

  useEffect(() => {
    axios
      .get(GetOpinion(prodId))
      .then((res) => {
        const data = res.data;
        setFirstOpinions(data.splice(0, 10));
        setOpinions(data);
      })
      .catch((err) => console.log(err));
  }, [prodId, render, activeAddOpinion]);

  const ShowMoreComments = () => {
    setFirstOpinions((prev) => prev.concat(Opinions.splice(0, 10)));
  };

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "options") {
        setOpinionOptions({ active: false, id: 0 });
      }
    };

    window.addEventListener("click", close);

    return () => {
      window.removeEventListener("click", close);
    };
  }, [OpinionOptions]);

  const handleDeleteOpinon = async (opinion_id: string) => {
    await axios
      .delete(DeleteOpnion(opinion_id), {
        headers: { "Content-type": "application/json" },
      })
      .then(() => {
        setRender((prev) => !prev);
      })
      .catch((err) => console.log(err));
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
                            {width && width < 768 ? (
                              <SingleProduct.OpinionShowDate>
                                <span>{item.date}</span>
                                {item.uid === User.uid ? (
                                  <>
                                    <SingleProduct.OptionsOpinion
                                      click={setOpinionOptions}
                                      item={item.opinionId}
                                    >
                                      <SlOptionsVertical id="options" />
                                    </SingleProduct.OptionsOpinion>
                                    {OpinionOptions.active &&
                                    OpinionOptions.id === item.opinionId ? (
                                      <SingleProduct.OptionsListOpinion>
                                        <SingleProduct.OptionsElOpinion
                                          click={handleDeleteOpinon}
                                          item={item._id}
                                        >
                                          Usuń opinie
                                        </SingleProduct.OptionsElOpinion>
                                      </SingleProduct.OptionsListOpinion>
                                    ) : null}
                                  </>
                                ) : null}
                              </SingleProduct.OpinionShowDate>
                            ) : null}
                          </SingleProduct.OpinionShowUser>
                          <SingleProduct.OpinionShowContent>
                            {width && width >= 768 ? (
                              <SingleProduct.OpinionShowDate>
                                {item.date}
                                {item.uid === User.uid ? (
                                  <>
                                    <SingleProduct.OptionsOpinion
                                      click={setOpinionOptions}
                                      item={item.opinionId}
                                    >
                                      <SlOptionsVertical id="options" />
                                    </SingleProduct.OptionsOpinion>
                                    {OpinionOptions.active &&
                                    OpinionOptions.id === item.opinionId ? (
                                      <SingleProduct.OptionsListOpinion>
                                        <SingleProduct.OptionsElOpinion
                                          click={handleDeleteOpinon}
                                          item={item._id}
                                        >
                                          Usuń opinie
                                        </SingleProduct.OptionsElOpinion>
                                      </SingleProduct.OptionsListOpinion>
                                    ) : null}
                                  </>
                                ) : null}
                              </SingleProduct.OpinionShowDate>
                            ) : null}
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
