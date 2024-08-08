import "../styles/common/Friend.css";

import React from "react";

const Friend: React.FC = () => {
  return (
    <div>
      <div className="friend-header-container">
        <span className="friend-header-title">친구</span>
        <button className="add-friend-button">+ 친구 추가</button>
      </div>

      <div className="friend-container">
        <div className="profile">
          <img
            src="profile-image-url"
            alt="profile"
            className="profile-image"
          />
          <div className="profile-name">전은우</div>
        </div>
        <div className="friend-list">
          <div className="friend-header">친구 6</div>
          <ul>
            <li className="friend-item">
              <img
                src="friend1-image-url"
                alt="friend1"
                className="friend-image"
              />
              <span className="friend-name">김성민</span>
              <button className="delete-button">삭제</button>
            </li>
            <li className="friend-item">
              <img
                src="friend2-image-url"
                alt="friend2"
                className="friend-image"
              />
              <span className="friend-name">김지훈</span>
              <button className="delete-button">삭제</button>
            </li>
            <li className="friend-item">
              <img
                src="friend3-image-url"
                alt="friend3"
                className="friend-image"
              />
              <span className="friend-name">박창용</span>
              <button className="delete-button">삭제</button>
            </li>
            <li className="friend-item">
              <img
                src="friend4-image-url"
                alt="friend4"
                className="friend-image"
              />
              <span className="friend-name">김민욱</span>
              <button className="delete-button">삭제</button>
            </li>
            <li className="friend-item">
              <img
                src="friend5-image-url"
                alt="friend5"
                className="friend-image"
              />
              <span className="friend-name">정찬영</span>
              <button className="delete-button">삭제</button>
            </li>
            <li className="friend-item">
              <img
                src="friend6-image-url"
                alt="friend6"
                className="friend-image"
              />
              <span className="friend-name">훈발룸</span>
              <button className="delete-button">삭제</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friend;
