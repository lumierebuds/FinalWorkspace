import React, { useState, useEffect } from 'react';
import '../../styles/common/SearchId.css';
import logo from '../../assets/images/giliboim-logo.png'; 

const SearchId: React.FC = () => {
  const [isVerificationStage, setIsVerificationStage] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // "인증 요청"을 "확인"으로 바꾸기 위한 상태
  const [phoneNumber, setPhoneNumber] = useState(''); // 휴대전화 번호 상태
  const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isTimerRunning, timer]);

  const handleIdSearch = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setIsVerificationStage(true);
      setIsTimerRunning(true);
    } else {
      showAlert('숫자만 입력해주세요.');
    }
  };

  const handleResendCode = () => {
    setTimer(300);
  };

  const handleVerify = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setIsVerified(true); // "인증 요청"을 "확인"으로 변경
    } else {
      showAlert('유효한 휴대전화 번호를 입력해주세요.');
    }
  };

  const validatePhoneNumber = (number: string) => {
    const regex = /^[0-9]+$/;
    return regex.test(number);
  };

  const showAlert = (message: string) => {
    window.alert(message);
    if (navigator.vibrate) {
      navigator.vibrate(200); // 진동 200ms
    }
    setPhoneNumber(''); // 입력한 값 초기화
    setErrorMessage(message); // 오류 메시지 상태 업데이트
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (validatePhoneNumber(input) || input === '') {
      setPhoneNumber(input);
      setErrorMessage(''); // 입력 시 오류 메시지 초기화
    } else {
      showAlert('숫자만 입력 가능합니다.');
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="search-id-container">
      <div className="search-id-content">
        {/* 이미지 삽입 위치 */}
        <div className="logo-container">
          <img src={logo} alt="길이보임 로고" className='logo'/> 
        </div>

        {!isVerificationStage ? (
          <div>
            <input 
              type="text" 
              placeholder="휴대전화 번호" 
              className="input-field" 
              value={phoneNumber} 
              onChange={handleChange} 
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <br/>
            <button onClick={handleIdSearch} className="action-button">아이디 찾기</button>
          </div>
        ) : (
          <div>
            <input 
              type="text" 
              placeholder="휴대전화 번호" 
              className={`input-field ${isVerificationStage ? 'disabled' : ''}`} 
              value={phoneNumber} 
              onChange={handleChange} 
              disabled={isVerificationStage} // 인증 단계에서는 비활성화
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="verification-container">
              <input type="text" placeholder="인증번호" className="input-number" />
              <button onClick={handleResendCode} className="resend-button">재전송</button>
              <span className="timer">{formatTime()}</span>
            </div>
            <button onClick={handleVerify} className="action-button">
              {isVerified ? '확인' : '인증 요청'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchId;
