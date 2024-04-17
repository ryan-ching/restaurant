import React from "react";
import PageView from './PageView';
import './Main.css';
import rice from '../images/rice.jpg';
import hummus from '../images/hummus.jpg';
import sandwich from '../images/sandwich.jpg';
import salad from '../images/salad.jpg';
import platter from '../images/platter.jpg';
import './MenuItem.css';

const menu = [
  {
    name: "Rice Plate",
    cost: "$10",
    description: "A delicious plate of rice with your choice of meat and vegetables.",
    image: rice
  },
  {
    name: "Hummus Plate",
    cost: "$8",
    description: "A delicious plate of hummus with pita bread and vegetables.",
    image: hummus
  },
  {
    name: "Sandwich",
    cost: "$6",
    description: "A delicious sandwich with your choice of meat and vegetables.",
    image: sandwich
  },
  {
    name: "Salad",
    cost: "$5",
    description: "A delicious salad with your choice of meat and vegetables.",
    image: salad
  },
  {
    name: "Platter",
    cost: "$20",
    description: "A delicious platter with your choice of meat and vegetables.",
    image: platter
  }
]
function MenuItem({item}) {
    return (
      <PageView isDarkBackground maxHeight='100vh'>
        <div className="menu-item-grid">
            <img src={item.image} alt={item.name} />
            <h1 className="menu-text">{item.name} - {item.cost}</h1>
            <h2 className="menu-text">{item.description}</h2>
        </div>
      </PageView>
    );
  }
export default MenuItem;