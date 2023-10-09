import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import { useParams, useNavigate } from "react-router-dom";

import ob from '../ob.png'
import kia from '../kia.png'
import sub from '../sub.png'

import '../styles/RecordPage.css'
import '../styles/RecordDetailPage.css'
import HomeLayout from "../components/HomeLayout";

import { HiOutlineChevronLeft, HiDotsVertical } from "react-icons/hi";
import RecordInfo from "../components/RecordInfo";

const RecordDetailPage = () => {
    const { id } = useParams(); // URL에서 레코드 ID 파라미터 추출
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // 뒤로가기
    };

    const record = {
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
        contents: "23년 첫 직관우승.. 약속의 8회 믿고 있었다고,,, 근데 오늘 일케 점수내면 낼은 .. 내일도 점수 내줄꺼지,,,? 3연승 ㄱㅂㅈㄱ",
        createTime: "2023.09.18",
    }

    const settings = {
        dots: true,
        centerMode: false,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        initialSlide: 0
    };

    return (
        <HomeLayout>
            <div className="records-bar">
                <HiOutlineChevronLeft className='custom-icon' onClick={handleGoBack} />
                <div className="records-month">
                    2023.09.17 일
                </div>
                <HiDotsVertical className="custom-icon" />
            </div>
            <div className="detail-info">
                <RecordInfo
                    gameDate={record.gameDate}
                    stadium={record.stadium}
                    awayTeamImg={record.awayTeamImg}
                    awayTeamScore={record.awayTeamScore}
                    result={record.result}
                    resultMsg={record.resultMsg}
                    homeTeamImg={record.homeTeamImg}
                    homeTeamScore={record.homeTeamScore} />
                <div className="contents-image-container">
                    <Slider {...settings}>
                        <div>
                            <img className="contents-image" src={record.thumbnail} />
                        </div>
                        <div>
                            <img className="contents-image" src={record.thumbnail} />
                        </div>
                        <div>
                            <img className="contents-image" src={record.thumbnail} />
                        </div>
                    </Slider>
                </div>
                <div className="contents">
                    {record.contents}
                </div>
            </div>
        </HomeLayout>
    )
}

export default RecordDetailPage;