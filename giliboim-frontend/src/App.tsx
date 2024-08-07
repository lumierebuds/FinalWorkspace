
import React from "react";
import "./App.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteSearch from "./pages/RouteSearch";

        
import LoginPage from './pages/account/LoginPage';
import TermsOfUse from './pages/account/TermsOfUse';
import InsertMember from './pages/account/InsertMember';

        

const App: React.FC = () => {
  return (
    <div className="app">
      {//로그인했을때
      // <Header />
      // <Main />
      // <Friend/>
      // <Settings />
      // <Community/>
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
