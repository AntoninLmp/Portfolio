import '../index.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ backgroundColor = "#ffffff" }) {

    return (
        <>
            <nav className={`flex justify-between font-display font-medium items-start pt-6 font-Poppins ${backgroundColor}`}>
                <Link to={"/Home"} className={"m-5 ml-[10%] text-primary-green lg:text-3xl font-bold hover-primary-green"}>Antonin Lampin</Link>
                <ul className={"md:flex mr-12 text-right"}>
                    <li className={"md:m-6 transform transition-transform pb-2"}>
                        <Link to={"/AntoninLampin"} className={"text-black transition-smooth hover:text-primary-green lg:text-base"}>A propos</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform pb-2"}>
                        <Link to={"/Studies"} className={"text-black transition-smooth hover:text-primary-green lg:text-base"}>Etudes</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform pb-2"}>
                        <Link to={"/Projects"} className={"text-black transition-smooth hover:text-primary-green lg:text-base"}>Projets</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform pb-2"}>
                        <Link to={"/parcoursProfessionnel"} className={"text-black transition-smooth hover:text-primary-green lg:text-base"}>Parcours</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header