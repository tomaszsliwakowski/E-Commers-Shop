import React from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LogRegOut } from "../register&login";
import { HomeRoute } from "../../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
};

const BasketSection = () => {
  return (
    <>
      <Basket>
        <Basket.Items>
          <Basket.Header>
            <Basket.Title>
              Koszyk <span>(1)</span>
            </Basket.Title>
            <Basket.ClearBasket>
              <BsTrash />
              Wyszysc koszyk
            </Basket.ClearBasket>
          </Basket.Header>
          <Basket.List>
            <Basket.Product>
              <Basket.Property>
                <Basket.Goto to={"/products/:category"}>
                  <Basket.Image src={prod.img} alt={prod.name} />
                </Basket.Goto>
                <Basket.PropertyOpt>
                  <Basket.Goto to={"/products/:category"}>
                    <Basket.ProductDesc>{prod.name}</Basket.ProductDesc>
                  </Basket.Goto>
                  <Basket.OtherProperty>
                    <span>{prod.price.toFixed(2)} zł</span>
                    <Basket.ProdCount>
                      <Basket.CountInput type="text" disabled value={1} />
                      <AiOutlineCaretDown />
                      <Basket.CountActive type="checkbox" />
                      <Basket.CountList>
                        <Basket.CountEl>
                          <Basket.Count>1</Basket.Count>
                          <Basket.Count>2</Basket.Count>
                          <Basket.Count>3</Basket.Count>
                          <Basket.Count>4</Basket.Count>
                          <Basket.Count>5</Basket.Count>
                        </Basket.CountEl>
                      </Basket.CountList>
                    </Basket.ProdCount>
                    <BsTrash className="trash" />
                  </Basket.OtherProperty>
                </Basket.PropertyOpt>
              </Basket.Property>
            </Basket.Product>
          </Basket.List>
        </Basket.Items>
        <Basket.BuyPanel>
          <Basket.BuyPanelCon>
            <Basket.BuyPanelSum>
              <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
              <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
            </Basket.BuyPanelSum>
            <Basket.BuyPanelBtn>Przejdź do dostawy</Basket.BuyPanelBtn>
          </Basket.BuyPanelCon>
          <Basket.Info>
            <AiOutlineInfoCircle />
            <span>
              Dokończ składanie zamówienia - dodanie produktów do koszyka nie
              oznacza ich rezerwacji.
            </span>
          </Basket.Info>
        </Basket.BuyPanel>
      </Basket>
      <Basket.PayAccept>
        <Basket.PayAcceptTitle>Akceptujemy</Basket.PayAcceptTitle>
        <Basket.PayAcceptList>
          {PayAcceptList.map((it, id) => {
            return <Basket.Image key={id} src={it} alt={id} />;
          })}
        </Basket.PayAcceptList>
      </Basket.PayAccept>
      <LogRegOut>
        <LogRegOut.OutBtn href={HomeRoute}>
          <MdOutlineArrowBackIosNew /> Wyjdź
        </LogRegOut.OutBtn>
      </LogRegOut>
    </>
  );
};

export default BasketSection;
