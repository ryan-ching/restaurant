import React from "react";
import PageView from './PageView';
import './Main.css';
import food1 from '../images/food1.jpg';
const callToAction = "Welcome to the Little Lemon Website. We are a family-owned restaurant that serves delicious food. We are open for breakfast, lunch, and dinner. We also offer catering services. Please reserve a table or place an order online. We look forward to serving you!";
function Main() {
    return (
      <PageView isDarkBackground maxHeight='100vh'>
        <main className="main-container">
          <div className="main-item">
            <h1 className="main-text">Welcome to the Little Lemon Website</h1>
            <p className="main-text">{callToAction}</p>
            <button className="main-button">Reserve A Table</button>
            <button className="main-button">Order Online</button>
          </div>
          <div className="main-item">
            <img src={food1} alt="food1" style={{width:'50vh', height:'30vh'}}/>
          </div>
        </main>
      </PageView>
    );
  }
export default Main;