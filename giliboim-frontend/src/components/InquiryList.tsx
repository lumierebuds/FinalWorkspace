import React from 'react';
import '../styles/common/InquiryList.css';

const InquiryList: React.FC = () => {
  const inquiries = [
    { id: 1, title: "임대차건 보상소", content: "게시물 작성이 잘 안됩니다 확인 부탁드립니다.", status: "답변 대기중", type: "normal" },
    { id: 2, title: "cctv 위치 확인바랍니다.", content: "cctv3번 건 정도 표시해주시기 바랍니다.", status: "답변 완료", type: "normal" },
    { id: 3, title: "관리자에 의해 삭제된 문의입니다", content: "", status: "", type: "deleted" },
    { id: 4, title: "cctv 위치 확인바랍니다.", content: "cctv3번 건 정도 표시해주시기 바랍니다.", status: "답변 완료", type: "normal" },
    { id: 5, title: "cctv 위치 확인바랍니다.", content: "cctv3번 건 정도 표시해주시기 바랍니다.", status: "답변 완료", type: "normal" },
  ];

  return (
    <div className="inquiry-list">
      <div className="header">
        <h2>문의목록</h2>
      </div>

      <ul className="inquiry-items">
        {inquiries.map(inquiry => (
          <li key={inquiry.id} className={`inquiry-item ${inquiry.type}`}>
            <div className="inquiry-header">
              <p className="inquiry-title">{inquiry.title}</p>
              {inquiry.status && (
                <span className={`inquiry-status ${inquiry.status === "답변 대기중" ? "pending" : "completed"}`}>
                  {inquiry.status}
                </span>
              )}
            </div>
            <p className="inquiry-content">{inquiry.content}</p>
          </li>
        ))}
      </ul>

      <div className="new-inquiry-button">
        <button>+ 문의하기</button>
      </div>
    </div>
  );
};

export default InquiryList;
