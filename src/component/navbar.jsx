import React from "react";
import "./css/navbar.css";
import logo from "../assets/logo.svg";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-content">
          <img className="logo" src={logo} alt="" />

          <div className="icons">
            <i
              class="fa icon fa-shopping-cart"
              style={{ background: "#225AF2" }}
              aria-hidden="true"
            ></i>
            <i
              class="fa icon fa-heart"
              style={{ background: "#F2226A" }}
              aria-hidden="true"
            ></i>
            <i
              class="fa icon fa-bell"
              style={{ background: "#FFDC00" }}
              aria-hidden="true"
            ></i>
            <i
              style={{ background: "#3B5998" }}
              class="fa icon fa-user-circle"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </>
  );
};

export default Navbar;
