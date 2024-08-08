import React from 'react';
import '../../styles/admin/ReportedPost.css';

const ReportedPost: React.FC = () => {
  const commentDate = '2024-07-25';
  const reportDate = '2024-08-01';

  return (
    <div className="reported-post-container">
      
      <div className="comment-section">

        <div className="comment-row-horizontal">
          <div className="comment-row-item">
            <label>작성자</label>
            <input type="text" value="" readOnly />
          </div>
          <div className="comment-row-item">
            <label>작성일</label>
            <input type="text" value={commentDate} readOnly />
          </div>
        </div>

        <div className="title">
            <br/><br/>
          <label>제목</label>
          <input type="text" value="" readOnly />
        </div>


        <div className="comment-row-vertical">
            <br/>
          <label>내용</label>
          <input type="text" value="" readOnly />
        </div>

      </div>

      <div className="report-section">
        <div className="report-row-horizontal">
          <div className="report-row-item">
            <label>신고자</label>
            <input type="text" value="" readOnly />
          </div>
          <div className="report-row-item">
            <label>신고일</label>
            <input type="text" value={reportDate} readOnly />
          </div>
          <div className="report-row-item">
            <label>신고분류</label>
            <input type="text" value="" readOnly />
          </div>
        </div>

        <div className="report-row-vertical">
          <label>신고 내용</label>
          <input type="text" value="" readOnly />
        </div>

        
      </div>

      <div className="button-group">
        <button className="btn blue">목록</button>
        <button className="btn green">경로</button>
        <button className="btn red">삭제</button>
        <button className="btn gray">취소</button>
      </div>
    </div>
  );
};

export default ReportedPost;
