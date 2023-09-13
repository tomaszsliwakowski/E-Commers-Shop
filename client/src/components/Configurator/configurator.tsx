import React from "react";
import { Configurator } from ".";
import Component from "./component";
import { ComponentsAssets } from "../../assets";
import Summary from "./summary";

const ConfiguratorSection = () => {
  return (
    <Configurator>
      <Configurator.Title>Konfigurator komputera PC</Configurator.Title>
      <Configurator.Components>
        {ComponentsAssets.map((item, id) => (
          <Component key={id} item={item} />
        ))}
      </Configurator.Components>
      <Summary />
    </Configurator>
  );
};

export default ConfiguratorSection;
