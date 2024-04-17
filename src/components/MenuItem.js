import React from "react";
import PageView from './PageView';
import './Main.css';
import './MenuItem.css';


function MenuItem({item}) {
    return (
      <PageView isDarkBackground maxHeight='100vh'>
        <div className="menu-item-grid">
            <img src={item.image} alt={item.name} />
            <h1 className="menu-text">{item.name} - {item.cost}</h1>
            <p className="menu-text">{item.description}</p>
        </div>
      </PageView>
    );
  }
export default MenuItem;