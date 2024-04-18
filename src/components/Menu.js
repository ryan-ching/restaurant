import React from "react";
import PageView from './PageView';
import './Main.css';
import rice from '../images/rice.jpg';
import hummus from '../images/hummus.jpg';
import sandwich from '../images/sandwich.jpg';
import salad from '../images/salad.jpg';
import platter from '../images/platter.jpg';
import './Menu.css';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
function Menu() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [transitioning, setTransitioning] = React.useState(false);
  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % menu.length);
      setTransitioning(false);
    }, 300);
  }
  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1) % menu.length);
      setTransitioning(false);
    }, 300);
  }
    return (
      <PageView isDarkBackground maxHeight='100vh' backgroundColor="#4e5e56">
          <div className={`menu-grid ${transitioning ? 'transitioning' : ''}`} key={currentIndex}>
            <button className="menu-nav" onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <MenuItem className="menu-item" item={menu[(currentIndex - 1 + menu.length) % menu.length]}/>
            <MenuItem className="menu-item" item={menu[currentIndex]}/>
            <MenuItem className="menu-item" item={menu[(currentIndex + 1) % menu.length]}/>
            <button className="menu-nav" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
      </PageView>
    );
  }
export default Menu;