import React, { useState } from "react";
import "../styles/common/Settings.css";

const Settings: React.FC = () => {
  const [sound, setSound] = useState(true);
  const [cctv, setCctv] = useState(true);
  const [police, setPolice] = useState(true);

  return (
    <div className="settings">
      <SettingItem
        label="소리"
        value={sound}
        onChange={() => setSound(!sound)}
      />
      <SettingItem
        label="CCTV 위치 표시"
        value={cctv}
        onChange={() => setCctv(!cctv)}
      />
      <SettingItem
        label="경찰서 위치 표시"
        value={police}
        onChange={() => setPolice(!police)}
      />
    </div>
  );
};

interface SettingItemProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="setting-item">
      <span>{label}</span>
      <input type="checkbox" checked={value} onChange={onChange} />
    </div>
  );
};

export default Settings;
