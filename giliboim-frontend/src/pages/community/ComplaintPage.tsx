import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/community/ComplaintPage.css';

const reasons: string[] = [
    '중복 / 도배성 게시글이에요.',
    '홍보성 글이에요',
    '부적절한 글이에요',
    '음란성 / 선정적인 게시글이에요',
    '종교 포교를 시도하는 글이에요',
    '기타 (직접 작성)',
  ];

const ComplaintPage: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleReasonClick = (reason: string) => {
    if (reason === '기타 (직접 작성)') {
      navigate('/complaint/custom'); // 직접 작성 페이지로 이동 (주소 수정해야함. )
    } else {
      setSelectedReason(reason);
      setIsPopupOpen(true);
    }
  };

  const handleReport = () => {
    // 신고 처리 로직을 여기에 작성
    alert('신고가 접수되었습니다.');
    setIsPopupOpen(false);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="complaint-page">
      <div className="complaint-reasons">
        <p>신고하는 이유를 선택해주세요.</p>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index} onClick={() => handleReasonClick(reason)}>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>{selectedReason}</p>
            <button className="confirm-button" onClick={handleReport}>신고</button>
            <button className="cancel-button" onClick={handleCancel}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintPage;
