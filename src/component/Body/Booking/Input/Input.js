import React from "react";

const Input = (props) => {
  const { labelFor, labelName, inputType, inputId } = props;
  return (
    <div className="input-group">
      <label htmlFor={labelFor} className="input-label">
        {labelName}
      </label>
      <input type={inputType} className="input" id={inputId} />
    </div>
  );
};

export default Input;
