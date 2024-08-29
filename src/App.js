import React from 'react';
import './App.css';
import Header from './components/header';
import Title from './components/title';
import Banner from './components/banner';
import Formulario from './components/form';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-social-media">
          <Header />
        </div>
        <div className="header-title">
          <Title />
        </div>
        <div className="header-banner">
          <Banner />
        </div>
      </header>
      <main className="App-main">
        <div className="form-section">
          <Formulario />
        </div>
        <div className="current-date-time">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
