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
import Community from "./pages/community/Community";
import LocationPicker from "./pages/community/LocationPicker";
import ReportForm from "./pages/community/ReportEditForm";
import ComplaintPage from "./pages/community/ComplaintPage";
import CustomComplaintPage from "./pages/community/CustomComplaintPage";
import AskPage from "./pages/community/AskPage";

const App: React.FC = () => {
  return (
    <div className="app">
      {//로그인했을때
      // <Header title="메인" showBackButton={false} showCloseButton={false} />
      // <Main />
      // <Friend/>
      // <Settings />
      // <Community/>
      // <Footer/>
      //<LoginPage/>
      }
      <Header />
        <AskPage />

      <Footer />
      {
        //<TermsOfUse/>
        //<InsertMember/>
      }
    </div>
  );
};

export default App;
