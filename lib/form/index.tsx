import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState, useCallback } from "react";
import formStore from "./store";

const Form: React.FC<any> = ({ children, form }: any) => {
  let formRef = useRef<HTMLFormElement>(null);

  const getChildrenWithProps = useCallback(
    (c: typeof children): typeof children =>
      React.Children.map(c, (child) => {
        if (
          !React.isValidElement(child) ||
          // @ts-ignore
          child.type.displayName !== "FormItem"
        ) {
          if (child.props.children)
            return getChildrenWithProps(child.props.children);
        }

        return React.cloneElement(child, { store: form });
      }),
    [form]
  );

  useEffect(() => {
    if (formRef.current) {
      let values: Object = {};
      formRef.current.querySelectorAll("#rp_form-item__v1").forEach((child) => {
        // @ts-ignore
        values[child?.lastElementChild?.name] =
          // @ts-ignore
          child.lastElementChild.value;
      });

      form.setState instanceof Function && form.setState(values);
    }
  }, [formRef, form]);

  return <form ref={formRef}>{getChildrenWithProps(children)}</form>;
};

export const useForm = () => {
  let [state, setState] = useState<any>(formStore);
  useEffect(() => {
    formStore.subscribe(setState);
  }, []);

  return { form: state };
};

Form.prototype = { useForm };
export default Form;
