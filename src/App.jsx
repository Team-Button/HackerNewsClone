import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Articles from './components/articles/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
