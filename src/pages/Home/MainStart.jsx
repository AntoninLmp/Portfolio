import {useEffect, useState} from 'react';

import HeaderHomePage from './HeaderHomePage.jsx';
import StartName from './Starter.jsx';
import Header from "../../components/Header.jsx";
import '../../index.css';


const MainPage = () => {

    const [Home, setHome] = useState('h-screen');
    const [Main, setMain] = useState('d_none');

    setTimeout(() => {
        setHome('d_none');
        setMain('h-screen overflow-hidden');
    }, 6100);
    useEffect(() => {
        // Applying on mount
        document.body.style.overflow = "hidden";
        // Applying on unmount
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [])
    return (
        <>
            <div className={Home}>
                {<StartName />}
            </div>
            <div className={Main}>
                <Header />
                <header className={'flex h-full'}>
                    <HeaderHomePage />
                </header>
            </div>
        </>
    );
};

export default MainPage;