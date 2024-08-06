import React from "react";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import RouteSearch from "./pages/RouteSearch";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/route" element={<RouteSearch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
