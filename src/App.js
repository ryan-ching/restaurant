import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Nav />
      <Home />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
