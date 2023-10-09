import React from 'react';
import RecordInfo from './RecordInfo';
import { Link } from 'react-router-dom';

const RecordContents = ({ thumbnail, contents, shouldShowMore }) => {
    // 조건: thumbnail이나 contents 중 하나라도 존재해야 함
    const shouldRenderRecordContents = thumbnail || contents;

    return shouldRenderRecordContents ? (
        <div className="record-contents">
            {thumbnail !== null && <img src={thumbnail} alt="썸네일" />}
            <div className="contents">
                {shouldShowMore ? (
                    <>
                        {contents} ... <span>더보기</span>
                    </>
                ) : (
                    contents
                )}
            </div>
        </div>
    ) : null; // thumbnail과 contents 둘 다 없으면 null 반환하여 숨김
};

const ListViewRecordItem = ({ record }) => {
    const {
        id,
        gameDate,
        homeTeamCode,
        homeTeamName,
        homeTeamScore,
        homeTeamImg,
        awayTeamCode,
        awayTeamName,
        awayTeamScore,
        awayTeamImg,
        myTeamCode,
        result,
        resultMsg,
        stadium,
        thumbnail,
        contents,
        createTime,
    } = record;

    const maxLength = 65;
    const shouldShowMore = contents.length >= maxLength;

    return (
        <div className="record-item">
            <Link to={`/record/${id}`}>
                <RecordInfo gameDate={gameDate} stadium={stadium} awayTeamImg={awayTeamImg} awayTeamScore={awayTeamScore} result={result} resultMsg={resultMsg} homeTeamImg={homeTeamImg} homeTeamScore={homeTeamScore} />
                <RecordContents
                    thumbnail={thumbnail}
                    contents={contents}
                    shouldShowMore={shouldShowMore}
                />
            </Link>
        </div>
    );
};

export default ListViewRecordItem;
