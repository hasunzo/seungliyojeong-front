import React from 'react';
import Layout from './Layout.js'; // Layout 컴포넌트 임포트
import './styles/LoginPage.css'
import KakaoLogo from './kakao_login_logo.png'
import Logo from './logo192.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const socialButtons = [
    {
      name: '카카오',
      backgroundColor: '#FEE500',
      labelColor: '#191919',
      logo: 'kakao_logo.png', // 카카오 로고 이미지 경로
    },
    {
      name: '구글',
      backgroundColor: '#FFFFFF',
      labelColor: '#191919',
      logo: 'google_logo.png', // 구글 로고 이미지 경로
      border: '1px solid gray', // 테두리 스타일 추가
    },
    {
      name: '네이버',
      backgroundColor: '#03C75A',
      labelColor: 'white',
      logo: 'naver_logo.png', // 네이버 로고 이미지 경로
    },
  ];

  return (
    <Layout>
      <div className="login-page">
        <img src={Logo} alt="앱 로고" className="app-logo" />
        <p className="app-description">로그인하고 승리요정임을 증명해주세요!</p>
      </div>
      <div className='social-buttons'>
        <Link to="/team-select">
          <img className='kakao-button' src={KakaoLogo} alt='카카오 로그인' />
        </Link>
        {/* <p className='or-divider'>
            <span className='line' />
            <span className='or-text'>or</span>
            <span className='line' />
          </p>
          <button className='naver-button'>
            <img src='naver_icon.png' alt='네이버 로그인' />
          </button>
          <button className='google-button'>
            <img src='google_icon.png' alt='구글 로그인' />
          </button> */}
      </div>
    </Layout>
  );
};

export default LoginPage;
