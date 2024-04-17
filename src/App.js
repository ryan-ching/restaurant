import './App.css';
import React from 'react';
import Main from './components/Main';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </main>
  );
}

export default App;
