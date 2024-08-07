import React, { useState } from 'react';
import './ReportForm.css';
import { useNavigate } from 'react-router-dom';

const ReportForm: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const navi = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(0, 10 - images.length);
      const newPreviews = newImages.map(image => URL.createObjectURL(image));

      setImages(prevImages => [...prevImages, ...newImages]);
      setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    setPreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 데이터 전송 로직
    console.log("첨부된 이미지들:", images);
  };

  return (
    <div className="report-form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="photo-upload-section">
          <label className="photo-upload">
            <input 
               type="file" 
              accept="image/*" 
              multiple 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
            />
            <div className="photo-thumbnail">
              <span>📷</span>
              <span>{images.length}/10</span>
            </div>
          </label>
          {previews.map((preview, index) => (
            <div key={index} className="photo-preview">
              <img src={preview} alt={`preview-${index}`} />
              <button className="remove-button" onClick={() => handleRemoveImage(index)}>✖</button>
            </div>
          ))}
        </div>

        <div className="location-section">
          <label>
            <span >📍</span>
            <input type="text" placeholder="제보 위치 선택" />
          </label>
        </div> 

        <div className="title-section">
          <label>
            기존 작성한 제목
            <input 
              type="text" 
              placeholder="제목" 
            />
          </label>
        </div>

        <div className="content-section">
          <label>
            기존에 작성한 내용 그대로 출력
            <textarea 
              placeholder="내용을 입력하세요." 
            />
          </label>
        </div>

        <div className="buttons-section">
          <button type="submit" className="submit-button">수정</button>
          <button type="button" className="cancel-button">취소</button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;
