import React, { useEffect, useState } from "react";
import '../styles/FloatingButton.css'

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);
        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollY + windowHeight >= documentHeight) {
            // 스크롤이 맨 아래로 이동할 때
            setIsVisible(true);
        } else {
            // 스크롤이 맨 아래가 아닐 때
            setIsVisible(true);
        }
    };

    return (
        <div className="floating-element">
            <div className="process-btn">
                다음
            </div>
        </div>
    );
}

export default FloatingButton;