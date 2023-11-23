import React from "react";
import { Outlet } from "react-router-dom";
import './css/Home.css';
import '../index.css';
import HeaderHomePage from './HeaderHomePage.jsx';
import MainContent from './MainContent.jsx';
import Header from "../Global/Header.jsx";
import Footer from "../Global/Footer.jsx";


const MainPage = () => {
    return (
        <>
            <div>
                <div>
                    <Header></Header>
                    <header className={'flex h-full'}>
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