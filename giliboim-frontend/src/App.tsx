import React from "react";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteSearch from "./pages/route/RouteSearch";
import RouteMain from "./pages/route/RouteMain";
import RouteSelect from "./pages/route/RouteSelect";
import Friend from "./components/Friend";
import Settings from "./components/Settings";

import LoginPage from "./pages/account/LoginPage";
import TermsOfUse from "./pages/account/TermsOfUse";
import InsertMember from "./pages/account/InsertMember";
import Withdraw from "./components/Withdraw";
import Information from "./components/Information";
import Community from "./pages/community/Community";
import LocationPicker from "./pages/community/LocationPicker";
import ReportForm from "./pages/community/ReportEditForm";
import ComplaintPage from "./pages/community/ComplaintPage";
import CustomComplaintPage from "./pages/community/CustomComplaintPage";
import AskPage from "./pages/community/AskPage";
import Mypage from "./components/Mypage";
import InquiryList from "./components/InquiryList";
import SearchId from "./pages/account/SearchId";
import SearchPwd from "./pages/account/SearchPwd";
import AdminPost from "./pages/admin/AdminPost";
import AdminAsk from "./pages/admin/AdminAsk";
import ReportedPost from "./pages/admin/ReportedPost";
import CompleteInsert from "./pages/account/CompleteInsert";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import InquiryDetails from "./components/InquiryDetails";
import Check from "./components/Check";
import AdminComments from "./pages/admin/AdminComments";
import ReportedComment from "./pages/admin/ReportedComment";


function App() {
  return (
    <>
      <div className="app">
        {
          //로그인했을때
          // <Header title="메인" showBackButton={false} showCloseButton={false} />
          // <Main />
          // <Friend/>
          // <Settings />
          // <Community/>
          // <Information/>
          // <AskPage />
          // <ChatList/>
          // <ChatRoom/>
          // <InquiryDetails/>
          // <CompleteInsert/>
          // <ReportedPost/>
          // <Footer/>
          //<LoginPage/>
          //<ReportedComment/>
        }
        <Header />
        <RouteSelect />
        <Footer />
        {  
          // 로그인 안했을때
          // <LoginPage/>
          // <TermsOfUse/>
          // <InsertMember/>
        }
      </div>
      {/*
              <div className="App">
                  <Header/>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/InquiryList" element={<InquiryList />} />
                    <Route path="/Dangers" element={<Dangers />} />
                    <Route path="/Mypage" element={<Mypage />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                  <Footer />
              </div>
            */}
    </>
  );
}
    
export default App;
