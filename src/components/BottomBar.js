import React from "react";
import '../styles/BottomBar.css'
import { Link } from 'react-router-dom';

import { HiHome, HiOutlineHome, HiCalendar, HiOutlineCalendar, HiOutlinePlusSm, HiUser } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";

const BottomBar = () => {
    return (
        <div className='menu-bar'>
            <div className='menu-item'>
                <Link to="/home">
                    <HiHome />
                </Link>
            </div>
            <div className='menu-item'>
                <Link to="/record">
                    <HiOutlineCalendar />
                </Link>
            </div>
            <div className='menu-item'>
                <HiOutlinePlusSm />
            </div>
            <div className='menu-item'>
                <SlGraph />
            </div>
            <div className='menu-item'>
                <HiUser />
            </div>
        </div>
    )
}

export default BottomBar;