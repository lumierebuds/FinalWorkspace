import React, { useState } from 'react';
import '../../styles/admin/ReportCommentList.css'
import declaration from '../../assets/images/declaration.png'; // 신고 아이콘 경로
import backIcon from '../../assets/images/back.png'; // 뒤로가기 아이콘 경로
import menuIcon from '../../assets/images/menu.png'; // 메뉴 아이콘 경로
import notificationIcon from '../../assets/images/notification.png'; // 알림 아이콘 경로

const ReportCommentList: React.FC = () => {
  const username = "이름 바꾸기"; // 예시 회원 이름
  const [comments, setComments] = useState([
    { id: 1, content: '이것은 신고된 댓글입니다.' },
    { id: 2, content: '또 다른 신고된 댓글입니다.' },
    { id: 3, content: '여기도 신고된 댓글입니다.' },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  }; 

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // 검색 기능 구현
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="report-comment-list-container">
      {/* <div className="header">
        <button className="back-button">
          <img src={backIcon} alt="뒤로가기" className='backIcon' />
        </button>
        <h2>{username}님이 신고한 댓글</h2>
        <div className="icons">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
            <img src={menuIcon} alt="메뉴" className='menuIcon'/>
          </button>
          <button className="notification-button">
            <img src={notificationIcon} alt="알림" className='notificationIcon'/>
          </button>
          <div className="search-bar">
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div> */}
{/* 
      {isMenuOpen && (
        <div className="filter-menu">
          <div className="active">작성한 게시글 목록</div>
          <div>작성한 댓글 목록</div>
          <div>신고한 게시글 목록</div>
          <div>신고한 댓글 목록</div>
        </div>
      )} */}

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <div className="comment-icon">
                <>
                <img src={declaration} alt="신고" className='declaration' />
                <div className="icon-label">신고</div>
                </>
            </div>
            <div className="comment-content">
              <div><strong>{username}</strong>님의 댓글 <strong>{comment.content}</strong> 가 신고 되었습니다.</div>
            </div>
            <button className="delete-button" onClick={() => handleDelete(comment.id)}>✖</button>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default ReportCommentList;
