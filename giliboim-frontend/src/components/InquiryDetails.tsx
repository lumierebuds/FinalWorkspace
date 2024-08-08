import React from 'react';
import '../styles/common/InquiryDetails.css';

const InquiryDetails = () => {
    return (
        <div className="container">
            <div className="inquiry-title">
                <label className="title-label">제목</label>
                <div className="text-box">cctv 고장난 구역 표시 부탁드립니다.</div>
            </div>
            <div className="inquiry-content">
                <label className="title-label">문의 내용</label>
                <div className="text-box">저희 동네에 고장난 cctv가 있는 것 같은데, 지도에는 표시가 되는 것 같아서요.</div>
            </div>
            <div className="admin-response">
                <label className="title-label">관리자 답변</label>
                페이지에 빠른 시일 내로 반영하도록 하겠습니다. 감사합니다.
            </div>
        </div>
    );
};

export default InquiryDetails;
