import React from 'react';
import '../styles/common/ChatRoom.css';

const messages = [
  { id: 1, time: '12:05', text: '어디쯤 왔어?' },
  { id: 2, time: '12:07', text: '조심히 와 날이 춥다' },
];

const ChatRoom: React.FC = () => {
  return (
    <div className="chat-room-container">
      <div className="chat-header">정찬영</div>
      <div className="chat-content">
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <span className="message-time">{message.time}</span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <button className="add-button">+</button>
        <input type="text" className="chat-input" placeholder="메시지를 입력하세요..." />
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default ChatRoom;
