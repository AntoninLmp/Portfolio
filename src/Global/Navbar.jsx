import { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); 
    const [transitionMenu, setTransitionMenu] = useState(null)

    
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
                            <Link to={"/AntoninLampin"} className="c_white">Moi</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Studies"} className="c_green">Etudes</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Project"} className="c_white">Projet</Link>
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

export default Navbar;
