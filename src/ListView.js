import React from "react";
import ob from './ob.png'
import testImg from './kia.png'
import sub from './sub.png'

const ListView = () => {
    return (
        <div className="record-item">
            <div className="record-top">
                <div className="date">
                    2023.09.17 일
                </div>
                <div className="stadium">
                    잠실
                </div>
            </div>
            <div className="record-team-info">
                <div className="info team-logo">
                    <img src={testImg} alt="원정팀 로고" />
                    <div className="weight">9</div>
                </div>
                <div className="info weight win">
                    승리
                </div>
                <div className="info team-logo">
                    <img src={ob} alt="홈팀 로고" />
                    <div className="weight">3</div>
                </div>
            </div>
            <div className="record-contents">
                <img src={sub} />
                <div className="contents">
                    23년 첫 직관우승.. 약속의 8회 믿고 있었다고,,, 근데 오늘 일케 점수내면 낼은 .. 내일도 점수 내줄꺼지,,,? 3 ... <span>더보기</span>
                </div>
            </div>
        </div>
    )
}

export default ListView;