import React from "react";
import { Configurator } from ".";
import { AiOutlinePlus } from "react-icons/ai";

type PROPS = {
  item: {
    name: string;
    image: any;
  };
};

const Component = (props: PROPS) => {
  const { name, image } = props.item;
  return (
    <Configurator.Component>
      <Configurator.LeftPart>
        <Configurator.Name>{name}</Configurator.Name>
        <Configurator.Image src={image} alt={name} />
      </Configurator.LeftPart>
      <Configurator.RightPart>
        <AiOutlinePlus />
      </Configurator.RightPart>
    </Configurator.Component>
  );
};

export default Component;
