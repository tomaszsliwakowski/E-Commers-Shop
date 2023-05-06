import React from "react";
import { JsxProps } from "../../types/Types";
import {
  Consens,
  Title,
  Container,
  Accept,
  Checkbox,
  Mark,
} from "./style/registerStyle";

export default function RegisterConsens(props: JsxProps) {
  return <Consens>{props.children}</Consens>;
}
RegisterConsens.Title = function RegisterConsensTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};

RegisterConsens.Container = function RegisterConsensContainer(props: JsxProps) {
  return <Container>{props.children}</Container>;
};
RegisterConsens.Accept = function RegisterConsensAccept(props: JsxProps) {
  return <Accept>{props.children}</Accept>;
};
RegisterConsens.Checkbox = function RegisterConsensCheckbox({ ...restprops }) {
  return <Checkbox {...restprops} />;
};
RegisterConsens.Mark = function RegisterConsensMark(props: JsxProps) {
  return <Mark>{props.children}</Mark>;
};
