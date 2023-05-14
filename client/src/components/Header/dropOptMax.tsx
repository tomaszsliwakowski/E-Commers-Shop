import React from "react";
import Basket from "../Basket";
import { Header } from ".";

const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
};
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DropOptMax = () => {
  return (
    <>
      <Header.DropOpt style="max">
        {tab.map((ite) => (
          <Basket.Product style="max">
            <Basket.Property>
              <Basket.Goto to={"/products/:category"}>
                <Basket.Image src={prod.img} alt={prod.name} />
              </Basket.Goto>
              <Basket.PropertyOpt style="grid">
                <Basket.Goto to={"/products/:category"}>
                  <Basket.ProductDesc style="center">
                    {prod.name}
                  </Basket.ProductDesc>
                </Basket.Goto>
                <Basket.OtherProperty>
                  <span style={{ fontSize: "16px" }}>
                    {prod.price.toFixed(2)} zł
                  </span>
                  <span>1szt.</span>
                </Basket.OtherProperty>
              </Basket.PropertyOpt>
            </Basket.Property>
          </Basket.Product>
        ))}
      </Header.DropOpt>
      <Basket.BuyPanel style="relative">
        <Basket.BuyPanelCon>
          <Basket.BuyPanelSum>
            <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
            <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
          </Basket.BuyPanelSum>
          <Basket.BuyPanelBtn>Przejdź do koszyka</Basket.BuyPanelBtn>
        </Basket.BuyPanelCon>
      </Basket.BuyPanel>
    </>
  );
};

export default DropOptMax;
