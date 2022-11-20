import { CSSProperties, ReactElement, ReactNode } from "react";

// Props type for Row Component
export interface PropTypes {
  children?: ReactNode | ReactElement | JSX.Element;
  className?: string;
  style?: CSSProperties;
}

export type GapI = [number, number] | [number];
export interface RowPropTypes extends PropTypes {
  gap?: GapI;
  align?: AlignType;
}

export interface ColPropTypes extends PropTypes {
  span?: SpanType;
  order?: OrderType;
}

export type BreakPointSpan = {
  [key: string]: number | undefined;
  xxl?: number;
  xl?: number;
  l?: number;
  m?: number;
  s?: number;
  xs?: number;
};

export type AlignI = "top" | "center" | "bottom" | "stretch" | undefined;
export type BreakPointAlign = {
  [key: string]: AlignI;
  xxl?: AlignI;
  xl?: AlignI;
  l?: AlignI;
  m?: AlignI;
  s?: AlignI;
  xs?: AlignI;
};

export type BreakPoints = "xxl" | "xl" | "l" | "m" | "s" | "xs";
export type AlignType = BreakPointAlign | AlignI;
export type SpanType = BreakPointSpan | number;
export type OrderType = BreakPointSpan | number;
