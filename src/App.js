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
      <Nav />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
