import React from "react";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import RouteSearch from "./pages/RouteSearch";
import Friend from './components/friend';
import LoginPage from './components/LoginPage';
import TermsOfUse from './components/TermsOfUse';
import InsertMember from './components/InsertMember';

const App: React.FC = () => {
  return (
    <div className="app">
      {//로그인했을때
      // <Header />
      // <Main />
      // <Friend/>
      // <Footer/>
      }
      {
        <LoginPage/>
        //<TermsOfUse/>
        //<InsertMember/>
      }
    </div>
  );
};

export default App;
