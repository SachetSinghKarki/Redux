import React from "react";
import "./MenuLink.css";

const MenuLink = ({icon,text}) => {
  return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text ==="Logout" && "(Sinchan)"}</span>
    </div>
  );
};

export default MenuLink;
