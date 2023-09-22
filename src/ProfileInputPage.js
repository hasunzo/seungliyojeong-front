import React, { useState } from 'react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import './FloatingButton.css'
import './App.css';
import './ProfileInputPage.css'
import { Link } from 'react-router-dom';

const ProfileInputPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickname, setNickname] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='App'>
      <div className='body'>
        <div className='wrap'>
          <div className='header'>
            <div className='navigate'>
              <Link to="/">
                <HiOutlineChevronLeft className='custom-icon' />
              </Link>
            </div>
            <div className='progress'>
              <div className='circle'>
                <span className='number'>1</span>
              </div>
              <div className='circle checked'>
                <span className='number'>2</span>
              </div>
            </div>
            <div className='title'>
              프로필과 닉네임을<br /> 설정해주세요
            </div>
          </div>
          <div className="profile-input">
            <div className="profile-image-container">
              <label htmlFor="image-input" className="profile-image-label">
                <div className="profile-image">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Profile" />
                  ) : (
                    <div className="empty-profile"></div>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="image-input"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
            <div className="profile-button">
              <label htmlFor="image-input" className="profile-change-button">
                프로필 바꾸기
              </label>
            </div>
            <div className="profile-nickname">
              <input
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
          <div className="floating-element">
            <div className="process-btn">
              가입 완료
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInputPage;
