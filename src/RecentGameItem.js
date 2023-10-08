import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const RecentGameItem = ({ recentGame }) => {
    const { id, gameDate, opponentTeamName, opponentTeamScore, opponentTeamImg, myTeamName, myTeamScore, result, resultName } = recentGame

    const renderRecordResult = () => {
        if (!result) return;
        const recordResult = [];
        recordResult.push(
            <div className="score">
                {myTeamScore} : {opponentTeamScore}
            </div>
        )
        recordResult.push(
            <div className={`result ${result}`}>
                {resultName}
            </div>
        )
        return recordResult
    }

    return (
        <div className="slide-content">
            <div className="game-data">
                <div className="game-date">
                    {gameDate}
                </div>
                <div className="record">
                    {myTeamName} vs {opponentTeamName}
                </div>
                <div className="record-result">
                    <div className="team-img">
                        <img src={opponentTeamImg} alt='상대팀 로고' />
                    </div>
                    {renderRecordResult()}
                </div>
            </div>
            <div className="add">
                기록하기
            </div>
        </div>
    )
};

export default RecentGameItem;