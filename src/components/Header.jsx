import '../index.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ backgroundColor = "#ffffff" }) {

    return (
        <>
            <nav className={`flex justify-between font-roboto font-medium italic items-start pt-6 ${backgroundColor}`}>
                <Link to={"/Home"} className={"m-5 ml-[10%] text-black c_green lg:text-3xl"}>Antonin Lampin</Link>
                <ul className={"md:flex mr-12 text-right"}>
                    <li className={"md:m-6 transform transition-transform hover:scale-150 pb-2"}>
                        <Link to={"/AntoninLampin"} className={"text-black hover:text-green-400 text-xs lg:text-base"}>Moi</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform hover:scale-150 pb-2"}>
                        <Link to={"/Studies"} className={"text-black hover:text-green-400 text-xs lg:text-base"}>Mes études</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform hover:scale-150 pb-2"}>
                        <Link to={"/Projects"} className={"text-black hover:text-green-400 text-xs lg:text-base"}>Mes projets</Link>
                    </li>
                    <li className={"md:m-6 transform transition-transform hover:scale-150 pb-2"}>
                        <Link to={"/parcoursProfessionnel"} className={"text-black hover:text-green-400 text-xs lg:text-base"}>Parcours
                            pro.</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header