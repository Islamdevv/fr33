import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#181818",
      }}
    >
      <Link to="/add">
        <h1>AddProduct</h1>
      </Link>
      <Link to="/list">
        <h1>ListProduct</h1>
      </Link>
    </div>
  );
};

export default Header;
