import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TeamSelectionPage from './pages/TeamSelectionPage'; // TeamSelectionPage 컴포넌트 import
import ProfileInputPage from './pages/ProfileInputPage'; // ProfileInputPage 컴포넌트 import
import Home from './pages/Home';
import RecordPage from './pages/RecordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/team-select" element={<TeamSelectionPage />} />
        <Route path="/profile" element={<ProfileInputPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/record" element={<RecordPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
