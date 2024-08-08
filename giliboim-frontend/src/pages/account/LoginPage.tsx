import '../../styles/common/LoginPage.css';
import logo from '../../assets/images/giliboim-logo.png';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

const LoginPage = () => {

  useEffect(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
      setTimeout(()=>{
        loader.classList.add('fade-out');
      },1000)//로딩 개빨리되서 1초뒤에 끄게 만듬
    }
  }, []);

  const navi = useNavigate();

  interface User {
    id : string,
    password : string
  }

  const [user,setUser] = useState<User>({
    id : '',
    password : ''
  });

  const changeInput = (e:ChangeEvent)=> {
    let {type, value} = e.target as HTMLInputElement
    setUser({
      ...user,
      [type] : value
    })
  }

  const login = () => {
    //axios로 user보내고 값 받기 메인보내기
  }

  return (
    <div className="container">

      {//이거 로딩창임
        <div className="loader"> 
          <img src={logo} alt="로딩중 로고" />
        </div>
      }
      <div className="login-container">
        <img 
          src={logo} 
          alt="길이보임 로고" 
          className="logo"
        />
        <form className="form">
          <input 
            type="id" 
            placeholder="아이디 입력" 
            className="input"
            onChange={changeInput}
            required 
          />
          <input 
            type="password" 
            placeholder="비밀번호 입력" 
            className="input" 
            onChange={changeInput}
            required 
          />
          <button type="submit" className="login-button" onClick={login}>
            로그인
          </button>
        </form>
        <button className="kakao-button">
          카카오계정으로 로그인
        </button>
        <div className="links">
          <a onClick={()=>{}}>아이디 찾기</a>
          <a onClick={()=>{}}>비밀번호 찾기</a>
          <a onClick={()=>{}}>회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;