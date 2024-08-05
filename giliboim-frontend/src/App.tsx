import React from 'react';
import Main from './components/Main';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
        <Main />
      <Footer/>
    </div>
  );
};

export default App;


