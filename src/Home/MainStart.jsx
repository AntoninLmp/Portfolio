import { useState } from 'react';
import { Outlet } from "react-router-dom";

import HeaderHomePage from './HeaderHomePage.jsx';
import MainContent from './MainContent.jsx';
import StartName from './Starter.jsx';
import Footer from "../Global/Footer.jsx";
import Header from "../Global/Header";

import '../index.css';


const MainPage = () => {

    const [Home, setHome] = useState('d_content');
    const [Main, setMain] = useState('d_none');

    setTimeout(() => {
        setHome('d_none');
        setMain('d_content'); 
    }, 6100);

    return (
        <>
            <div className={Home}>
                {<StartName></StartName>}
            </div>
            <div className={Main}>
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