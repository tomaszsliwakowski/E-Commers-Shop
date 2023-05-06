import React from "react";
import LogRegHeader from ".";
import { HomeRoute } from "../../routes";

const HeaderLogReg = () => {
  return (
    <LogRegHeader>
      <LogRegHeader.Logo href={HomeRoute}>Shop</LogRegHeader.Logo>
    </LogRegHeader>
  );
};

export default HeaderLogReg;
