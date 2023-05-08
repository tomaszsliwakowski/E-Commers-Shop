import React from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
};

const BasketSection = () => {
  return (
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
                  <span>{prod.price.toFixed(2)} zł</span> <span>1</span>
                  <BsTrash />
                </Basket.OtherProperty>
              </Basket.PropertyOpt>
            </Basket.Property>
          </Basket.Product>
        </Basket.List>
        <Basket.PayAccept>
          <Basket.PayAcceptTitle>Akceptujemy</Basket.PayAcceptTitle>
          <Basket.PayAcceptList>
            {PayAcceptList.map((it, id) => {
              return <Basket.Image key={id} src={it} alt={id} />;
            })}
          </Basket.PayAcceptList>
        </Basket.PayAccept>
      </Basket.Items>
      <Basket.BuyPanel>
        <Basket.BuyPanelCon>
          <Basket.BuyPanelSum>
            <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
            <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
          </Basket.BuyPanelSum>
          <Basket.BuyPanelBtn>Przejdź do dostawy</Basket.BuyPanelBtn>
        </Basket.BuyPanelCon>
      </Basket.BuyPanel>
    </Basket>
  );
};

export default BasketSection;
