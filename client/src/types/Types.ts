import { type } from "os";
import { ReactNode } from "react";

export type JsxProps = {
  children?: ReactNode;
  href?: string;
  display?: string;
  scroll?: boolean;
  scrollDisplay?: string;
  width?: number;
  style?: string;
};

export type LinkProps = {
  children?: ReactNode;
  to: string;
};

export type WindowSizeType = {
  width: number | undefined;
  height: number | undefined;
};

export type ScrollPositionType = {
  position: number | undefined;
};

export type DateType = {
  Year: number;
  Month: number;
  Day: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
};

export type TimerType = {
  second: number;
  minutes: number;
  hour: number;
};

export type HomeProductType = {
  name: string;
  img: string;
  price: number;
  link: string;
};
