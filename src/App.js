import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
    const [menu, setMenu] = useState(false);
    const [menuStatus, setMenuStatus] = useState('');
    const [mobileMenuStatus, setMobileMenuStatus] = useState('');   

    function menuopenclose() {

        if(menu){
            setMenu(false)
            setMenuStatus("")
            setMobileMenuStatus("")
        }
        else{
            setMenu(true);
            setMenuStatus("is-active")
            setMobileMenuStatus("opened")
        }
      
       
      }



  return (
    <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
    <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
            <div className="logo" data-type="image"> <a className="image" href="#"><img
                        className="max-w-[100px] max-h-[40px]" src="assets/img/logo/logo.png" alt="logo" /></a><a
                    className="text" href="#"><span>R.Elisc</span></a></div>
            <div className="trigger" onClick={menuopenclose}>
                <div className={`hamburger hamburger--slider ${menuStatus}`}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`elisc_tm_mobile_menu ${mobileMenuStatus}`}>
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
            <div className="wrapper">
                <div className="avatar w-[70px] h-[70px] relative float-right mb-[50px]">
                    <div className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/about/1.jpg"></div>
                </div>
                <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
                    <ul className="transition_link m-0">
                        <li className="mb-[7px] active"><a href="#home">Home</a></li>
                        <li className="mb-[7px] "><a href="#about">About</a></li>
                        <li className="mb-[7px] "><a href="#service">Services</a></li>
                        <li className="mb-[7px] "><a href="#portfolio">Portfolio</a></li>
                        <li className="mb-[7px] "><a href="#blogs">Blog</a></li>
                        <li className="mb-[7px] "><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="social w-full float-left mb-[5px]">
                    <ul>
                        <li className="mr-[8px] inline-block"><a className="text-[#333]" href="#"><img className="svg"
                                    src="assets/img/svg/social/facebook.svg" alt="image" /></a></li>
                        <li className="mr-[8px] inline-block"><a className="text-[#333]" href="#"><img className="svg"
                                    src="assets/img/svg/social/twitter.svg" alt="image" /></a></li>
                        <li className="mr-[8px] inline-block"><a className="text-[#333]" href="#"><img className="svg"
                                    src="assets/img/svg/social/instagram.svg" alt="image" /></a></li>
                        <li className="mr-[8px] inline-block"><a className="text-[#333]" href="#"><img className="svg"
                                    src="assets/img/svg/social/dribbble.svg" alt="image" /></a></li>
                        <li className="inline-block"><a className="text-[#333]" href="#"><img className="svg"
                                    src="assets/img/svg/social/tik-tok.svg" alt="image" /></a></li>
                    </ul>
                </div>
                <div className="copyright w-full float-left">
                    <p className="text-dark-color">Copyright © 2023</p>
                </div>
            </div>
        </div>
    </div>
    <div
        className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
        <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
            <div className="author w-full float-left pt-[60px]">
                <div className="image relative w-[118px] inline-block"><img className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg" alt="image" />
                    <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url="assets/img/about/1.jpg"></div>
                </div>
                <div className="name w-full float-left mt-[-19px]">
                    <h3><span>Robert Elisc<span className="back">Robert Elisc</span></span></h3>
                </div>
            </div>
            <div className="menu scrollable w-full float-left">
                <ul className="transition_link h-full flex items-center justify-center flex-col">
                    <li className="mb-[15px] active"><a href="#home">Home</a></li>
                    <li className="mb-[15px] "><a href="#about">About</a></li>
                    <li className="mb-[15px] "><a href="#service">Services</a></li>
                    <li className="mb-[15px] "><a href="#portfolio">Portfolio</a></li>
                    <li className="mb-[15px] "><a href="#blogs">Blog</a></li>
                    <li className="mb-[15px] "><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="copyright absolute bottom-[50px]">
                <div className="social w-full float-left mb-[7px]">
                    <ul>
                        <li className="mr-[3px] inline-block"><a
                                className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                href="#"><i
                                    className="icon-facebook-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                        </li>
                        <li className="mr-[3px] inline-block"><a
                                className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                href="#"><i
                                    className="icon-twitter-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                        </li>
                        <li className="mr-[3px] inline-block"><a
                                className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                href="#"><i
                                    className="icon-linkedin-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="text py-0 px-[50px]">
                    <p>Copyright © 2023 Robert Elisc. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
        <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
            <div id="home" className="elisc_tm_section animated active fadeInLeft">
                <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="details w-full min-h-[100vh] flex items-center">
                            <div className="left w-1/2">
                                <div className="title w-full float-left mb-[21px]">
                                    <h3 className="font-extrabold text-[60px] leading-[70px]">Hi, I&#x27;m <span
                                            className="text-blue-color">Elisc!</span></h3>
                                    <h3 className="font-extrabold text-[60px] leading-[70px]"><span
                                            className="cd-headline rotate-1"> <span className="blc">Creative
                                            </span><span className="cd-words-wrapper"><b
                                                    className="is-visible">Designer</b><b
                                                    className="is-hidden">Coder</b><b
                                                    className="is-hidden">Player</b></span></span></h3>
                                    <h3 className="font-extrabold text-[60px] leading-[70px]">Based in Florida</h3>
                                </div>
                                <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                                    <p>I&#x27;m a Florida based web designer &amp; front‑end developer with
                                        <span className="text-blue-color">10+ years</span> of experience</p>
                                </div>
                                <div className="buttons w-full float-left flex items-center mb-[150px]">
                                    <div className="elisc_tm_button transition_link"><a href="#portfolio">Got a
                                            project?</a></div>
                                    <div className="elisc_tm_button transition_link" data-style="border"><a
                                            href="#contact">Let&#x27;s talk</a></div>
                                </div>
                                <div className="info w-full float-left">
                                    <ul className="relative">
                                        <li className="pl-[15px]"><a
                                                className="text-[#130F49] font-semibold text-[18px]"
                                                href="tel:+77 022 444 05 05">+77 022 444 05 05</a></li>
                                        <li className="pl-[15px]"><a
                                                className="text-[#130F49] font-semibold text-[18px]"
                                                href="mailto:support@elisc.com">support@elisc.com</a></li>
                                        <li className="pl-[15px]"><a
                                                className="href_location text-[#130F49] font-semibold text-[18px]"
                                                href="#">Ave Street Avenue, New York</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right w-1/2 pl-[50px]"><img src="assets/img/about/2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="elisc_tm_section ">
                <div className="elisc_tm_about w-full float-left pt-[130px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
                            <div className="left w-[40%]">
                                <div className="title w-full float-left mb-[40px]"><span
                                        className="mini block uppercase font-medium mb-[12px]">- Nice to meet
                                        you!</span>
                                    <h3 className="name font-extrabold text-[40px]">Robert Elisc</h3><span
                                        className="job font-semibold text-[20px] text-dark-color"><span
                                            className="cd-headline rotate-1"> <span className="blc">Web designer &amp;
                                            </span><span className="cd-words-wrapper"><b
                                                    className="is-visible">Designer</b><b
                                                    className="is-hidden">Coder</b><b
                                                    className="is-hidden">Player</b></span></span></span>
                                </div>
                                <div className="elisc_tm_button transition_link"><a href="#portfolio">Got a
                                        project?</a></div>
                            </div>
                            <div className="right w-[60%]">
                                <div className="text w-full float-left mb-[44px]">
                                    <p className="mb-[30px]">Hello there! My name is <span
                                            className="text-yellow-color">Robert Elisc</span>. I am a web designer
                                        &amp; developer, and I&#x27;m very passionate and dedicated to my work.
                                    </p>
                                    <p>With 20 years experience as a professional a graphic designer, I have
                                        acquired the skills and knowledge necessary to make your project a
                                        success. I enjoy every step of the design process, from discussion and
                                        collaboration.</p>
                                </div>
                                <div className="info w-full float-left">
                                    <ul>
                                        <li className="mr-[40px] mb-[20px] inline-block"><span
                                                className="block uppercase underline">Age</span><span
                                                className="block font-inter font-bold text-dark-color">25</span>
                                        </li>
                                        <li className="mr-[40px] mb-[20px] inline-block"><span
                                                className="block uppercase underline">Born In</span><span
                                                className="block font-inter font-bold text-dark-color"><a
                                                    className="href_location" href="#">Florida, USA</a></span></li>
                                        <li className="mr-[40px] mb-[20px] inline-block"><span
                                                className="block uppercase underline">Mail</span><span
                                                className="block font-inter font-bold text-dark-color"><a
                                                    href="mailto:support@elisc.com">support@elisc.com</a></span>
                                        </li>
                                        <li className="mr-[40px] mb-[20px] inline-block"><span
                                                className="block uppercase underline">Phone</span><span
                                                className="block font-inter font-bold text-dark-color"><a
                                                    href="tel:+77 022 444 05 05">+77 022 444 05 05</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="elisc_tm_counter w-full float-left mb-[90px]">
                            <ul className="ml-[-30px]">
                                <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                    <div
                                        className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#D3F4EC]">
                                        <h3 className="text-[40px] mb-[7px]">10+</h3><span
                                            className="font-medium font-karla uppercase">Years of Experience</span>
                                    </div>
                                </li>
                                <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                    <div
                                        className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#FCE8D4]">
                                        <h3 className="text-[40px] mb-[7px]">50+</h3><span
                                            className="font-medium font-karla uppercase">Projects Completed</span>
                                    </div>
                                </li>
                                <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                                    <div
                                        className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#E3F9E0]">
                                        <h3 className="text-[40px] mb-[7px]">30+</h3><span
                                            className="font-medium font-karla uppercase">Happy Clients</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
                        <div
                            className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                            <div className="elisc_tm_title w-full float-left"><span
                                    className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                    Experience</span>
                                <h3 className="text-[40px] font-extrabold">Everything about me!</h3>
                            </div>
                            <div className="list w-full float-left mt-[40px]">
                                <ul className="ml-[-30px] flex flex-wrap">
                                    <li className="mb-[40px] pl-[30px] float-left w-1/2"><img className="popup_image"
                                            src="assets/img/experience/1.jpg" alt="image" />
                                        <div
                                            className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                            <div className="short w-full float-left flex justify-between mb-[16px]">
                                                <div className="job"><span
                                                        className="text-yellow-color font-medium inline-block mb-[4px]">2018
                                                        - Present</span>
                                                    <h3 className="text-[20px]">Web Developer</h3>
                                                </div>
                                                <div className="place"><span
                                                        className="font-medium font-inter">-Envato
                                                        Market</span></div>
                                            </div>
                                            <div className="text w-full float-left">
                                                <p className="opacity-[0.7]">Website development is the process of
                                                    building, programming, coding and maintaining websites and
                                                    web applications.</p>
                                            </div><a className="elisc_tm_full_link absolute inset-0 z-[5]"
                                                href="#"></a>
                                        </div>
                                    </li>
                                    <li className="mb-[40px] pl-[30px] float-left w-1/2"><img className="popup_image"
                                            src="assets/img/experience/1.jpg" alt="image" />
                                        <div
                                            className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                            <div className="short w-full float-left flex justify-between mb-[16px]">
                                                <div className="job"><span
                                                        className="text-yellow-color font-medium inline-block mb-[4px]">2016
                                                        - 2018</span>
                                                    <h3 className="text-[20px]">ABC Studio</h3>
                                                </div>
                                                <div className="place"><span
                                                        className="font-medium font-inter">-Senior
                                                        Designer</span></div>
                                            </div>
                                            <div className="text w-full float-left">
                                                <p className="opacity-[0.7]">Website development is the process of
                                                    building, programming, coding and maintaining websites and
                                                    web applications.</p>
                                            </div><a className="elisc_tm_full_link absolute inset-0 z-[5]"
                                                href="#"></a>
                                        </div>
                                    </li>
                                    <li className="mb-[40px] pl-[30px] float-left w-1/2"><img className="popup_image"
                                            src="assets/img/experience/1.jpg" alt="image" />
                                        <div
                                            className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                            <div className="short w-full float-left flex justify-between mb-[16px]">
                                                <div className="job"><span
                                                        className="text-yellow-color font-medium inline-block mb-[4px]">-2015
                                                        - 2016</span>
                                                    <h3 className="text-[20px]">Colorlib</h3>
                                                </div>
                                                <div className="place"><span
                                                        className="font-medium font-inter">-UX
                                                        Designer</span></div>
                                            </div>
                                            <div className="text w-full float-left">
                                                <p className="opacity-[0.7]">Website development is the process of
                                                    building, programming, coding and maintaining websites and
                                                    web applications.</p>
                                            </div><a className="elisc_tm_full_link absolute inset-0 z-[5]"
                                                href="#"></a>
                                        </div>
                                    </li>
                                    <li className="mb-[40px] pl-[30px] float-left w-1/2"><img className="popup_image"
                                            src="assets/img/experience/1.jpg" alt="image" />
                                        <div
                                            className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                                            <div className="short w-full float-left flex justify-between mb-[16px]">
                                                <div className="job"><span
                                                        className="text-yellow-color font-medium inline-block mb-[4px]">-2013
                                                        - 2015</span>
                                                    <h3 className="text-[20px]">Vivaco Corp.</h3>
                                                </div>
                                                <div className="place"><span
                                                        className="font-medium font-inter">-Freelancer</span>
                                                </div>
                                            </div>
                                            <div className="text w-full float-left">
                                                <p className="opacity-[0.7]">Website development is the process of
                                                    building, programming, coding and maintaining websites and
                                                    web applications.</p>
                                            </div><a className="elisc_tm_full_link absolute inset-0 z-[5]"
                                                href="#"></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="service" className="elisc_tm_section ">
                <div className="elisc_tm_services w-full float-left pt-[110px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="elisc_tm_service_title w-full float-left flex justify-between items-end">
                            <div className="elisc_tm_title w-auto float-left"><span
                                    className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                    Services</span>
                                <h3 className="text-[40px] font-extrabold">My Services</h3>
                            </div><a href="mailto:support@elisc.com">support@elisc.com</a>
                        </div>
                        <div className="service_list w-full float-left mt-[40px] mb-[50px]">
                            <ul className="ml-[-30px] flex flex-wrap">
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/1.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">01</span>
                                                <h3 className="text-[20px]">Web Design</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/2.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">02</span>
                                                <h3 className="text-[20px]">Content Writing</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/3.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">03</span>
                                                <h3 className="text-[20px]">Brand Identity</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/4.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">04</span>
                                                <h3 className="text-[20px]">Live Chat</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/1.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">05</span>
                                                <h3 className="text-[20px]">After Effects</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                                <li className="mb-[30px] pl-[30px] w-1/3 float-left"><img className="popup_image"
                                        src="assets/img/service/2.jpg" alt="image" />
                                    <div
                                        className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                                        <div className="details w-full float-left relative z-[1]">
                                            <div className="title w-full float-left mb-[13px]"><span
                                                    className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">06</span>
                                                <h3 className="text-[20px]">Mobile App</h3>
                                            </div>
                                            <div className="text w-full float-left mb-[25px]">
                                                <p className="text-[#55527C] opacity-[0.7]">Web development is the
                                                    process of building, programming...</p>
                                            </div>
                                            <div className="elisc_tm_read_more"><a href="#">Read More<span
                                                        className="inline-block"><img className="svg"
                                                            src="assets/img/svg/rightArrow.svg"
                                                            alt="image" /></span></a></div>
                                        </div><a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="elisc_tm_video w-full float-left relative mb-[120px] overflow-hidden rounded-[4px]">
                            <img className="placeholder min-w-full opacity-0 relative"
                                src="assets/img/thumbs/4-2.jpg" alt="image" />
                            <div className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                                data-img-url="assets/img/service/1.jpg"></div>
                            <div className="overlay absolute inset-0 bg-[rgba(0,0,0,.4)]"></div><span
                                className="play absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] w-[111px] h-[111px] bg-white rounded-full"><img
                                    className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px] h-[18px] ml-[2px]"
                                    src="assets/img/svg/play.svg" alt="image" /></span>
                            <div className="text absolute bottom-[16px] right-[16px] bg-white py-[20px] px-[30px]">
                                <h3 className="text-[#51586A] text-[17px] font-bold uppercase">Intro Video</h3>
                            </div><a className="elisc_tm_full_link absolute inset-0 z-5 popup-youtube"
                                href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio" className="elisc_tm_section ">
                <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
                            <div className="elisc_tm_title w-auto float-left"><span
                                    className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                    Projects</span>
                                <h3 className="text-[40px] font-extrabold">Recent completed works</h3>
                            </div>
                            <div className="buttons"><a className="prev_button" href="#"><img className="svg"
                                        src="assets/img/svg/prev.svg" alt="image" /></a><a className="next_button"
                                    href="#"><img className="svg" src="assets/img/svg/next.svg" alt="image" /></a>
                            </div>
                        </div>
                        <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
                            <div className="swiper gallery_zoom mb-[65px]">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="list_inner">
                                            <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                                                <img className="min-w-full relative opacity-0"
                                                    src="assets/img/thumbs/31-36.jpg" alt="image" />
                                                <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                    data-img-url="assets/img/portfolio/1.jpg"></div><a
                                                    className="elisc_tm_full_link popup-youtube absolute inset-0 z-[5]"
                                                    href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
                                            </div>
                                            <div className="details w-full float-left"><span
                                                    className="category inline-block mb-[7px]"><a
                                                        className="inline-block uppercase text-[#55527C] font-medium"
                                                        href="#">Youtube</a></span>
                                                <h3 className="title"><a
                                                        className="line_effect popup-youtube font-semibold text-[24px] text-[#130F49]"
                                                        href="https://www.youtube.com/watch?v=7e90gBu4pas">New
                                                        Technology</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="list_inner">
                                            <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                                                <img className="min-w-full relative opacity-0"
                                                    src="assets/img/thumbs/31-36.jpg" alt="image" />
                                                <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                    data-img-url="assets/img/portfolio/2.jpg"></div><a
                                                    className="elisc_tm_full_link popup-vimeo absolute inset-0 z-[5]"
                                                    href="https://vimeo.com/337293658"></a>
                                            </div>
                                            <div className="details w-full float-left"><span
                                                    className="category inline-block mb-[7px]"><a
                                                        href="#">Vimeo</a></span>
                                                <h3 className="title"><a className="line_effect popup-vimeo"
                                                        href="https://vimeo.com/337293658">Firogo Majestic
                                                        Ltd.</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="list_inner">
                                            <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                                                <img className="min-w-full relative opacity-0"
                                                    src="assets/img/thumbs/31-36.jpg" alt="image" />
                                                <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                    data-img-url="assets/img/portfolio/3.jpg"></div><a
                                                    className="elisc_tm_full_link soundcloude_link mfp-iframe audio absolute inset-0 z-[5]"
                                                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></a>
                                            </div>
                                            <div className="details w-full float-left"><span
                                                    className="category inline-block mb-[7px]"><a
                                                        href="#">Soundcloud</a></span>
                                                <h3 className="title"><a
                                                        className="line_effect soundcloude_link mfp-iframe audio"
                                                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true">Creative
                                                        Building</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="list_inner">
                                            <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                                                <img className="min-w-full relative opacity-0"
                                                    src="assets/img/thumbs/31-36.jpg" alt="image" />
                                                <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                                    data-img-url="assets/img/portfolio/4.jpg"></div><a
                                                    className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                                                    href="#"></a>
                                            </div>
                                            <div className="details w-full float-left"><span
                                                    className="category inline-block mb-[7px]"><a
                                                        href="#">Modalbox</a></span>
                                                <h3 className="title"><a className="line_effect portfolio_popup"
                                                        href="#">Beautiful Boat</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elisc_tm_button" data-position="center"><a href="#">View all
                                    projects</a></div>
                        </div>
                    </div>
                </div>
                <div className="elisc_tm_partners w-full float-left mb-[120px] py-0 px-[20px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="elisc_tm_title w-full float-left"><span
                                className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                Clients</span>
                            <h3 className="text-[40px] font-extrabold">Customers &amp; clients</h3>
                        </div>
                        <div
                            className="partners_inner w-full float-left clear-both overflow-hidden rounded-[10px] mt-[58px]">
                            <ul>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/1.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/2.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/3.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/4.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/5.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/6.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/7.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                                <li>
                                    <div className="list_inner"><img src="assets/img/partners/8.png"
                                            alt="client Image" /><a
                                            className="elisc_tm_full_link absolute inset-0 z-5" href="#"></a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="elisc_tm_testimonial_wrapper w-full float-left mb-[120px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div
                            className="elisc_tm_testimonials w-full float-left bg-[#FFF5F6] pt-[100px] pr-[150px] pb-[105px] pl-[100px] small:px-[40px]">
                            <div className="elisc_tm_title w-full float-left text-center"><span
                                    className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                    Testimonial</span>
                                <h3 className="text-[40px] font-extrabold">What client&#x27;s say?</h3>
                            </div>
                            <div className="testimonials_list w-full float-left text-center mt-[43px]">
                                <div className="swiper owl-carousel owl-theme">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="text mb-[33px]">
                                                <p className="text-[24px] leading-[40px] font-inter">I rarely like
                                                    to write reviews, but the Marketify team truly deserve a
                                                    standing ovation for their customer support, customisation
                                                    and most importantly, friendliness and professionalism.</p>
                                            </div>
                                            <div className="short w-auto flex items-center justify-center mb-[5px]">
                                                <div className="image relative w-[60px] h-[60px] rounded-full">
                                                    <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                                                        data-img-url="assets/img/testimonials/1.jpg"></div>
                                                </div>
                                                <div className="detail text-left pl-[18px]">
                                                    <h3 className="text-[30px] font-medium">John Doe</h3>
                                                </div>
                                            </div>
                                            <p className="job text-center">User Interface Design at PCL Lab</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="text mb-[33px]">
                                                <p className="text-[24px] leading-[40px] font-inter">Really the Code
                                                    Quality, Customer Support, and design are awesome and its
                                                    good support they are giving. They give an instant solution
                                                    to our needs. Really awesome. I will strongly recommend to
                                                    my friends.</p>
                                            </div>
                                            <div className="short w-auto flex items-center justify-center mb-[5px]">
                                                <div className="image relative w-[60px] h-[60px] rounded-full">
                                                    <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                                                        data-img-url="assets/img/testimonials/2.jpg"></div>
                                                </div>
                                                <div className="detail text-left pl-[18px]">
                                                    <h3 className="text-[30px] font-medium">Keita Smith</h3>
                                                </div>
                                            </div>
                                            <p className="job text-center">Senior Designer at Behance</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="text mb-[33px]">
                                                <p className="text-[24px] leading-[40px] font-inter">Loved the
                                                    template design, documentation, customizability and the
                                                    customer support from Marketify team! I am a noob in
                                                    programming but the Marketify team helped me successfully.
                                                </p>
                                            </div>
                                            <div className="short w-auto flex items-center justify-center mb-[5px]">
                                                <div className="image relative w-[60px] h-[60px] rounded-full">
                                                    <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                                                        data-img-url="assets/img/testimonials/3.jpg"></div>
                                                </div>
                                                <div className="detail text-left pl-[18px]">
                                                    <h3 className="text-[30px] font-medium">Alan Walker</h3>
                                                </div>
                                            </div>
                                            <p className="job text-center">Sales Manager at Vivaco Shop</p>
                                        </div>
                                    </div>
                                    <div className="owl-dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blogs" className="elisc_tm_section ">
                <div className="elisc_tm_news fn_w_sminiboxes w-full float-left py-[120px] px-0">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="wrapper w-full flex justify-between">
                            <div className="left fn_w_sminibox w-1/3 pr-[50px]">
                                <div className="elisc_tm_sticky_section">
                                    <div className="elisc_tm_title w-full float-left"><span
                                            className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                            Blog</span>
                                        <h3 className="text-[40px] font-extrabold">My blog &amp; news</h3>
                                    </div>
                                    <div className="elisc_tm_button transition_link mt-[45px]"><a
                                            href="#contact">Get in touch</a></div>
                                </div>
                            </div>
                            <div className="right fn_w_sminibox w-[66.6666%] pl-[50px]">
                                <div className="elisc_tm_sticky_section">
                                    <div className="list w-full float-left relative">
                                        <ul>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/1.jpg"><img className="popup_image"
                                                    src="assets/img/news/1.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">12 unique examples of portfolio
                                                                    websites</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/2.jpg"><img className="popup_image"
                                                    src="assets/img/news/2.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">Dealing with spring allergy
                                                                    symptoms</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/3.jpg"><img className="popup_image"
                                                    src="assets/img/news/3.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">Why we should read fewer books</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/4.jpg"><img className="popup_image"
                                                    src="assets/img/news/4.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">How to use python for web
                                                                    scraping</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/5.jpg"><img className="popup_image"
                                                    src="assets/img/news/5.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">Skills and tools for efficient web
                                                                    design</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/6.jpg"><img className="popup_image"
                                                    src="assets/img/news/6.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">Best wireframe tools for web
                                                                    designers</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                            <li className="mb-[40px] w-full float-left"
                                                data-img="assets/img/news/7.jpg"><img className="popup_image"
                                                    src="assets/img/news/7.jpg" alt="Blog Image" />
                                                <div
                                                    className="list_inner w-full float-left relative flex items-center justify-between">
                                                    <div className="info w-1/2">
                                                        <div
                                                            className="meta w-full float-left flex items-center mb-[12px]">
                                                            <img className="svg w-[18px] h-[18px]"
                                                                src="assets/img/svg/calendar.svg" alt="image" />
                                                            <span className="font-medium pl-[8px]">April 12,
                                                                2023</span></div>
                                                        <div className="title w-full float-left">
                                                            <h3
                                                                className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                                                <a href="#">Why we’re crazy about animations</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="elisc_tm_read_more w-auto"><a
                                                            className="line_effect" href="#">Learn More<span
                                                                className="inline-block"><img className="svg"
                                                                    src="assets/img/svg/rightArrow.svg"
                                                                    alt="image" /></span></a></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="elisc_tm_section ">
                <div className="elisc_tm_contact w-full min-h-[100vh] float-left bg-[#E9F9FF] pt-[120px]">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                        <div className="wrapper w-full float-left flex">
                            <div className="left w-1/2 pr-[50px]">
                                <div className="elisc_tm_title w-full float-left"><span
                                        className="w-full float-left font-medium uppercase inline-block mb-[12px]">-
                                        Let&#x27;s Connect</span>
                                    <h3 className="text-[40px] font-extrabold">Get in touch</h3>
                                </div>
                                <div className="text w-full float-left mt-[20px] mb-[40px]">
                                    <p>I&#x27;m currently avaliable to take on new projects, so feel free to
                                        send me a message about anything that you want to run past me. You can
                                        contact anytime at 24/7</p>
                                </div>
                                <div className="info w-full float-left">
                                    <ul>
                                        <li className="mb-[8px] w-full float-left"><a
                                                className="text-dark-color font-semibold font-inter inline-block relative"
                                                href="tel:+77 022 444 05 05">+77 022 444 05 05</a></li>
                                        <li className="mb-[8px] w-full float-left"><a
                                                className="text-dark-color font-semibold font-inter inline-block relative"
                                                href="tel:+77 022 444 05 05">support@elisc.com</a></li>
                                        <li className="w-full float-left"><a
                                                className="href_location text-dark-color font-semibold font-inter inline-block relative"
                                                href="#">Ave Street Avenue, New York</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right w-1/2 pl-[50px]">
                                <div className="fields w-full float-left h-auto clear-both">
                                    <form className="contact_form" id="contact_form">
                                        <div className="returnmessage"
                                            data-success="Your message has been received, We will contact you soon.">
                                        </div>
                                        <div className="returnmessage" ><span>Your message has
                                                been received, We will contact you soon.</span></div>
                                        <div className="first w-full float-left">
                                            <ul>
                                                <li className="w-full mb-[25px] float-left"><input id="name"
                                                        type="text" placeholder="Enter your name"
                                                        autoComplete="off" name="name"  /></li>
                                                <li className="w-full mb-[25px] float-left"><input id="email"
                                                        type="text" placeholder="Your email" autoComplete="off"
                                                        name="email"  /></li>
                                            </ul>
                                        </div>
                                        <div className="last"><textarea id="message"
                                                placeholder="Write something..." name="message"></textarea>
                                        </div>
                                        <div className="elisc_tm_button"><input type="submit" value="Submit now" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="elisc_tm_map w-full float-left mt-[100px] mb-[120px]">
                            <div className="mapouter">
                                <div className="gmap_canvas"><iframe width="100%" height="375" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0"
                                        marginWidth="0"></iframe><a
                                        href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"></a><br />
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mouse-cursor cursor-outer"></div>
    <div className="mouse-cursor cursor-inner"></div>
</div>
  );
}

export default App;
