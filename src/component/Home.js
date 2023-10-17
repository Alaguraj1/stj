
import "../App.css"
import SideMenu from "./SideMenu";
import React, { useState } from 'react';

function Home() {



    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenu />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
            </div>
       
        </div>
    );
}

export default Home;
