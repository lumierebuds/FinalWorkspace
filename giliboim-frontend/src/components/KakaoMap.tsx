import React, { useEffect, useState } from "react";
// 데이터 파일 경로 확인

const KakaoMap: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [currentPosition, setCurrentPosition] = useState<any>(null);

  const updateMapPosition = (latitude: number, longitude: number) => {
    if (map) {
      const moveLatLon = new (window as any).kakao.maps.LatLng(
        latitude,
        longitude
      );
      map.setCenter(moveLatLon);
    }
  };

  const searchPlace = (place: string) => {
    if ((window as any).kakao && (window as any).kakao.maps) {
      const ps = new (window as any).kakao.maps.services.Places();

      ps.keywordSearch(place, (result: any, status: any) => {
        if (status === (window as any).kakao.maps.services.Status.OK) {
          const firstResult = result[0];
          const lat = parseFloat(firstResult.y);
          const lng = parseFloat(firstResult.x);
          updateMapPosition(lat, lng); // 검색 결과로 지도 위치 업데이트
        }
      });
    }
  };

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const mapInstance = new (window as any).kakao.maps.Map(container, options);
    setMap(mapInstance);

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KakaoMap;
