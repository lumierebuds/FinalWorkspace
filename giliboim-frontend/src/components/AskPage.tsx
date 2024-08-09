import React from 'react';
import '../../styles/community/AskPage.css';

const AskPage: React.FC = () => {
  return (
    <div className="ask-page">
        <h2>문의하기</h2>
      <div className="title-box">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" placeholder="제목" className="form-control" />
        </div>
      </div>
      <div className="content-box">
        <div className="form-group">
          <label htmlFor="content">문의 내용</label>
          <textarea id="content" placeholder="내용을 입력하세요." className="form-control" />
        </div>
      </div>
      <div className="form-buttons">
        <button className="submit-button">등록</button>
        <button className="cancel-button">취소</button>
      </div>
    </div>
  );
};

export default AskPage;
