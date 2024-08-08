import React, { useState } from 'react';
import '../../styles/admin/AdminAsk.css';

const AdminAsk: React.FC = () => {
  const [reply, setReply] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = () => {
    setIsPopupVisible(true); // 팝업 보이게 설정
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // 팝업 닫기
  };

  return (
    <div className="admin-ask-container">
      <h2>이재용 님이 문의하신 내용입니다.</h2>
      <div className="inquiry-details">
        <div>제목: 저 어묵 국물좀 더 주세요</div>
        <div>작성일 : 2024 - 08 - 01</div>
        <br/>
      </div>
      <div>
        <textarea className="inquiry-content" readOnly value="쉿~~~~~~~~~!" />
      </div>
      <textarea
        className="reply-input"
        placeholder="답변 내용을 입력해주세요."
        value={reply}
        onChange={handleReplyChange}
      />

      <button className="reply-button" onClick={handleReplySubmit}>답변하기</button>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <p>답변이 완료되었습니다.</p>
            <button className="popup-button" onClick={handleClosePopup}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAsk;
