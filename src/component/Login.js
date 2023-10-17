
import '../App.css';
import React, { useState } from 'react';
import SideMenu from './SideMenu';

function Login() {



    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
                    <SideMenu />

            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
                <h1>Login content goes here..!</h1>
            </div>
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>
        </div>
    );
}

export default Login;
