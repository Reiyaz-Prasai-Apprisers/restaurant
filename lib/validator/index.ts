import React from "react";

const ValidationMessages: React.FC<any> = () => {
  let messages = ["This is a validation message"];
  const validationListItem = messages.map((message, index) => {
    return React.createElement(
      "span",
      {
        style: { textAlign: "left" },
        key: "validation-message" + "-" + index,
      },
      message
    );
  });

  const validationMessage = React.createElement(
    "div",
    {
      className: "validation-message",
    },
    [validationListItem]
  );

  return validationMessage;
};

export default ValidationMessages;
