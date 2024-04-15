import './App.css';
import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Header />
      <meta name="description" content="Little Lemon is a restaurant."></meta>
      <Nav />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
