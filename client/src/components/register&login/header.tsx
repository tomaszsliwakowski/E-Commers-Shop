import React from "react";
import LogRegHeader from ".";
import { HomeRoute } from "../../routes";

const SecondHeader = () => {
  return (
    <LogRegHeader>
      <LogRegHeader.Logo to={HomeRoute}>Shop</LogRegHeader.Logo>
    </LogRegHeader>
  );
};

export default SecondHeader;
