import React, { useState } from 'react';
import Layout from './Layout.js'; // Layout 컴포넌트 임포트
import testImg from './test.jpg'
import ob from './ob.png'
import './styles/Home.css'; // Home.css 파일 임포트
import RecentGames from './RecentGames';
import WinRateGraph from './WinRateGraph.js';

import { HiHome, HiOutlineHome, HiCalendar, HiOutlineCalendar, HiOutlinePlusSm, HiUser } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";


const Home = () => {
    const [recentGames, setRecentGames] = useState([
        {
            id: 1,
            gameDate: "2023.09.01 금",
            opponentTeamName: "두산",
            opponentTeamScore: 1,
            opponentTeamImg: ob,
            myTeamName: "KIA",
            myTeamScore: 3,
            result: "WIN",
            resultName: "승리",
        },
        {
            id: 2,
            gameDate: "2023.09.02 토",
            opponentTeamName: "두산",
            opponentTeamScore: 2,
            opponentTeamImg: ob,
            myTeamName: "KIA",
            myTeamScore: 2,
            result: "DRAW",
            resultName: "무승부"
        },
        {
            id: 3,
            gameDate: "2023.09.03 일",
            opponentTeamName: "두산",
            opponentTeamScore: 3,
            opponentTeamImg: ob,
            myTeamName: "KIA",
            myTeamScore: 1,
            result: "LOSE",
            resultName: "패배"
        },
        {
            id: 4,
            gameDate: "2023.09.05 화",
            opponentTeamName: "두산",
            opponentTeamScore: 0,
            opponentTeamImg: ob,
            myTeamName: "KIA",
            myTeamScore: 0,
            result: null,
            resultName: null
        }
    ])
    return (
        <Layout>
            <div className='user-info'>
                <div className='user-welcome'>
                    <span className='user-name'>김기아</span>님 <br />환영해요!
                </div>
                <div className='team-logo'>
                    <img src={testImg} alt='야구팀 로고' />
                </div>
            </div>
            <div className='recent-games'>
                <div className='menu-title'>
                    직관일기를 기록해보세요!
                </div>
                <RecentGames recentGames={recentGames} />
            </div>
            <div className='win-rate-trend'>
                <div className='menu-title'>
                    최근 직관 승률 추이
                </div>
                <div className='graph-container'>
                    <WinRateGraph />
                    <div className='div-bottom-btn'>직관 승률 조회</div>
                </div>
            </div>
            <div className='menu-bar'>
                <div className='menu-item'>
                    <HiHome />
                </div>
                <div className='menu-item'>
                    <HiOutlineCalendar />
                </div>
                <div className='menu-item'>
                    <HiOutlinePlusSm />
                </div>
                <div className='menu-item'>
                    <SlGraph />
                </div>
                <div className='menu-item'>
                    <HiUser />
                </div>
            </div>
        </Layout >
    );
};

export default Home;
