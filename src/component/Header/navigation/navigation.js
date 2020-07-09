import React from "react";
import "./navigation.css";

const navigation = (props) => {
  const { href, name } = props;
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {name}
      </a>
    </li>
  );
};

export default navigation;
