import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Global/index.css';
import './css/Home.css';

import Logo_Weldom_2012 from '../../public/Logo_Weldom_2012.png';

function HomePage() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const threshold = 200; // ajuste cette valeur selon tes besoins

        setIsVisible(scrolled > threshold);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='font_raleway'>
            <div>
                <section className='d_flex flex_column justify_e mx_20 mb_4'>
                    <div className='w_100 h_100 mb_4'>
                        <div>
                            <h1 className='titleHomeBlock c_green titlePrimary1'>Mes Projet</h1>
                            <h2 className='text_secondary'>Développement de plusieurs projets au cours de mes études...</h2>
                        </div>
                        <Link to={"/Project"}>
                            {/* <img
                                src={projectImage}
                                alt='Project images'
                                className={`img_logo_entreprise ${isVisible ? 'visible' : ''}`}
                            /> */}
                            <article className='bg_img bg_projet border_rad w_100 h_70'></article>
                        </Link>
                    </div>
                    <div className='w_100 h_100 mb_4'>
                        <div>
                            <h1 className='titleHomeBlock c_green titlePrimary1'>Mon Parcours professionel</h1>
                            <h2 className='text_secondary'>Mes experiences dans le monde du travail ...</h2>
                        </div>
                        <Link to={"/parcoursProfessionnel"}>
                            <article className='bg_img bg_pro border_rad w_100 h_70'></article>
                        </Link>
                    </div>
                </section>
                <section className='d_flex flex_column justify_e mx_20'>
                    <article className='w_100 h_100'>
                        <h1 className='titlePrimary2'>À propos</h1>
                        <p className='description'>
                            Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création de projets innovants. Mon interêt pour le développement 
                            informatique va de pair avec ma passion pour la collaboration au sein d'une équipe. J'adore concevoir des solutions novatrices en mettant en commun 
                            nos idées et compétences. Je ne suis pas que développer, je suis aussi pleins d'autres choses ...
                        </p>
                    </article>
                    <article className='w_100 h_100 d_flex'>
                        <div className='mr-5e'>
                            <h1 className='titlePrimary3'>Mes études</h1> 
                            <p className='description'>
                                J'ai commencé par aller à l'université après mon Bac scientifique. J'avais choisi de faire une double licence biologie et informatique, 
                                cependant après quelques mois je me suis rendu compte que la biologie n'était pas un domaine qui me plaisait contrairement à l'informatique. Puis 
                                l'occasion de rejoindre une école d'ingénieur s'est présenté à moi alors je l'ai saisi ... 
                            </p>
                        </div>
                        <div>
                            <h1 className='titlePrimary3'>Mes hobies</h1>
                            <p className='description'>
                                J'occupe mon temps libre avec quelques unes de mes passions. Tout d'abord le scoutisme, j'encandre des jeunes en tant que Chef scouts et guides de 
                                France, ce qui me fait vivre avec la nature. J'aime aussi beaucoup le vtt, les sorties en forêt sont pour moi ressoursante...  
                            </p>
                        </div>
                    </article>
                    <Link to={"/AntoninLampin"}>
                        <a className='btn_seeMore'>En savoir +</a>
                    </Link>
                </section>
            </div>
            <section className='font_raleway mx_20 padding_1 align_center titleHomeBlock titlePrimary3'>
                <p id='p_homepage'>Ils m'ont fait confiance alors pourquoi pas vous : </p>
                <div className='d_flex align_center flex_wrap justify_c'>
                    <img src='https://companieslogo.com/img/orig/HO.PA_BIG.D-64886ede.png?t=1646248987' alt='Thales Logo' className='img_logo_entreprise' />
                    <img src='https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png' alt='Restalliance Logo' className='img_logo_entreprise' />
                    <img src='https://cdn.pixabay.com/photo/2021/09/22/17/17/mcdonalds-6647433_960_720.png' alt='Macdonald Logo' id='mcdonald' />
                    <img src={Logo_Weldom_2012} alt='Weldom Logo' className='img_logo_entreprise' />
                </div>
                
            </section>            
        </div >
    );
}

export default HomePage; 