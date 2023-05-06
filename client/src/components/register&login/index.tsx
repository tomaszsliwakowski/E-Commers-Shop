import React from "react";
import { JsxProps } from "../../types/Types";
import {
  Header,
  Logo,
  Out,
  OutBtn,
  Btn,
  Info,
  Title,
  List,
  Element,
  Image,
  Name,
} from "./style/reg&logStyle";

export default function LogRegHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
}

LogRegHeader.Logo = function LogRegHeaderLogo(props: JsxProps) {
  return <Logo href={props.href}>{props.children}</Logo>;
};

export function LogRegOut(props: JsxProps) {
  return <Out>{props.children}</Out>;
}

LogRegOut.OutBtn = function LogRegOutBtn(props: JsxProps) {
  return <OutBtn href={props.href}>{props.children}</OutBtn>;
};

export function LogRegBtn(props: JsxProps) {
  return <Btn>{props.children}</Btn>;
}

export function LogRegInfo(props: JsxProps) {
  return <Info>{props.children}</Info>;
}

LogRegInfo.Title = function LogRegInfoTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};

LogRegInfo.List = function LogRegInfoList(props: JsxProps) {
  return <List>{props.children}</List>;
};
LogRegInfo.Element = function LogRegInfoElement(props: JsxProps) {
  return <Element>{props.children}</Element>;
};

LogRegInfo.Image = function LogRegInfoImage({ ...restprops }) {
  return <Image {...restprops} />;
};
LogRegInfo.Name = function LogRegInfoName(props: JsxProps) {
  return <Name>{props.children}</Name>;
};
