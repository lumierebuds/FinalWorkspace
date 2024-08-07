import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import KakaoMap from '../../components/KakaoMap'; // KakaoMap 컴포넌트를 사용
import '../../styles/community/LocationPicker.css';

const LocationPicker: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const navigate = useNavigate();

  const handleMapClick = (lat: number, lng: number) => {
    const geocoder = new (window as any).kakao.maps.services.Geocoder();
    const coord = new (window as any).kakao.maps.LatLng(lat, lng);
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result: any, status: any) => {
      if (status === (window as any).kakao.maps.services.Status.OK) {
        const address = result[0].road_address?.address_name || result[0].address.address_name;
        setSelectedAddress(address);
        setMarkerPosition({ lat, lng });
      }
    });
  };

  const handleSearch = (address: string) => {
    const geocoder = new (window as any).kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === (window as any).kakao.maps.services.Status.OK) {
        const coords = new (window as any).kakao.maps.LatLng(result[0].y, result[0].x);
        setSelectedAddress(address);
        setMarkerPosition({ lat: coords.getLat(), lng: coords.getLng() });
      }
    });
  };

  const handleConfirm = () => {
    navigate('/desired-path', { state: { address: selectedAddress } });
  };

  return (
    <div className="location-picker-container">

      <div className="search-bar">
        <input
          type="text"
          placeholder="주소를 입력하세요"
          value={selectedAddress}
          onChange={(e) => setSelectedAddress(e.target.value)}
        />
        <button onClick={() => handleSearch(selectedAddress)}>🔍</button>
        <button className="confirm-button" onClick={handleConfirm}>확인</button>
      </div>

      <div className="map-container">   
        <KakaoMap />
      </div>

    
    </div>
  );
};

export default LocationPicker;
