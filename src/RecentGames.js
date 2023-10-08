import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import RecentGameItem from "./RecentGameItem";

const RecentGames = ({ recentGames }) => {
    const settings = {
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        slideToScroll: 1,
        arrows: false,
        rows: 1,
        speed: 500
    };
    return (
        <Slider {...settings} className="scrollable-list">
            {recentGames.map(recentGame => (
                <RecentGameItem
                    recentGame={recentGame}
                    key={recentGame.id}
                />
            ))}
        </Slider>
    );
}

export default RecentGames;