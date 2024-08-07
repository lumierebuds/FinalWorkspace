import React, { useState } from 'react';
import '../styles/community/Community2.css'; // CSS 파일을 분리하여 스타일을 적용합니다.
import KakaoMap from '../../components/KakaoMap';

const Community2: React.FC = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="community2-container">
      <div className="location-header">
        <span className="location-icon">📍</span>
        <span className="location-text">공유할 주소</span>
      </div>

      <div className="map-container">
  
        <div className="map"> <KakaoMap /></div>
      </div>

      <div className="profile-header">
        <div className="profile-image">프로필 사진</div>
        <div className="profile-name">닉네임</div>
      </div>

      <div className="post-content">
        <div className="post-title">제목</div>
        <div className="post-meta">
          <button className="like-button" onClick={handleLikeClick}>
            좋아요 {likeCount > 0 && <span>({likeCount})</span>}
          </button>
          <button className="report-button">신고 버튼</button>
        </div>
        <div className="post-body">내용</div>
        <div className="post-image">사진(사진 없으면 빈칸)</div>
        <div className="post-date">작성날짜</div>
      </div>

      <div className="comments-section">
        {/* 댓글 섹션 */}
        <div className="comment-header">
          <div className="profile-image">프로필 사진</div>
          <div className="profile-name">닉네임</div>
          <div className="comment-content">내용</div>
          <button className="report-button">신고 버튼</button>
        </div>
      </div>

      <div className="comment-input">
        <input type="text" placeholder="댓글 입력 창" />
        <button className="send-button">전송</button>
      </div>
    </div>
  );
};

export default Community2;
