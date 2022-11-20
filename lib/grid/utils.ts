import {
  SpanType,
  BreakPointSpan,
  AlignType,
  BreakPointAlign,
  GapI,
  OrderType,
  BreakPoints,
} from "@app/lib/types/grid";

const parseWidth = (
  span: number = 0,
  gap: [number, number] | [number] = [0, 0]
) => {
  return `calc(${Math.min(100, Math.max(span, 0))}% - ${
    gap[0] || gap[1] || 0
  }px)`;
};

export const getWidth = (
  breakPoint: string,
  span?: SpanType,
  gap: [number, number] | [number] = [0, 0]
) => {
  let width = parseWidth(100, gap);
  if (typeof span === "number") width = parseWidth(span, gap);
  if (span instanceof Object) {
    const _span: BreakPointSpan = {
      xxl: span.xxl || span.xl || span.l || span.m || span.s || span.xs || 100,
      xl: span.xl || span.l || span.m || span.s || span.xs || 100,
      l: span.l || span.m || span.s || span.xs || 100,
      m: span.m || span.s || span.xs || 100,
      s: span.s || span.xs || 100,
      xs: span.xs || 100,
    };
    width = parseWidth(_span[breakPoint] || 100, gap);
  }
  return { width, flex: `0 0 ${width}` };
};

export const getGap = (gap?: GapI) => {
  if (!gap) return {};
  if (gap.length === 1) return { gap: gap[0] };
  return { rowGap: gap[1], columnGap: gap[0] };
};

export const getFlexProps = (
  breakPoint: BreakPoints,
  align: AlignType,
  gap?: GapI
): Object => {
  let values = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    stretch: "stretch",
  };
  if (typeof align === "string")
    return { alignItems: values[align], ...getGap(gap) };
  const _align: BreakPointAlign = {
    xxl:
      align?.xxl ||
      align?.xl ||
      align?.l ||
      align?.m ||
      align?.s ||
      align?.xs ||
      "top",
    xl: align?.xl || align?.l || align?.m || align?.s || align?.xs || "top",
    l: align?.l || align?.m || align?.s || align?.xs || "top",
    m: align?.m || align?.s || align?.xs || "top",
    s: align?.s || align?.xs || "top",
    xs: align?.xs || "top",
  };
  return { alignItems: values[_align[breakPoint] || "top"], ...getGap(gap) };
};

export const getOrder = (
  breakPoint: BreakPoints,
  order?: OrderType
): string => {
  if (!order) return "auto";
  
  if (typeof order === "number") return String(order);

  const _order: OrderType = {
    xxl:
      order?.xxl || order?.xl || order?.l || order?.m || order?.s || order?.xs,
    xl: order?.xl || order?.l || order?.m || order?.s || order?.xs,
    l: order?.l || order?.m || order?.s || order?.xs,
    m: order?.m || order?.s || order?.xs,
    s: order?.s || order?.xs,
    xs: order?.xs,
  };

  return (_order[breakPoint] && String(_order[breakPoint])) || "auto";
};
