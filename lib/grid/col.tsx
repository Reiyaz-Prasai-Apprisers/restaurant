import React, { CSSProperties, useCallback, useRef, useEffect } from "react";

import { ColPropTypes } from "@app/lib/types/grid";

import styles from "./grid.module.css";
import { getOrder, getWidth } from "./utils";

export const Col: React.FC<ColPropTypes> = React.memo(
  ({
    children,
    className,
    span,
    style,
    // @ts-ignore
    gap,
    // @ts-ignore
    breakPoint,
    order,
  }) => {
    let colRef = useRef<HTMLDivElement>(null);

    const _style: CSSProperties = {
      flex: getWidth(breakPoint, span, gap).flex,
      maxWidth: getWidth(breakPoint, span, gap).width,
    };

    const child = useCallback(() => children, [children]);

    useEffect(() => {
      if (colRef?.current) {
        colRef.current.style.order = String(getOrder(breakPoint, order));
      }
    }, [colRef, order, breakPoint]);

    return (
      <div
        ref={colRef}
        className={`${styles.col} ${className || ""}`.trim()}
        style={{ ..._style, ...(style || {}) }}
      >
        {child()}
      </div>
    );
  }
);

Col.displayName = "GRID_COL";
