import React, { useState } from 'react';
import '../styles/common/Check.css';

const Check: React.FC = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 비밀번호 확인 로직을 여기에 추가
    console.log('Submitted password:', password);
  };

  return (
    <div className="check-container">
      <h2 className="check-title">본인확인</h2>
      <p className="check-description">
        고객님의 소중한 개인정보보호를 위해서 <br/>본인확인을 진행합니다.
      </p>
      <form onSubmit={handleSubmit} className="check-form">
        <div className="check-input-group">
          <label htmlFor="password" className="check-label">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="check-input"
          />
          <button type="submit" className="check-button">확인</button>
        </div>
      </form>
    </div>
  );
};

export default Check;
