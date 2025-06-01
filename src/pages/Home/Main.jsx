import '../../index.css';

import HeaderHomePage from './HeaderHomePage.jsx';
import Header from "../../components/Header.jsx";
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
        <div className="h-screen">
            <Header />
            <div className={'flex h-full '}>
                <HeaderHomePage />
            </div>
        </div>
    );
};

export default MainPage;