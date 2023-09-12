import React from "react";
import { Configurator } from ".";
import Component from "./component";

const ConfiguratorSection = () => {
  return (
    <Configurator>
      <Configurator.Title>Konfigurator komputera PC</Configurator.Title>
      <Configurator.Components>
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
      </Configurator.Components>
    </Configurator>
  );
};

export default ConfiguratorSection;
