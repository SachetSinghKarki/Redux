import React from "react";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import "./Navbar.css";
import { useSelector } from "react-redux";


const Navbar = () => {

  const name = useSelector((state)=>state.user.name)

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Amaya</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>

        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              className="searchInput"
            />
          </div>
        </div>

        <div className="navbarRight">
          <img
            src="https://img.favpng.com/11/2/24/crayon-shin-chan-shinnosuke-nohara-drawing-donald-duck-animated-film-png-favpng-rnY7fn7nX9h5WVB0bPfxTqsRt.jpg"
            alt=""
            className="avatar"
          />

          <span className="navbarName">{name? name : "guest"}</span>
          <ArrowDropDown/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
