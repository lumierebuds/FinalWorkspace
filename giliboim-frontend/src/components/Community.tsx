import React, { useEffect, useState } from 'react';
import './Community.css';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
}

const Community: React.FC = () => {
  const [location, setLocation] = useState<string>('위치를 불러오는 중...');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: '제목1',
      content: '내용1',
      image: '사진',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      title: '제목2',
      content: '내용2',
      image: '사진',
      likes: 15,
      comments: 8,
    },
    // 더 많은 게시물 데이터를 추가할 수 있습니다.
  ]);

  useEffect(() => {
    // 사용자의 현재 위치를 가져오는 함수
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`위도: ${latitude}, 경도: ${longitude}`);
        },
        () => {
          setLocation('위치를 불러올 수 없습니다.');
        }
      );
    } else {
      setLocation('브라우저가 위치 정보를 지원하지 않습니다.');
    }
  }, []);

  return (
    <div className="community">
      <div className="location">{location}</div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-info">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
            </div>
            <div className="post-image">{post.image}</div>
            <div className="post-meta">
              <span>좋아요: {post.likes}</span> / <span>댓글: {post.comments}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="report-button">+ 제보글쓰기</button>
    </div>
  );
};

export default Community;
