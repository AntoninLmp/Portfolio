import React from "react";
import { Outlet } from "react-router-dom";
import './css/Home.css';
import '../index.css';
import HeaderHomePage from './HeaderHomePage.jsx';
import MainContent from './MainContent.jsx';
import Navbar from '../Global/Navbar.jsx';
import Footer from "../Global/Footer.jsx";


const MainPage = () => {
    return (
        <>
            <div>
                <div className="fullscreen">
                    <section>
                        <div className="nameBase" id="FirstLastName">Antonin lampin</div>
                        <div className="nameBase" id="DescriptionName">Software engineer</div>
                    </section>
                    <header className='d_flex h_100'> 
                        <Navbar></Navbar>
                        <HeaderHomePage></HeaderHomePage>
                    </header>
                </div>
                <main>
                    <MainContent></MainContent>
                </main>
                <Footer></Footer>
            </div>
            <Outlet />
        </>
    );
};

export default MainPage;