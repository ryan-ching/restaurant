import React from "react";
import little_lemon_logo from "../images/little_lemon_logo.png";
function Header() {
    return (
      <header>
        <img src={little_lemon_logo} alt="Little Lemon Logo" />
        <meta name="og:image" content={little_lemon_logo} />
      </header>
    );
  }
export default Header;