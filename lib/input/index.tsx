import React, {
  Fragment,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";

import FormItem from "../form/formItem";
import ValidationMessages from "../validator";

interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  name: string;
  label?: string;
  initialValue?: string;
  store?: any;
}

const Input = (props: any) => {
  const { label, className, initialValue } = props;
  let _props = useMemo(() => ({ ...props }), [props]);
  delete _props.initialValue;
  delete _props.store;
  delete _props.label;
  let _class = className ? `input-field ${className}` : `input-field`;
  let inputRef = useRef<HTMLInputElement>();

  const inputWithProps = useCallback(() => {
    return React.createElement("input", {
      type: "text",
      className: _class,
      key: "text-input",
      ref: inputRef,
      id: props.id || props.name,
      ..._props,
      onChange: (e: React.FormEvent<HTMLInputElement>): void => {
        if (inputRef?.current) {
          props.store.setState({ [props.name]: e?.currentTarget?.value });
        }

        props.onChange && props.onChange(e);
      },
    });
  }, [_class, _props, props]);
  const value = props.store.getState(props.name);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value || initialValue || "";
    }
  }, [inputRef, value, initialValue]);

  return (
    <FormItem
      id="rp_form-item__v1"
      className={`wrapper invalid`}
      label={label || ""}
      isRequired={props.required || false}
    >
      {inputWithProps()}
    </FormItem>
  );
};

export default React.memo(Input);
