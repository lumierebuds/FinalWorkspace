import React from 'react';
import '../styles/common/Mypage.css';

const Mypage: React.FC = () => {
  const friends = [
    { name: "김성민", avatar: "avatar-url-1" },
    { name: "김지훈", avatar: "avatar-url-2" },
    { name: "박창용", avatar: "avatar-url-3" },
    { name: "김민옥", avatar: "avatar-url-4" },
    { name: "정찬영", avatar: "avatar-url-5" },
    { name: "훈발롬", avatar: "avatar-url-6" },
  ];

  return (
    <div className="my-page">
      <div className="user-info">
        <img src="user-avatar-url" alt="user-avatar" className="user-avatar" />
        <p>전은우</p>
      </div>

      {friends.length > 0 && (
        <div className="friend-list">
          <p>친구 {friends.length}</p>
          <ul>
            {friends.map((friend, index) => (
              <li key={index} className="friend-item">
                <img src={friend.avatar} alt={`${friend.name} avatar`} />
                <span>{friend.name}</span>
                <button className="delete-button">삭제</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mypage;
