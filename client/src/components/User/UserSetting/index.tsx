import React from "react";
import {
  BtnProps,
  DivProps,
  FormProps,
  HeadProps,
  SpanProps,
} from "../../../types/Types";
import {
  Container,
  Title,
  DataContainer,
  SingleDataContainer,
  DataName,
  DataBtn,
  DataValue,
  SingleData,
  Modal,
  ModalBody,
  ModalTopPanel,
  ModalSaveBtn,
  ModalTitle,
  ModalContent,
  Form,
  Input,
  InputCon,
  InputName,
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

Settings.Modal = function SettingsModal({ children, ...restprops }: DivProps) {
  return <Modal {...restprops}>{children}</Modal>;
};

Settings.ModalBody = function SettingsModalBody({
  children,
  ...restprops
}: DivProps) {
  return <ModalBody {...restprops}>{children}</ModalBody>;
};

Settings.ModalTopPanel = function SettingsModalTopPanel({
  children,
  ...restprops
}: DivProps) {
  return <ModalTopPanel {...restprops}>{children}</ModalTopPanel>;
};
Settings.ModalSaveBtn = function SettingsModalSaveBtn({
  children,
  ...restprops
}: BtnProps) {
  return <ModalSaveBtn {...restprops}>{children}</ModalSaveBtn>;
};
Settings.ModalTitle = function SettingsModalTitle({
  children,
  ...restprops
}: HeadProps) {
  return <ModalTitle {...restprops}>{children}</ModalTitle>;
};

Settings.ModalContent = function SettingsModalContent({
  children,
  ...restprops
}: DivProps) {
  return <ModalContent {...restprops}>{children}</ModalContent>;
};

Settings.Form = function SettingsForm({ children, ...restprops }: FormProps) {
  return <Form {...restprops}>{children}</Form>;
};
Settings.InputCon = function SettingsInputCon({
  children,
  ...restprops
}: DivProps) {
  return <InputCon {...restprops}>{children}</InputCon>;
};
Settings.Input = function SettingsInput({ ...restprops }) {
  return <Input {...restprops} />;
};
Settings.InputName = function SettingsInputName({
  children,
  ...restprops
}: SpanProps) {
  return <InputName {...restprops}>{children}</InputName>;
};
