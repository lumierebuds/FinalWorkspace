import React, { useState } from 'react';
import '../../styles/admin/AdminComments.css';
import declaration from '../../assets/images/declaration.png';
import normal from '../../assets/images/User.png';

const AdminComments: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, type: '신고', name: '회원1', content: '이것은 신고된 댓글입니다.' },
    { id: 2, type: '신고', name: '회원2', content: '신고된 댓글 내용입니다.' },
    { id: 3, type: '신고', name: '회원3', content: '또 다른 신고된 댓글입니다.' },
    { id: 4, type: '일반', name: '회원4', content: '일반 댓글 내용입니다.' },
    { id: 5, type: '일반', name: '회원5', content: '또 다른 일반 댓글입니다.' },
    { id: 6, type: '신고', name: '회원6', content: '신고된 댓글입니다.' },
    { id: 7, type: '일반', name: '회원7', content: '일반 댓글입니다.' },
    { id: 8, type: '신고', name: '회원8', content: '신고된 댓글입니다.' },
  ]);

  const [filter, setFilter] = useState('전체');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
    setIsMenuOpen(false); // 메뉴 닫기
  };

  const handleSearch = () => {
    setFilter('전체'); // 검색 시 전체 보기로 변경
  };

  const filteredPosts = posts.filter(post =>
    filter === '전체'
      ? post.content.includes(searchTerm)
      : post.type === filter && post.content.includes(searchTerm)
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="admin-post-container">
      

      {isMenuOpen && (
        <div className="filter-menu">
          <div onClick={() => handleFilterChange('전체')} className={filter === '전체' ? 'active' : ''}>전체</div>
          <div onClick={() => handleFilterChange('일반')} className={filter === '일반' ? 'active' : ''}>일반</div>
          <div onClick={() => handleFilterChange('신고')} className={filter === '신고' ? 'active' : ''}>신고</div>
        </div>
      )}

      <div className="post-list">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-item">
            <div className="post-icon">
              {/* 신고/일반 아이콘 이미지 경로 */}
              {post.type === '신고' ? (
                <>
                <img src={declaration} alt="신고" className='declaration' />
                <div className="icon-label">신고</div>
                </>
              ) : (
                <>
                <img src={normal} alt="일반" className='normal'/>
                <div className="icon-label">일반</div>
                </>
              )}
            </div>
            <div className="post-content">
              <div>{post.name}님의 댓글</div>
              <div>{post.content}</div>
            </div>
            <button className="delete-button" onClick={() => handleDelete(post.id)}>✖</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AdminComments;
