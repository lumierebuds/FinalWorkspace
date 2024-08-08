import React, { useState } from 'react';
import '../styles/common/Friend.css';

const Friend: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
    const [isAddFriendPopupOpen, setIsAddFriendPopupOpen] = useState(false);
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // 친구 삭제 관련 핸들러
    const handleDeleteClick = (friendName: string) => {
        setSelectedFriend(friendName);
        setIsPopupOpen(true);
    };

    const handleCancelDelete = () => {
        setIsPopupOpen(false);
        setSelectedFriend(null);
    };

    const handleConfirmDelete = () => {
        // 친구 삭제 로직을 여기에 추가합니다.
        console.log(`${selectedFriend} has been deleted.`);
        setIsPopupOpen(false);
        setSelectedFriend(null);
    };

    // 친구 추가 관련 핸들러
    const handleAddFriendClick = () => {
        setIsAddFriendPopupOpen(true);
    };

    const handleAddFriendCancel = () => {
        setIsAddFriendPopupOpen(false);
        setNickname('');
        setPhoneNumber('');
    };

    const handleAddFriendConfirm = () => {
        // 친구 추가 로직을 여기에 추가합니다.
        console.log(`닉네임: ${nickname}, 전화번호: ${phoneNumber}`);
        setIsAddFriendPopupOpen(false);
        setNickname('');
        setPhoneNumber('');
    };

    return (
        <div>
            <div className="friend-header-container">
                <span className="friend-header-title">친구</span>
                <button className="add-friend-button" onClick={handleAddFriendClick}>+ 친구 추가</button>
            </div>

            <div className="friend-container">
                <div className="profile">
                    <img src="profile-image-url" alt="profile" className="profile-image" />
                    <div className="profile-name">전은우</div>
                </div>
                <div className="friend-list">
                    <div className="friend-header">
                        친구 6
                    </div>
                    <ul>
                        <li className="friend-item">
                            <img src="friend1-image-url" alt="friend1" className="friend-image" />
                            <span className="friend-name">김성민</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('김성민')}
                            >
                                삭제
                            </button>
                        </li>
                        <li className="friend-item">
                            <img src="friend2-image-url" alt="friend2" className="friend-image" />
                            <span className="friend-name">김지훈</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('김지훈')}
                            >
                                삭제
                            </button>
                        </li>
                        <li className="friend-item">
                            <img src="friend3-image-url" alt="friend3" className="friend-image" />
                            <span className="friend-name">박창용</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('박창용')}
                            >
                                삭제
                            </button>
                        </li>
                        <li className="friend-item">
                            <img src="friend4-image-url" alt="friend4" className="friend-image" />
                            <span className="friend-name">김민욱</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('김민욱')}
                            >
                                삭제
                            </button>
                        </li>
                        <li className="friend-item">
                            <img src="friend5-image-url" alt="friend5" className="friend-image" />
                            <span className="friend-name">정찬영</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('정찬영')}
                            >
                                삭제
                            </button>
                        </li>
                        <li className="friend-item">
                            <img src="friend6-image-url" alt="friend6" className="friend-image" />
                            <span className="friend-name">훈발룸</span>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDeleteClick('훈발룸')}
                            >
                                삭제
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            
            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <p>{selectedFriend}을(를) 삭제하시겠습니까?</p>
                        <button className="confirm-button" onClick={handleConfirmDelete}>확인</button>
                        <button className="cancel-button" onClick={handleCancelDelete}>취소</button>
                    </div>
                </div>
            )}

           
            {isAddFriendPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-header">친구 추가</div>
                        <input
                            type="text"
                            placeholder="닉네임"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="popup-input"
                        />
                        <div className="phone-number-container">
                            <span className="country-code">+ 82</span>
                            <input
                                type="text"
                                placeholder="전화번호"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="popup-input1"
                            />
                        </div>
                        <p className="popup-subtext">친구의 이름과 전화번호를 입력하세요.</p>
                        <button className="confirm-button1" onClick={handleAddFriendConfirm}>친구 추가</button>
                        <button className="cancel-button1" onClick={handleAddFriendCancel}>취소</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Friend;
