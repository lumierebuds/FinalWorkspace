import React from "react";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import RouteSearch from "./pages/RouteSearch";
import Friend from './components/friend';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
        {/* <Main /> */}
        <Friend/>
      <Footer/>
    </div>
  );
};

export default App;
