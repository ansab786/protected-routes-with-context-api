import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header.css";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="list">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">SignIn</Link>
          <Link to="/signout">SignOut</Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
