import React, { ChangeEvent, useState } from 'react';
import '../../styles/common/InsertMember.css';
import logo from '../../assets/images/giliboim-logo.png';
import axios from "axios";
import { defaultUser, User } from '../../type/user';

/*
// Twilio 클래스 인스턴스 생성
const twilioClient = new Twilio();

// 인증 코드 전송
const sendCode = async (phoneNumber: string) => {
  try {
    const response = await twilioClient.sendVerificationCode({ to: phoneNumber });
    console.log('Verification code sent:', response);
  } catch (error) {
    console.error('Error sending verification code:', error);
  }
};

// 인증 코드 검증
const checkCode = async (phoneNumber: string, code: string) => {
  try {
    const response = await twilioClient.checkVerificationCode({ to: phoneNumber, code });
    console.log('Verification code check result:', response);
  } catch (error) {
    console.error('Error checking verification code:', error);
  }
};

// 예제 호출
const phoneNumber = '1234567890'; // 전화번호를 적절히 수정하세요
const verificationCode = '123456'; // 사용자가 입력한 인증 코드

// 인증 코드 전송 호출
sendCode(phoneNumber);

// 인증 코드 검증 호출 (예를 들어, 사용자가 입력한 후 호출)
checkCode(phoneNumber, verificationCode);
*/
const InsertMember: React.FC = () => {

    const [form, setForm] = useState<User>(defaultUser);
    const [formcheck,setFormcheck] = useState("인증요청");
    const [check,setCheck] = useState({
        id : false,
        nickname : false
    })

    const handleChange = (e:ChangeEvent) => {
        let {name,value} = e.target as HTMLInputElement;
        if(name == "id" || name == "nickname"){
            setCheck({
                ...check,
                [name] : false
            })
        }
        setForm({
            ...form,
            [name] : value
        });
    };

    const handleSubmit = () => {
        /*axios실행후 성공시 
        alert('인증요청이 처리되었습니다. ');
        setFormcheck("회원가입");
        실패시는 알아서
        */
    };

    const handleDuplicateCheck = (name : keyof User) => {
        //중복체크
        const fieldValue = form[name];
        axios.get("http://localhost:여기 해야댐.",{[name] : fieldValue})
            .then(response=>{
                console.log(response.data);
                //결과값이 없으면 count = 0
                if(response.data == 0){
                    alert("사용가능합니다.");
                    setCheck({
                        ...check,
                        [name] : true
                    })
                } else {
                    alert("이미 있습니다.");
                }
            })
    };

    return (
        <div className="registration-container">
            <img src={logo} alt="길이보임 로고" className="logo" />
            <div className="registration-box">
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="id"
                        placeholder="아이디"
                        value={form.id}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={() => handleDuplicateCheck('id')}>중복확인</button>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="nickname"
                        placeholder="닉네임"
                        value={form.nickname}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={() => handleDuplicateCheck('nickname')}>중복확인</button>
                </div>

                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="생년월일(8글자)"
                        value={form.birthDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="휴대전화번호"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                {      
                <>      
                    {formcheck == "회원가입" &&(
                        <div className="input-group">
                            <input
                            type="text"
                            name="verificationCode"
                            placeholder="인증번호 입력"
                            value={form.verificationCode}
                            onChange={handleChange}
                            required
                            />
                            <span className="timer">2:59</span>
                            <button>재전송</button>
                        </div>
                        )
                    } 
                </>
                }                  
                <button type='submit' className="submit-button" disabled={check.id && check.nickname}>{formcheck}</button>
                </form>
            </div>
        </div>
    );
};

export default InsertMember;
