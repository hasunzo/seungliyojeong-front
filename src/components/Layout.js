import React from 'react';
import '../styles/App.css'; // App.css 파일 임포트
import '../styles/FloatingButton.css'

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <div className='body'>
        <div className='wrap'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
