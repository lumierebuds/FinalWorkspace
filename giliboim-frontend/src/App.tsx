
import React from "react";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteSearch from "./pages/RouteSearch";
import Friend from './components/friend';
import Settings from './components/Settings';
        
import LoginPage from './components/LoginPage';
import TermsOfUse from './components/TermsOfUse';
import InsertMember from './components/InsertMember';
import Community from "./components/Community";

import Withdraw from "./components/Withdraw";
import Information from "./components/Information";
        

const App: React.FC = () => {
  return (
    <div className="app">
      {//로그인했을때
       <Header />
      // <Main />
      // <Friend/>
      // <Settings />
      // <Community/>
    }
    <Information/>
     {
        //<TermsOfUse/>
        //<InsertMember/>
     }
      <Footer/>
    </div>
  );
};

export default App;
