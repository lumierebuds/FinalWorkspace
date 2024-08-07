
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
import Mypage from "./components/Mypage";
import InquiryList from "./components/InquiryList";


const App: React.FC = () => {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/InquiryList" element={<InquiryList />} />
          {/* <Route path="/Dangers" element={<Dangers />} /> */}
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
