import './css/Home.css';
import '../index.css';

import HeaderHomePage from './HeaderHomePage.jsx';
import Header from "../components/Header.jsx";
import {useEffect} from "react";


const MainPage = () => {
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
            <Header />
            <header className={'flex h-full '}>
                <HeaderHomePage />
            </header>
        </>
    );
};

export default MainPage;