import React, { useState } from 'react';
import '../../styles/common/InsertMember.css';
import logo from '../../assets/images/giliboim-logo.png';

const InsertMember: React.FC = () => {

    const [form, setForm] = useState({
        id: '',
        nickname: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthDate: '',
        phoneNumber: '',
        verificationCode: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // 인증 요청 처리 로직
        alert('인증요청이 처리되었습니다.');
    };

    const handleDuplicateCheck = (field: string) => {
        // 중복 확인 처리 로직
        alert(`${field} 중복 확인`);
    };

    return (
        <div className="registration-container">
            <img src={logo} alt="길이보임 로고" className="logo" />
            <div className="registration-box">
                <form action="">
                <div className="input-group">
                    <input
                        type="text"
                        name="id"
                        placeholder="아이디"
                        value={form.id}
                        onChange={handleChange}
                    />
                    <button onClick={() => handleDuplicateCheck('아이디')}>중복확인</button>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="nickname"
                        placeholder="닉네임"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                    <button onClick={() => handleDuplicateCheck('닉네임')}>중복확인</button>
                </div>

                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />

                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="생년월일(8글자)"
                        value={form.birthDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="휴대전화번호"
                        value={form.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                {/* <div className="input-group">
                    <input
                        type="text"
                        name="verificationCode"
                        placeholder="인증번호 입력"
                        value={form.verificationCode}
                        onChange={handleChange}
                    />
                    <span className="timer">2:59</span>
                    <button>재전송</button>
                </div> */}

                <button className="submit-button">인증요청</button>
                </form>
            </div>
        </div>
    );
};

export default InsertMember;
