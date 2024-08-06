import "../styles/route/route-search.css";

function RouteSearch() {
  return (
    <div className="main">
      <div className="route-container">
        <div className="search-container">
          <div className="search-box">
            <label htmlFor="departure">출발지</label>
            <input
              type="text"
              id="departure"
              placeholder="출발지를 입력하세요"
            />
          </div>
          <div className="search-box">
            <label htmlFor="destination">목적지</label>
            <input
              type="text"
              id="destination"
              placeholder="목적지를 입력하세요"
            />
          </div>
        </div>
        <div className="location-content">
          <div className="location">
            <p>
              강남역 2호선 1번출구
              <br />
              <span className="location-doro">서울 강남구 역삼동 804</span>
            </p>
            <button className="select-button">선택</button>
          </div>
          <div className="location">
            <p>
              강남역 2호선 9번출구
              <br />
              <span className="location-doro">서울 서초구 서초동 1318-7</span>
            </p>
            <button className="select-button">선택</button>
          </div>
          <div className="location">
            <p>
              강남역 2호선 12번출구
              <br />
              <span className="location-doro">서울 강남구 역삼동 822-1</span>
            </p>
            <button className="select-button">선택</button>
          </div>
          <div className="location">
            <p>
              강남역 신분당선 4번출구
              <br />
              <span className="location-doro">서울 강남구 역삼동 826-21</span>
            </p>
            <button className="select-button">선택</button>
          </div>
          <div className="location">
            <p>
              서울 강남구 역삼동 826-21
              <br />
              <span className="location-doro">서울 강남구 역삼동 804</span>
            </p>
            <button className="select-button">선택</button>
          </div>
        </div>
        <button className="current-location">현위치</button>
        <div className="location-pagenation">
          <div className="page-bar">
            <a href="${url }${pi.currentPage - 1}" className="page-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="${url }${i}" className="page-item page-on">
              1
            </a>
            <a href="${url }${i}" className="page-item">
              2
            </a>
            <a href="${url }${i}" className="page-item">
              3
            </a>
            <a href="${url }${i}" className="page-item">
              4
            </a>
            <a href="${url }${i}" className="page-item">
              5
            </a>
            <a href="${url }${i}" className="page-item">
              6
            </a>
            <a href="${url }${pi.currentPage + 1}" className="page-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.83984 7.41L13.4198 12L8.83984 16.59L10.2498 18L16.2498 12L10.2498 6L8.83984 7.41Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteSearch;
