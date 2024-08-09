import React, { useState } from "react";
import KakaoMap from "../../components/KakaoMap";
import "../../styles/common/Main.css";
import "../../styles/route/route-main.css";

const RouteMain: React.FC = () => {
  const [guide, setGuide] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  
  const handleClosePopup = () => {
    setIsPopupVisible(false); // 팝업 닫기
  };

  return (
    <div className="main">
      {/* 지도 API를 배경으로 설정 */}
      <div className="map-container">
        <KakaoMap />
      </div>

      {/* 안심경로 검색 버튼 */}
      <div className="safe-path-container">
        {guide ? (
          <button className="safe-path-button" onClick={() => setGuide(!guide)}>
            안심경로 검색버튼
          </button>
        ) : (
          <button
            className="safe-path-button"
            onClick={() => setIsPopupVisible(!isPopupVisible)}
          >
            안심경로 안내취소
          </button>
        )}
      </div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <p>안내를 종료하겠습니까?</p>
            <button className="popup-button" onClick={handleClosePopup}>
              확인
            </button>
            <button className="cancel-button" onClick={handleClosePopup}>
              취소
            </button>
          </div>
        </div>
      )}

      {/* 긴급 신고 버튼 */}
      <button className="emergency-button">긴급 신고 버튼</button>

      {/* 채팅하기 버튼 */}
      <button className="chat-button">채팅하기</button>
    </div>
  );
};

export default RouteMain;
