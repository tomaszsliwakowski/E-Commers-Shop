import React from "react";
import { Configurator } from ".";
import { AiOutlinePlus } from "react-icons/ai";
import gpu from "../../assetsCon/img/gpu.png";

const Component = () => {
  return (
    <Configurator.Component>
      <Configurator.LeftPart>
        <Configurator.Name>Karta Graficzna</Configurator.Name>
        <Configurator.Image src={gpu} alt="GPU" />
      </Configurator.LeftPart>
      <Configurator.RightPart>
        <AiOutlinePlus />
      </Configurator.RightPart>
    </Configurator.Component>
  );
};

export default Component;
