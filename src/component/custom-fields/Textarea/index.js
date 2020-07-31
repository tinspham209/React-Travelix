import PropTypes from "prop-types";
import React from "react";

TextArea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function TextArea(props) {
  const {
    // field, form, type,
    placeholder,
    disabled,
  } = props;

  return (
    <React.Fragment>
      <div className="input-group">
        <textarea
          className="input"
          disabled={disabled}
          placeholder={placeholder}
          cols="30"
          rows="8"
        ></textarea>
        <span className="bar"></span>
      </div>
    </React.Fragment>
  );
}

export default TextArea;
