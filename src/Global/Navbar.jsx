import { useState } from "react";
import { Link } from 'react-router-dom';
import '../index.css';

function Menu() {
    let menuOpen, setMenuOpen;
    [menuOpen, setMenuOpen] = useState(false);
    let transitionMenu, setTransitionMenu;
    [transitionMenu, setTransitionMenu] = useState(null);

    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {setTransitionMenu('list_item')}
      };

    return (
        <nav className='Navbar'>
            <div className="d_flex mx-1e">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" onClick={toggleMenu}/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
                <p className="text_menu">Menu</p>
            </div>

            {/* Afficher les liens si le menu est ouvert */}
            <nav>
                { menuOpen ? (
                    <ul className="list_display">
                        <li className={transitionMenu}>
                            <Link to={"/Home"} className="c_green">Home</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/AntoninLampin"} className={"text-black"}>Moi</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Studies"} className="c_green">Etudes</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Project"} className={"text-black"}>Projet</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/parcoursProfessionnel"} className="c_green">Parcours pro.</Link>
                        </li>
                    </ul>
                ) : null }
            </nav>
        </nav>
    )
}

export default Menu;
