import React from "react";
import Basket from "../Basket";
import { Header } from ".";
import { basketprops } from "../../types/Types";

const DropOptMax = ({ BasketProducts }: basketprops) => {
  return (
    <>
      <Header.DropOpt style="max">
        {BasketProducts.basket.length > 0
          ? BasketProducts.basket.map((item, id) => (
              <Basket.Product style="max" key={id}>
                <Basket.Property>
                  <Basket.Goto to={`/products/${item.product.id}`}>
                    <Basket.Image
                      src={item.product.img}
                      alt={item.product.name}
                    />
                  </Basket.Goto>
                  <Basket.PropertyOpt style="grid">
                    <Basket.Goto to={`/products/${item.product.id}`}>
                      <Basket.ProductDesc style="center">
                        {item.product.name}
                      </Basket.ProductDesc>
                    </Basket.Goto>
                    <Basket.OtherProperty>
                      <span style={{ fontSize: "16px" }}>
                        {item.product.price.toFixed(2)} zł
                      </span>
                      <span>{item.product.count}szt.</span>
                    </Basket.OtherProperty>
                  </Basket.PropertyOpt>
                </Basket.Property>
              </Basket.Product>
            ))
          : null}
      </Header.DropOpt>
      <Basket.BuyPanel style="relative">
        <Basket.BuyPanelCon>
          <Basket.BuyPanelSum>
            <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
            <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
          </Basket.BuyPanelSum>
          <Basket.BuyPanelBtn href="/basket">
            Przejdź do koszyka
          </Basket.BuyPanelBtn>
        </Basket.BuyPanelCon>
      </Basket.BuyPanel>
    </>
  );
};

export default DropOptMax;
