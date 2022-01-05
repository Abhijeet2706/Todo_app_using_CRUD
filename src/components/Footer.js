import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-title">
        {props.title}
        <span className="footerGitHub">{props.link}</span>
        <span className="footerName">{props.name} </span>
        <span className="footerYaer">{props.year}</span>
      </div>
    </div>
  );
};
export default Footer;
