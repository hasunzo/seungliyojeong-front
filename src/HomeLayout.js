import React from "react";
import Layout from "./Layout";
import BottomBar from "./BottomBar";

const HomeLayout = ({ children }) => {
    return (
        <div className='App'>
        <div className='body'>
          <div className='wrap'>
            {children}
            <BottomBar />
          </div>
        </div>
      </div>
    )
}

export default HomeLayout;