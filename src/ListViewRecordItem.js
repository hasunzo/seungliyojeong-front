import React from "react";

const ListViewRecordItem = ({ record }) => {
    console.log('data => ', record)
    const { id, gameDate, homeTeamCode, homeTeamName, homeTeamScore, homeTeamImg,
        awayTeamCode, awayTeamName, awayTeamScore, awayTeamImg, myTeamCode, result, resultMsg,
        stadium, thumbnail, contents, createTime } = record

    const maxLength = 65;
    const shouldShowMore = contents.length >= maxLength;

    return (
        <div className="record-item">
            <div className="record-top">
                <div className="date">
                    {gameDate}
                </div>
                <div className="stadium">
                    {stadium}
                </div>
            </div>
            <div className="record-team-info">
                <div className="info team-logo">
                    <img src={awayTeamImg} alt="원정팀 로고" />
                    <div className="weight">{awayTeamScore}</div>
                </div>
                <div className={`info weight ${result}`}>
                    {resultMsg}
                </div>
                <div className="info team-logo">
                    <img src={homeTeamImg} alt="홈팀 로고" />
                    <div className="weight">{homeTeamScore}</div>
                </div>
            </div>
            <div className="record-contents">
                {thumbnail !== null && (
                    <img src={thumbnail} alt="썸네일" />
                )}
                <div className="contents">
                    {shouldShowMore ? (
                        <>
                            {contents} ... <span>더보기</span>
                        </>
                    ) : (
                        contents
                    )}                </div>
            </div>
        </div>
    )
}

export default ListViewRecordItem;
