import '../index.css'
import {Link} from "react-router-dom";

function Header (){
    return (
        <>
            {/*<div className="nameBase" id="FirstLastName">Antonin lampin</div>
            <div className="nameBase" id="DescriptionName">Software engineer</div>*/}
            <nav className={"flex justify-between font-roboto font-medium italic items-center mt-4"}>
                <a href="#" className={"m-5 ml-20 text-black c_green text-3xl"}>Antonin Lampin</a>
                <ul className={"flex mr-12"}>
                    <li className={"m-6 transform transition-transform hover:scale-150"}>
                        <Link to={"/Home"} className={"text-black hover:text-green-400"}>Home</Link>
                    </li>
                    <li className={"m-6 transform transition-transform hover:scale-150"}>
                        <Link to={"/AntoninLampin"} className={"text-black hover:text-green-400 "}>Moi</Link>
                    </li>
                    <li className={"m-6 transform transition-transform hover:scale-150"}>
                        <Link to={"/Studies"} className={"text-black hover:text-green-400"}>Mes études</Link>
                    </li>
                    <li className={"m-6 transform transition-transform hover:scale-150"}>
                        <Link to={"/Project"} className={"text-black hover:text-green-400"}>Mes projets</Link>
                    </li>
                    <li className={"m-6 transform transition-transform hover:scale-150"}>
                        <Link to={"/parcoursProfessionnel"} className={"text-black hover:text-green-400"}>Parcours pro.</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Header