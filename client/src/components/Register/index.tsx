import React from "react";
import { DivProps, HeadProps, LabelProps, SpanProps } from "../../types/Types";
import {
  Consens,
  Title,
  Container,
  Accept,
  Checkbox,
  Mark,
} from "./style/registerStyle";

export default function RegisterConsens({ children, ...restprops }: DivProps) {
  return <Consens {...restprops}>{children}</Consens>;
}
RegisterConsens.Title = function RegisterConsensTitle({
  children,
  ...restprops
}: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

RegisterConsens.Container = function RegisterConsensContainer({
  children,
  ...restprops
}: DivProps) {
  return <Container {...restprops}>{children}</Container>;
};
RegisterConsens.Accept = function RegisterConsensAccept({
  children,
  ...restprops
}: LabelProps) {
  return <Accept {...restprops}>{children}</Accept>;
};
RegisterConsens.Checkbox = function RegisterConsensCheckbox({ ...restprops }) {
  return <Checkbox {...restprops} />;
};
RegisterConsens.Mark = function RegisterConsensMark({
  children,
  ...restprops
}: SpanProps) {
  return <Mark {...restprops}>{children}</Mark>;
};
