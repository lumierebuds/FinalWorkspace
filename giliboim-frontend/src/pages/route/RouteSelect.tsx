import KakaoMap from "./../../components/KakaoMap";
import "../../styles/common/Main.css";
import "../../styles/route/route-main.css";
import "../../styles/route/route-select.css";
import { initializeRouteSearch } from "../../assets/js/routeSearch";
import { useEffect } from "react";

const RouteSelect: React.FC = () => {
  useEffect(() => {
    initializeRouteSearch();
  }, []);

  return (
    <div className="main">
      <div className="map-container">
        <KakaoMap />
        <div className="slide-bar">
          <div className="route-box-container">
            <div className="route-box">
              <div className="route-info">
                <div className="route-name">CCTV 경로</div>
                <div className="route-details">
                  <span className="route-time">8분</span>
                  <span className="route-distance">564m</span>
                </div>
              </div>
              <button className="start-button">안내시작</button>
            </div>
            <div className="route-box">
              <div className="route-info">
                <div className="route-name">안전최적 경로</div>
                <div className="route-details">
                  <span className="route-time">10분</span>
                  <span className="route-distance">730m</span>
                </div>
              </div>
              <button className="start-button">안내시작</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSelect;
