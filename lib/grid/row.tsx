import React, { CSSProperties, ReactElement, ReactNode } from "react";

import { useBreakPoints } from "@app/hooks/useBreakPoints";
import styles from "./grid.module.css";
import { BreakPoints, RowPropTypes } from "../types/grid";
import { getFlexProps } from "./utils";

// Create a Row component for the grid
export const Row: React.FC<RowPropTypes> = ({
  children,
  gap,
  align,
  style,
}) => {
  const breakPoint:BreakPoints = useBreakPoints();
  return (
    <div
      className={styles.row}
      style={{ ...getFlexProps(breakPoint, align, gap), ...style }}
    >
      {React.Children.map(children, (child) => {
        // Do not render anything if child is not a valid element
        if (!React.isValidElement(child)) return;

        const validElement = ["GRID_COL"];
        // @ts-ignore: do not render anything but col as a child component
        if (!validElement.includes(child.type.displayName)) {
          throw new Error("Child should be Col component");
        }

        // pass gap props to each col component
        return React.cloneElement(child, {
          gap,
          breakPoint,
        } as React.Attributes);
      })}
    </div>
  );
};

Row.displayName = "GRID_ROW";
