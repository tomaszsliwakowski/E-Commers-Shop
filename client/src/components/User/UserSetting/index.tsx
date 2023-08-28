import React from "react";
import { BtnProps, DivProps, HeadProps, SpanProps } from "../../../types/Types";
import {
  Container,
  Title,
  DataContainer,
  SingleDataContainer,
  DataName,
  DataBtn,
  DataValue,
  SingleData,
} from "./style/index";

export function Settings({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Settings.Title = function SettingsTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

Settings.DataContainer = function SettingsDataContainer({
  children,
  ...restprops
}: DivProps) {
  return <DataContainer {...restprops}>{children}</DataContainer>;
};
Settings.SingleDataContainer = function SettingsSingleDataContainer({
  children,
  ...restprops
}: DivProps) {
  return <SingleDataContainer {...restprops}>{children}</SingleDataContainer>;
};

Settings.DataName = function SettingsDataName({
  children,
  ...restprops
}: SpanProps) {
  return <DataName {...restprops}>{children}</DataName>;
};

Settings.SingleData = function SettingsSingleData({
  children,
  ...restprops
}: DivProps) {
  return <SingleData {...restprops}>{children}</SingleData>;
};
Settings.DataValue = function SettingsDataValue({
  children,
  ...restprops
}: SpanProps) {
  return <DataValue {...restprops}>{children}</DataValue>;
};
Settings.DataBtn = function SettingsDataBtn({
  children,
  ...restprops
}: BtnProps) {
  return <DataBtn {...restprops}>{children}</DataBtn>;
};
