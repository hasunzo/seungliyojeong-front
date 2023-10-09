import React, { useState } from 'react';
import '../styles/CalendarView.css'

const CalendarView = ({ calendarData, recordData }) => {
  // 간단한 날짜 포맷팅 함수
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="calendar">
      {calendarData.map((day) => (
        <div key={day.date} className={`calendar-day ${day.recorded ? 'recorded' : ''}`}>
          <div className="calendar-date">{formatDate(day.date)}</div>
          {day.game ? (
            <div className="calendar-game">
              <img src={day.game.opponentTeamImg} alt={day.game.opponentTeamName} />
              <div className="calendar-game-result">
                {day.game.result ? (
                  <div className="result-circle">{day.game.resultMsg}</div>
                ) : (
                  <div className="stadium">{day.game.stadium}</div>
                )}
                <div className="score">
                  {day.game.opponentTeamScore} : {day.game.myTeamScore}
                </div>
              </div>
            </div>
          ) : null}
          {day.recorded && <div className="recorded-overlay">기록 완료</div>}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
