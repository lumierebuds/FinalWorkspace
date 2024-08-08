import React, { useState, useRef } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';  // react-icons 패키지 사용
import '../styles/common/Information.css';

function Information() {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 선택 초기화
    }
  };

  return (
    <div className="Information-info-container">
      <div className="Information-info-header">
        회원 정보 수정
      </div>
      
        <div className="section-title">
          <div className="profile-photo-section">
            <span className="profile-photo-label">
              프로필 사진 변경
            </span>
            <FaCamera
              size={20}
              style={{ marginLeft: '8px', cursor: 'pointer' }}
              onClick={handleCameraClick}
            />
          </div>
        </div>

        <input
          type="file"
          id="profile-photo"
          className="profile-photo-input"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
        />

        {selectedImage && (
          <div className="profile-photo-preview">
            <img
              src={selectedImage as string}
              alt="프로필 미리보기"
              className="profile-photo-image"
            />
            <FaTimes
              className="remove-photo-icon"
              size={20}
              onClick={handleImageRemove}
            />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">새 비밀번호</label>
          <input type="tel" id="phone" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">새 비밀번호 확인</label>
          <input type="tel" id="phone" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">휴대전화</label>
          <input type="tel" id="phone" />
        </div>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="address">주소</label>
          <input type="text" id="address" />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">수정</button>
          <button type="button" className="cancel-button">취소</button>
        </div>
      
    </div>
  );
}

export default Information;
