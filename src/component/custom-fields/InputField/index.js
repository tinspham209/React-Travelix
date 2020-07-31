import PropTypes from "prop-types";
import React from "react";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const {
    // field, form,
    type,
    placeholder,
    disabled,
  } = props;

  return (
    <React.Fragment>
      <div className="input-group">
        <input
          type={type}
          className="input"
          disabled={disabled}
          placeholder={placeholder}
          required
        />
        <span className="bar"></span>
      </div>
    </React.Fragment>
  );
}

export default InputField;
