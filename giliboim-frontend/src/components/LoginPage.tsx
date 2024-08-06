import '../styles/common/LoginPage.css';
import logo from '../assets/images/giliboim-logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navi = useNavigate();

  return (
    <div className="container">
      <div className="login-container">
        <img 
          src={logo} 
          alt="길이보임 로고" 
          className="logo"
        />
        <form className="form">
          <input 
            type="text" 
            placeholder="아이디 입력" 
            className="input" 
            required 
          />
          <input 
            type="password" 
            placeholder="비밀번호 입력" 
            className="input" 
            required 
          />
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <button className="kakao-button">
          카카오계정으로 로그인
        </button>
        <div className="links">
          <a className="link">아이디 찾기</a>
          <a className="link">비밀번호 찾기</a>
          <a className="link">회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;