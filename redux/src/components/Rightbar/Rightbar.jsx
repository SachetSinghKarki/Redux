import React from "react";
import "./Rightbar.css";
import Recommendation from "../Recommendation/Recommendation";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
