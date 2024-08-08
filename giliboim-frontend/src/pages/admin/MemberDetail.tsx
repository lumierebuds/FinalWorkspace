    import React, { useState } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';
    import '../../styles/admin/MemberDetail.css';

    function AdminDetail() {
        const location = useLocation();
        const member = location.state?.member || {
            name: "이재용",
            phone: "010-xxxx-xxxx",
            birthdate: "1968년 06월 23일",
            joinDate: "2022년 10월 01일",
            address: "서울특별시 용산구 한남동",
            friendsCount: "12만 4000명",
            profileImage: require('../../assets/images/giliboim-logo.png'),
        };

        const navigate = useNavigate();
        const [isDropdownOpen, setDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setDropdownOpen(!isDropdownOpen);
        };

        return (
            <div className="member-detail-page">
               
                <div className="member-info">
                    <img src={member.profileImage} alt="회원 프로필" className="member-image" />
                    <div className="member-basic-info">
                        <div className="member-name">{member.name}</div>
                        <div className="member-phone">{member.phone}</div>
                    </div>
                </div>
                <table className="member-stats">
                    <tbody>
                        <tr>
                            <td className="stat-label">생년월일</td>
                            <td className="stat-value">{member.birthdate}</td>
                        </tr>
                        <tr>
                            <td className="stat-label">가입일</td>
                            <td className="stat-value">{member.joinDate}</td>
                        </tr>
                        <tr>
                            <td className="stat-label">거주지</td>
                            <td className="stat-value">{member.address}</td>
                        </tr>
                        <tr>
                            <td className="stat-label">친구수</td>
                            <td className="stat-value">{member.friendsCount}</td>
                        </tr>
                        <tr>
                            <td className="stat-label">즐겨찾기</td>
                            <td className="stat-value">
                                <div className="dropdown-item">
                                    <div className="dropdown-button" onClick={toggleDropdown}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.75 12.0835L14.5 19.3335L7.25 12.0835L8.94167 10.3918L14.5 15.9502L20.0583 10.3918L21.75 12.0835Z" fill="#79747E" />
                                        </svg>
                                        {isDropdownOpen && (
                                        <div className="dropdown-content">
                                            <div>서울특별시 용산구 한남동</div>
                                            <div>서울특별시 중구 세종대로</div>
                                            <div>경기도 수원시 영통구 삼성로</div>
                                        </div>
                                    )}
                                    </div>                                    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="favorite-buttons">
                    <div className="favorite-button" onClick={() => navigate("/admin/MyPost")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        작성한 게시글 목록
                    </div>
                    <div className="favorite-button" onClick={() => navigate("/admin/ReportPost")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        신고한 게시글 목록
                    </div>
                    <div className="favorite-button" onClick={() => navigate("/admin/MemberComments")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        작성한 댓글 목록
                    </div>
                    <div className="favorite-button" onClick={() => navigate("/admin/ReportComments")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        신고한 댓글 목록
                    </div>
                </div>
                <div className="member-actions">
                    <div className="action-button">회원 저장</div>
                    <div className="action-button">회원 정지</div>
                    <div className="action-button">회원 삭제</div>
                </div>
            </div>
        );
    }

    export default AdminDetail;
