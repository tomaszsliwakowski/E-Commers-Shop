import React from "react";
import { JsxProps } from "../../types/Types";
import { Container } from "./style/SingleProductStyle.";

export default function SingleProduct(props: JsxProps) {
  return <Container>{props.children}</Container>;
}
