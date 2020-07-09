import React from "react";

const InputSelect = (props) => {
  const { labelFor, labelName, selectId } = props;
  return (
    <div className="input-group">
      <label for={labelFor} className="input-label">
        {labelName}
      </label>
      <select id={selectId} className="options">
        <option value="0">0</option>
        <option value="0">1</option>
        <option value="0">2</option>
        <option value="0">3</option>
        <option value="0">4</option>
        <option value="0">5</option>
      </select>
    </div>
  );
};

export default InputSelect;
