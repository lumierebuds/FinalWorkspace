import React, { useState } from 'react';
import '../../styles/admin/PostList.css';

interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    likes: number;
    comments: number;
}

const PostList: React.FC = () => {

    const [posts] = useState<Post[]>([
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



    return (
        <div className="ReportPostList">

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

        </div>
    );
};

export default PostList;
