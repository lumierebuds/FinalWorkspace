import React from 'react';
import '../styles/common/ChatList.css';

const chatData = [
  { id: 1, name: "박창용", avatar: "/path/to/avatar1.png" },
  { id: 2, name: "저누누", avatar: "/path/to/avatar2.png" },
  { id: 3, name: "김지훈", avatar: "/path/to/avatar3.png" },
  { id: 4, name: "흰둥이", avatar: "/path/to/avatar4.png" },
  { id: 5, name: "정찬영", avatar: "/path/to/avatar5.png" },
  { id: 6, name: "훈발롬", avatar: "/path/to/avatar6.png" },
];

const ChatList: React.FC = () => {
  return (
    <div className="chat-list-container">
      <div className="search-bar">
        <input type="text" placeholder="이름(초성), 전화번호 검색" />
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 1.098a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
          </svg>
        </button>
      </div>
      <ul className="chat-list">
        {chatData.map(chat => (
          <li key={chat.id} className="chat-item">
            <img src={chat.avatar} alt={chat.name} className="avatar" />
            <span className="chat-name">{chat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
