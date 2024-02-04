import React from 'react';
import '../styles/CalendarView.css'
import testImg from '../test.jpg'

const CalendarView = ({calendarData, year, month}) => {
  console.log(year, month)
  // 현재 날짜 정보 가져오기
  const currentDate = new Date();
  const currentYear = year
  const currentMonth = month;

  // 각 달의 첫째 날의 요일 가져오기
  const getFirstDayOfMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month - 1, 1); // 월은 0부터 시작하므로 -1을 해줍니다.
    return firstDayOfMonth.getDay(); // 요일을 반환합니다. (0: 일요일, 1: 월요일, ..., 6: 토요일)
  }

  // 셀 렌더링 함수
  const renderCells = () => {
    const cells = [];
    const firstDayOfWeek = getFirstDayOfMonth(currentYear, currentMonth);

    // 첫째 날의 요일 전에 빈 칸 채우기
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    // 현재 월의 마지막 날짜 가져오기
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

    // 월의 날짜 채우기
    for (let i = 1; i <= lastDayOfMonth; i++) {
      cells.push(
        <td key={`day-${i}`} className="calendar-cell">
          {i}
          <img src={testImg} alt="test" className="game-image"></img>
          <div className="game-result">
            <span className="game-result-circle">승</span>
            <span className="game-score">잠실</span>ㅐ
          </div>
        </td>
      );
    }

    // 마지막 날 이후의 빈 칸 채우기
    const remainingCells = 7 - (firstDayOfWeek + lastDayOfMonth) % 7;
    for (let i = 0; i < remainingCells; i++) {
      cells.push(<td key={`empty-${lastDayOfMonth + i}`} className="empty-cell"></td>);
    }

    // 셀을 7개씩 묶어서 행으로 만듭니다.
    const rows = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(<tr key={`row-${i / 7}`}>{cells.slice(i, i + 7)}</tr>);
    }

    return rows;
  };

  return (
    <div className="calendar">
      <div className="calendar-container">
        <table>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {renderCells()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarView;
