import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Settings from './components/Settings';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
