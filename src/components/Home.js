import React from "react";
import little_lemon_logo from "../images/little_lemon_logo.png";
import './Home.css'
function Home() {
    return (
      <header className="home-container">
        <div className="home-grid">
          <img 
            src={little_lemon_logo} 
            alt="Little Lemon Logo"
            style={{maxWidth:'200px', maxHeight:'200px'}} 
          />
          <p>
            Welcome to the Little Lemon Website
          </p>
        </div>
      </header>
    );
  }
export default Home;