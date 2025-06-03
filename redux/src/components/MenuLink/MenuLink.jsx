import React from "react";
import "./MenuLink.css";
import { useSelector } from "react-redux";

const MenuLink = ({ icon, text }) => {
  const name = useSelector((state) => state.user.name);

  return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
      {text === "Logout" && (
        <span className="menuLinkTextName">
          {text === "Logout" && name ? name : "guest"}
        </span>
      )}
    </div>
  );
};

export default MenuLink;
