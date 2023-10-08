import React, { useState } from "react";
import '../styles/RecordPage.css'

import { MdUnfoldMore, MdFormatListBulleted } from "react-icons/md"
import { HiOutlineCalendar } from "react-icons/hi";
import CalendarView from "../CalendarView";
import ListView from "../ListView";
import HomeLayout from "../HomeLayout";

const RecordPage = () => {
    const [isCalendarView, setIsCalendarView] = useState(true);

    const toggleView = () => {
        setIsCalendarView(!isCalendarView);
    };

    return (
        <HomeLayout>
            <div className="records-bar">
                <div className="records-month">
                    2023년 09월 <MdUnfoldMore />
                </div>
                <div className="view-toggle" onClick={toggleView}>
                    {isCalendarView ? (
                        <span role="img" aria-label="리스트 아이콘">
                            <MdFormatListBulleted />
                        </span>
                    ) : (
                        <span role="img" aria-label="달력 아이콘">
                            <HiOutlineCalendar />
                        </span>
                    )}
                </div>
            </div>
            <div className={`content ${isCalendarView ? 'calendar-view' : 'list-view'}`}>
                {/* 여기에 컨텐츠를 표시하는 컴포넌트를 추가하세요. */}
                {isCalendarView ? <CalendarView /> : <ListView />}
            </div>
        </HomeLayout>
    )
}

export default RecordPage;