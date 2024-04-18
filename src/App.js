import './App.css';
import React from 'react';
import Main from './components/Main';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
function App() {
  return (
    <main>
      <Nav />
      <Main />
      <Menu />
      <BookingPage />
      <Footer />
    </main>
  );
}

export default App;
