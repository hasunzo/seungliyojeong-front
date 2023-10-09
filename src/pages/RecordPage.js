import React, { useState } from "react";
import '../styles/RecordPage.css'
import ob from '../ob.png'
import nc from '../nc.png'
import kia from '../kia.png'
import sub from '../sub.png'

import { MdUnfoldMore, MdFormatListBulleted } from "react-icons/md"
import { HiOutlineCalendar } from "react-icons/hi";
import CalendarView from "../components/CalendarView.js";
import ListView from "../components/ListView.js";
import HomeLayout from "../components/HomeLayout.js";

const RecordPage = () => {
    const [records, setRecords] = useState([
        {
            id: 1,
            gameDate: "2023.09.17 일",
            homeTeamCode: "OB",
            homeTeamName: "두산",
            homeTeamScore: "3",
            homeTeamImg: ob,
            awayTeamCode: "HT",
            awayTeamName: "기아",
            awayTeamScore: "9",
            awayTeamImg: kia,
            myTeamCode: "HT",
            result: "win",
            resultMsg: "승리",
            stadium: "잠실",
            thumbnail: sub,
            contents: "23년 첫 직관우승.. 약속의 8회 믿고 있었다고,,, 근데 오늘 일케 점수내면 낼은 .. 내일도 점수 내줄꺼지,,,? 3",
            createTime: "2023.09.18",
        },
        {
            id: 2,
            gameDate: "2023.09.16 토",
            homeTeamCode: "OB",
            homeTeamName: "두산",
            homeTeamScore: "3",
            homeTeamImg: ob,
            awayTeamCode: "HT",
            awayTeamName: "기아",
            awayTeamScore: "1",
            awayTeamImg: kia,
            myTeamCode: "HT",
            result: "lose",
            resultMsg: "패배",
            stadium: "잠실",
            thumbnail: null,
            contents: "이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게 야구냐 이게",
            createTime: "2023.09.18",
        },
        {
            id: 3,
            gameDate: "2023.09.15 금",
            homeTeamCode: "NC",
            homeTeamName: "NC",
            homeTeamScore: "3",
            homeTeamImg: nc,
            awayTeamCode: "HT",
            awayTeamName: "기아",
            awayTeamScore: "3",
            awayTeamImg: kia,
            myTeamCode: "HT",
            result: "draw",
            resultMsg: "무승부",
            stadium: "창원",
            thumbnail: null,
            contents: "",
            createTime: "2023.09.18",
        },
        {
            id: 4,
            gameDate: "2023.09.10 일",
            homeTeamCode: "NC",
            homeTeamName: "NC",
            homeTeamScore: 1,
            homeTeamImg: nc,
            awayTeamCode: "HT",
            awayTeamName: "기아",
            awayTeamScore: 2,
            awayTeamImg: kia,
            myTeamCode: "HT",
            result: "cancel",
            resultMsg: "취소",
            stadium: "창원",
            thumbnail: null,
            contents: "창원까지 갔는데 우천취소라니..",
            createTime: "2023.09.18",
        },
        {
            id: 5,
            gameDate: "2023.09.17 일",
            homeTeamCode: "OB",
            homeTeamName: "두산",
            homeTeamScore: "3",
            homeTeamImg: ob,
            awayTeamCode: "HT",
            awayTeamName: "기아",
            awayTeamScore: "9",
            awayTeamImg: kia,
            myTeamCode: "HT",
            result: "win",
            resultMsg: "승리",
            stadium: "잠실",
            thumbnail: sub,
            contents: "23년 첫 직관우승.. 약속의 8회 믿고 있었다고,,, 근데 오늘 일케 점수내면 낼은 .. 내일도 점수 내줄꺼지,,,? 3",
            createTime: "2023.09.18",
        }
    ])

    const mockCalendarData = [
        // 각 요소는 날짜, 경기 정보, 기록 여부를 가집니다.
        {
          date: '2023-09-01',
          game: {
            opponentTeamName: 'LG',
            opponentTeamScore: 4,
            opponentTeamImg: 'img.png',
            myTeamScore: 2,
            result: 'WIN',
            resultMsg: '승',
            stadium: '잠실',
          },
          recorded: true,
        },
        {
          date: '2023-09-02',
          game: {
            opponentTeamName: 'KT',
            opponentTeamScore: 3,
            opponentTeamImg: 'img.png',
            myTeamScore: 3,
            result: null,
            resultMsg: null,
            stadium: '대전',
          },
          recorded: false,
        },
        // ...
      ];

    const [isCalendarView, setIsCalendarView] = useState(true);

    const toggleView = () => {
        setIsCalendarView(!isCalendarView);
    };

    return (
        <HomeLayout>
            <div className="records-bar">
                <div className="records-month">
                    2023년 09월 <MdUnfoldMore className="custom-icon" />
                </div>
                <div className="view-toggle" onClick={toggleView}>
                    {isCalendarView ? (
                        <span role="img" aria-label="리스트 아이콘">
                            <MdFormatListBulleted className="custom-icon"/>
                        </span>
                    ) : (
                        <span role="img" aria-label="달력 아이콘">
                            <HiOutlineCalendar className="custom-icon"/>
                        </span>
                    )}
                </div>
            </div>
            <div className={`content ${isCalendarView ? 'calendar-view' : 'list-view'}`}>
                {isCalendarView ? <CalendarView calendarData={mockCalendarData} /> : <ListView records={records} />}
            </div>
        </HomeLayout>
    )
}

export default RecordPage;