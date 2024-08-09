import React, { useState, useEffect } from 'react';
import '../../styles/admin/AdminAskList.css';

const AdminAskList = () => {
  const initialItems = [
    { id: 1, name: '장원영', checked: false },
    { id: 2, name: '장원영', checked: false },
    { id: 3, name: '장원영', checked: false },
    { id: 4, name: '장원영', checked: false },
    { id: 5, name: '장원영', checked: false },
    { id: 6, name: '장원영', checked: false },
    { id: 7, name: '장원영', checked: false },
    { id: 8, name: '장원영', checked: false },
    { id: 9, name: '장원영', checked: false },
    { id: 10, name: '장원영', checked: false },
    { id: 11, name: '장원영', checked: false },
    { id: 12, name: '장원영', checked: false },
    { id: 13, name: '장원영', checked: false },
    { id: 14, name: '장원영', checked: false },
    { id: 15, name: '장원영', checked: false },
    { id: 16, name: '장원영', checked: false },
    { id: 17, name: '장원영', checked: false },
    { id: 18, name: '장원영', checked: false },
    { id: 19, name: '장원영', checked: false },
    { id: 20, name: '장원영', checked: false },
  ];

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    // 이름을 기준으로 자동 정렬 (빈 값은 마지막으로 보냄)
    setItems(prevItems =>
      [...prevItems].sort((a, b) => {
        if (a.name === '') return 1;
        if (b.name === '') return -1;
        return a.name.localeCompare(b.name);
      })
    );
  }, [items]);

  const toggleCheck = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, name: '', checked: false } : item
    ));
  };

  return (
    <div className="admin-ask-list-container">
      <ul className="ask-items">
        {items.map((item, index) => (
          <li key={index} className="ask-item">
            <div onClick={() => toggleCheck(item.id)} className="checkbox">
              {item.checked ? (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 13.75L15 17.5L27.5 5M26.25 15V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H20" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ) : (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.25 26.25C5.5625 26.25 4.97396 26.0052 4.48438 25.5156C3.99479 25.026 3.75 24.4375 3.75 23.75V6.25C3.75 5.5625 3.99479 4.97396 4.48438 4.48438C4.97396 3.99479 5.5625 3.75 6.25 3.75H23.75C24.4375 3.75 25.026 3.99479 25.5156 4.48438C26.0052 4.97396 26.25 5.5625 26.25 6.25V23.75C26.25 24.4375 26.0052 25.026 25.5156 25.5156C25.026 26.0052 24.4375 26.25 23.75 26.25H6.25ZM6.25 23.75H23.75V6.25H6.25V23.75Z" fill="#1D1B20"/>
                </svg>
              )}
            </div>
            {item.name ? (
              <>
                <span>{item.name} 님이 문의하신 내용입니다.</span>
                <button className="delete-button" onClick={() => deleteItem(item.id)}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 3.75L3.75 11.25M3.75 3.75L11.25 11.25" stroke="#B3B3B3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </>
            ) : (
              <span>&nbsp;</span> // 빈 항목의 레이아웃을 유지
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAskList;
