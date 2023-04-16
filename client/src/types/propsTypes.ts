import { ReactNode } from "react";

export type JsxProps = {
  children: ReactNode;
  href?: string;
  display?: string;
  scroll?: boolean;
  scrollDisplay?: string;
  width?: number;
};

export type WindowSizeType = {
  width: number | undefined;
  height: number | undefined;
};

export type ScrollPositionType = {
  position: number | undefined;
};
