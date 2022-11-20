import React, { useRef, useEffect } from "react";
import ValidationMessages from "../validator";
import classes from "./form.module.css"

let requireDot = (isRequired: boolean): React.ReactNode => {
  return (
    <span key="reqiured-dot" className={classes.required}>
      {isRequired ? " *" : ""}
    </span>
  );
};

export const Label: React.FC<{ label: string; isRequired: boolean }> = ({
  label,
  isRequired,
}) => {
  return (
    <label className={"input-field-label"}>
      {label}
      {requireDot(isRequired)}
    </label>
  );
};

const FormItem: React.FC<any> = (props) => {
  const { label, children, className, id} = props;


  const Child = React.Children.only(children)

  return (
    <div  id={id} className={className}>
      <Label label={label || ""} isRequired={props.isRequired || false} />
      <ValidationMessages />
      {Child}
    </div>
  );
};

FormItem.displayName = "FormItem";

export default React.memo(FormItem);
