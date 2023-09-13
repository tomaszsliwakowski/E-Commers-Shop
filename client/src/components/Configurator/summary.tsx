import React from "react";
import { Configurator } from ".";

const Summary = () => {
  return (
    <Configurator.Summary>
      <Configurator.SumPanel>
        <Configurator.SumCon>
          <Configurator.SumField>
            <Configurator.SumValue>Liczba elementów:</Configurator.SumValue>
            <Configurator.SumValue>8</Configurator.SumValue>
          </Configurator.SumField>
          <Configurator.SumField>
            <Configurator.SumValue>Wartość:</Configurator.SumValue>
            <Configurator.SumValue>10000zł</Configurator.SumValue>
          </Configurator.SumField>
        </Configurator.SumCon>
        <Configurator.SumBtn>Dodaj do koszyka</Configurator.SumBtn>
      </Configurator.SumPanel>
    </Configurator.Summary>
  );
};

export default Summary;
