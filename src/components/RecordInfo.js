import React from 'react';
import '../styles/CommonStyles.css'; // 공통 스타일 파일을 불러옵니다.

const RecordInfo = ({ gameDate, stadium, awayTeamImg, awayTeamScore, result, resultMsg, homeTeamImg, homeTeamScore }) => {
  return (
    <div className="record-info">
      <div className="record-top">
        <div className="date">{gameDate}</div>
        <div className="stadium">{stadium}</div>
      </div>
      <div className="record-team-info">
        <div className="info team-logo">
          <img src={awayTeamImg} alt="원정팀 로고" />
          <div className="weight">{awayTeamScore}</div>
        </div>
        <div className={`info weight ${result}`}>{resultMsg}</div>
        <div className="info team-logo">
          <img src={homeTeamImg} alt="홈팀 로고" />
          <div className="weight">{homeTeamScore}</div>
        </div>
      </div>
    </div>
  );
};

export default RecordInfo;
