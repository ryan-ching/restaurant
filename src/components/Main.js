import React from "react";
import PageView from './PageView';
import './Main.css';
import kitchen1 from '../images/kitchen1.jpg';
import kitchen2 from '../images/kitchen2.jpg';
import kitchen3 from '../images/kitchen3.jpg';
const callToAction = "Welcome to the Little Lemon Website. We are a family-owned restaurant that serves delicious food. We are open for lunch and dinner. We also offer catering services. Please reserve a table or place an order online. We look forward to serving you!";
function Main() {
    return (
      <PageView isDarkBackground maxHeight='100vh' backgroundColor="#4e5e57">
        <main className="main-container">
          <div className="main-item">
            <h1 className="main-text">Welcome to Little Lemon!</h1>
            <h2 className="main-subtext">Open 1:00 - 11:00 PM</h2>
            <h2 className="main-subtext">Monday - Saturday</h2>
            <p className="main-call">{callToAction}</p>
            <button className="main-button">Reserve A Table</button>
            <button className="main-button">Order Online</button>
          </div>
          <div className="main-item">
            <img src={kitchen1} alt="kitchen1"/>
            <img src={kitchen2} alt="kitchen2"/>
            <img src={kitchen3} alt="kitchen3"/>
          </div>
        </main>
      </PageView>
    );
  }
export default Main;