import React, { useState } from 'react';
import '../../styles/community/CustomComplaintPage.css';

const CustomComplaintPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleReportClick = () => {
    setIsPopupOpen(true);
  };

  const handleConfirmReport = () => {
    alert('신고가 접수되었습니다.');
    setIsPopupOpen(false);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="custom-complaint-page">
      <h2>기타 (직접작성)</h2>
      <p>앞의 신고 항목에서 적당한 사유를 찾지 못하셨나요?</p>
      <p>신고 내용을 적어주시면 면밀히 확인 후 적절한 조치를 <br/>취하도록 하겠습니다.</p>
      <textarea
        placeholder="신고 내용을 입력해주세요."
        className="complaint-textarea"
      />
      <button className="report-button" onClick={handleReportClick}>
        신고하기
      </button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>신고하시겠습니까?</p>
            <button className="confirm-button" onClick={handleConfirmReport}>
              신고
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomComplaintPage;
