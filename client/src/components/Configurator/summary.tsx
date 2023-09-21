import React from "react";
import { Configurator } from ".";
import { ConfiguratorDataType } from "./configurator";
import { ProductType } from "../../types/Types";

type Props = {
  configuratorProducts: ProductType[];
};

const Summary = (props: Props) => {
  const { configuratorProducts } = props;

  function AddPcToBasket() {
    //add
  }

  return (
    <Configurator.Summary>
      <Configurator.SumPanel>
        <Configurator.SumCon>
          <Configurator.SumField>
            <Configurator.SumValue>Liczba elementów:</Configurator.SumValue>
            <Configurator.SumValue>
              {configuratorProducts.length || "0"}
            </Configurator.SumValue>
          </Configurator.SumField>
          <Configurator.SumField>
            <Configurator.SumValue>Wartość:</Configurator.SumValue>
            <Configurator.SumValue>
              {configuratorProducts
                .reduce((sum, value) => {
                  return sum + value.price;
                }, 0)
                .toFixed(2) || "0.00"}
              zł
            </Configurator.SumValue>
          </Configurator.SumField>
        </Configurator.SumCon>
        <Configurator.SumBtn onClick={() => AddPcToBasket()}>
          Dodaj do koszyka
        </Configurator.SumBtn>
      </Configurator.SumPanel>
    </Configurator.Summary>
  );
};

export default Summary;
