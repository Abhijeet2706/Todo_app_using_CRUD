import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-title">{props.title}</div>
    </div>
  );
};

export default Header;
