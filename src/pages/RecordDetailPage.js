import React, { useState } from "react";
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

import { HiOutlineChevronLeft, HiDotsVertical, HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import RecordInfo from "../components/RecordInfo";

const RecordDetailPage = () => {
    const { id } = useParams(); // URL에서 레코드 ID 파라미터 추출
    const navigate = useNavigate();
    const [isMenuVisible, setIsMenuVisible] = useState(false); // 메뉴 보이기 여부 상태
    const [isEditMode, setIsEditMode] = useState(false); // 수정하기 모드 상태

    const handleGoBack = () => {
        navigate(-1); // 뒤로가기
    };

    const [record, setRecord] = useState({
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
    })

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

    const handleMenuClick = () => {
        // 메뉴 보이기 여부를 토글
        setIsMenuVisible(!isMenuVisible);
    };

    const handleDelete = () => {
        // 삭제 로직을 구현하세요.
        alert("삭제하기 기능이 실행됩니다.");
    };

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    };

    const handleContentChange = (e) => {
        setRecord({ ...record, contents: e.target.value });
    };

    return (
        <HomeLayout>
            <div className="records-bar">
                <HiOutlineChevronLeft className='custom-icon' onClick={handleGoBack} />
                <div className="records-month">
                    2023.09.17 일
                </div>
                <div>
                    {/* HiDotsVertical 아이콘을 클릭했을 때 메뉴 보이기/숨기기 */}
                    <HiDotsVertical className="custom-icon" onClick={handleMenuClick} />

                    {/* 메뉴를 보일지 여부를 검사하고 렌더링 */}
                    {isMenuVisible && (
                        <div className="menu">
                            <ul className="menu-list">
                                <li onClick={handleEdit}>수정</li>
                                <li onClick={handleDelete} className="font-red">삭제</li>
                            </ul>
                        </div>
                    )}
                </div>
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
                    {isEditMode ? (
                        <textarea
                            className="contents-edit-mode"
                            defaultValue={record.contents}
                            onChange={handleContentChange}
                        ></textarea>
                    ) : (
                        <div className="contents-text">{record.contents}</div>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default RecordDetailPage;