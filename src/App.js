import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import TeamSelectionPage from './TeamSelectionPage'; // TeamSelectionPage 컴포넌트 import
import ProfileInputPage from './ProfileInputPage'; // ProfileInputPage 컴포넌트 import
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/team-select" element={<TeamSelectionPage />} />
        <Route path="/profile" element={<ProfileInputPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
