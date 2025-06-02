import React from "react";
import {
    ExitToAppOutlined,
    FileCopyOutlined,
    GroupOutlined,
    HearingOutlined,
    HomeOutlined,
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined,
  } from "@mui/icons-material";
import MenuLink from "../MenuLink/MenuLink";
import "./Leftbar.css";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeOutlined />} text="HomePage" />
        <MenuLink icon={<List />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<GroupOutlined />} text="Groups" />
        <MenuLink icon={<FileCopyOutlined />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
        <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
        <MenuLink icon={<HearingOutlined />} text="Wishlist" />
        <MenuLink icon={<Settings />} text="Settings" />
        <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
      </div>
    </div>
  );
};

export default Leftbar;
