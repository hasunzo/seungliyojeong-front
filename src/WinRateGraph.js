import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const WinRateGraph = () => {
  const data = {
    labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05'],
    datasets: [
      {
        data: [60, 30, 50, 75, 66], // 가상의 승률 데이터
        backgroundColor: '#ff3d00',
        borderColor: '#ff3d00',
        borderWidth: 3,
      },
    ],
  };

  // 차트 옵션 설정
  const options = {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        max: 100, // 승률의 최대 값 (0% ~ 100%)
      },
      x: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false, // 레이블 숨기기
      },
    },
  };

  return (
    <div className="win-rate-trend-graph">
      <Line data={data} options={options} />
    </div>
  );
}

export default WinRateGraph;
