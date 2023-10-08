import React, { useState } from 'react';
import { HiOutlineChevronLeft, HiCheck } from "react-icons/hi";
import { Link } from 'react-router-dom'; // BrowserRouter 사용하지 않음
import Layout from '../Layout.js'; // Layout 컴포넌트 임포트
import testImg from '../test.jpg'
import '../styles/TeamSelectionPage.css'

const TeamSelectionPage = () => {
    const [teams, setTeams] = useState([
        {
            id: 1,
            teamCode: "HT",
            teamName: "KIA TIGERS",
            image: "./test.jpg",
            checked: false,
        },
        {
            id: 2,
            teamCode: "LG",
            teamName: "LG TWINS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 3,
            teamCode: "SK",
            teamName: "SSG LANDERS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 4,
            teamCode: "NC",
            teamName: "NC DINOS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 5,
            teamCode: "OB",
            teamName: "DOSAN BEARS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 6,
            teamCode: "KT",
            teamName: "KT WIZ",
            image: "./test.png",
            checked: false,
        },
        {
            id: 7,
            teamCode: "LT",
            teamName: "LOTTE GIANTS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 8,
            teamCode: "HH",
            teamName: "HANWHA EAGLES",
            image: "./test.png",
            checked: false,
        },
        {
            id: 9,
            teamCode: "SS",
            teamName: "SAMSUNG LIONS",
            image: "./test.png",
            checked: false,
        },
        {
            id: 10,
            teamCode: "WO",
            teamName: "KIWON HEROES",
            image: "./test.png",
            checked: false,
        },
    ]);

    // 정규식을 이용하여 스페이스바를 \n으로 변환하는 함수
    const replaceSpacesWithLineBreaks = (text) => {
        return text.replace(/ /g, '\n');
    }

    const onTeamCheckToggle = (id) => {
        setTeams(teams =>
            teams.map(team =>
                team.id === id
                    ? { ...team, checked: true } // 선택한 팀만 checked를 true로 설정
                    : { ...team, checked: false } // 나머지 팀들은 모두 checked를 false로 설정
            )
        );
    }

    const renderTeamsInRows = () => {
        const teamRows = [];

        for (let i = 0; i < teams.length; i += 2) {
            const team1 = teams[i];
            const team2 = teams[i + 1];

            if (team1 && team2) {
                const teamName1 = replaceSpacesWithLineBreaks(team1.teamName);
                const teamName2 = replaceSpacesWithLineBreaks(team2.teamName);

                teamRows.push(
                    <div className="team-row" key={`team-row-${i}`}>
                        <div
                            className={`team ${team1.checked ? "checked" : ""}`}
                            onClick={() => {
                                onTeamCheckToggle(team1.id)
                            }}
                        >
                            <div className="team-name">{teamName1}</div>
                            {team1.checked && (
                                <div className="check-mark">
                                    <HiCheck />
                                </div>
                            )}
                            <div
                                className='team-image'>
                                <img src={testImg}></img>
                            </div>
                        </div>
                        <div
                            className={`team ${team2.checked ? "checked" : ""}`}
                            onClick={() => {
                                onTeamCheckToggle(team2.id)
                            }}
                        >
                            <div className="team-name">{teamName2}</div>
                            {team2.checked && (
                                <div className="check-mark">
                                    <HiCheck />
                                </div>
                            )}
                            <div className='team-image'>
                                <img src={testImg}></img>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return teamRows;
    }

    return (
        <Layout>
            <div className='header'>
                <div className='navigate'>
                    <Link to="/">
                        <HiOutlineChevronLeft className='custom-icon' />
                    </Link>
                </div>
                <div className='progress'>
                    <div className='circle checked'>
                        <span className='number'>1</span>
                    </div>
                    <div className='circle'>
                        <span className='number'>2</span>
                    </div>
                </div>
                <div className='title'>
                    어느 팀을 응원하시나요?
                </div>
            </div>
            <div className='team-list'>
                <div className='team-container'>
                    {renderTeamsInRows()}
                </div>
            </div>
            <Link to="/profile">
                <div className="floating-element">
                    <div className="process-btn">
                        다음
                    </div>
                </div>
            </Link>
        </Layout>
    );
}

export default TeamSelectionPage;
