import React from 'react';

import '../styles/common/Withdraw.css'

const Withdraw: React.FC = () => {
    return (
        <div className="Withdraw-container">
            <div className="Withdraw-header">회원탈퇴</div>
            

                <div className="Withdraw-profile">

                    <div className="Instructions">
                        회원탈퇴 안내
                        </div>

                        <div className="Inctructions-1">
                        고객님께서 회원 탈퇴를 원하신다니 <br/>
                        불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 <br/>
                        고객님의 불편함을 <br/>
                        해결해드리도록 노력하겠습니다.<br/>

                        그동안 저희 길이보임을 사랑해주셔서 감사합니다.

                        </div>
                    </div>
                  
                    <div className="Withdraw-menu">
                <label htmlFor="password-input">현재비밀번호 입력</label>
                <input
                    type="password"
                    id="password-input"
                    className="input-box"
                    placeholder="현재 비밀번호를 입력해주세요."
                />
            </div>
            <button className="delete-button">탈퇴하기</button>
        </div>
       
    );
};

export default Withdraw;
