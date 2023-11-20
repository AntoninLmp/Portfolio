import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../index.css';
import './css/Home.css';

import Logo_Weldom_2012 from '../../public/Logo_Weldom_2012.png';

function MainContent() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const threshold = 200;
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
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#18C3A1" fill-opacity="1"
                          d="M0,160L34.3,181.3C68.6,203,137,245,206,250.7C274.3,256,343,224,411,186.7C480,149,549,107,617,80C685.7,53,754,43,823,42.7C891.4,43,960,53,1029,69.3C1097.1,85,1166,107,1234,138.7C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                <section className={'flex flex_column justify-evenly bg_green'}>
                    <div className={'w-full h-full mb_4'}>
                        <div>
                            <h1 className='titleHomeBlock c_green titlePrimary1'>Mes Projet</h1>
                            <h2 className='text_secondary'>Développement de plusieurs projets au cours de mes
                                études...</h2>
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

                    {/*<div className='w_100 h_100 mb_4'>
                    <div>
                        <h1 className='titleHomeBlock c_green titlePrimary1'>Mon Parcours professionel</h1>
                        <h2 className='text_secondary'>Mes experiences dans le monde du travail ...</h2>
                    </div>
                    <Link to={"/parcoursProfessionnel"}>
                        <article className='bg_img bg_pro border_rad w_100 h_70'></article>
                    </Link>
                </div>*/}
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#18C3A1" fill-opacity="1"
                          d="M0,128L34.3,154.7C68.6,181,137,235,206,256C274.3,277,343,267,411,266.7C480,267,549,277,617,245.3C685.7,213,754,139,823,106.7C891.4,75,960,85,1029,106.7C1097.1,128,1166,160,1234,160C1302.9,160,1371,128,1406,112L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </section>

            <section className={'flex flex_column justify_e mx_20'}>
                <article className={'w-full h-full mb-5'}>
                    <h1 className='titlePrimary2'>À propos</h1>
                    <p className='description'>
                        Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création de
                        projets innovants. Mon interêt pour le développement informatique va de pair avec ma passion
                        pour la collaboration au sein d'une équipe. J'adore concevoir des solutions novatrices en mettant
                        en commun nos idées et compétences. Je ne suis pas que développer, je suis aussi pleins
                        d'autres choses ...
                    </p>
                </article>
                <article className={'w-full h-full flex mb-8'}>
                    <div className='mr-5e'>
                        <h1 className='titlePrimary3'>Mes études</h1>
                        <p className='description'>
                            J'ai commencé par aller à l'université après mon Bac scientifique. J'avais choisi de faire
                            une double licence biologie et informatique, cependant après quelques mois je me suis rendu
                            compte que la biologie n'était pas un domaine qui me plaisait contrairement à l'informatique.
                            Puis l'occasion de rejoindre une école d'ingénieur s'est présenté à moi alors je l'ai saisi ...
                        </p>
                    </div>
                    <div>
                        <h1 className='titlePrimary3'>Mes hobies</h1>
                        <p className='description'>
                            J'occupe mon temps libre avec quelques unes de mes passions. Tout d'abord le scoutisme,
                            j'encandre des jeunes en tant que Chef scouts et guides de
                            France, ce qui me fait vivre avec la nature. J'aime aussi beaucoup le vtt, les sorties en
                            forêt sont pour moi ressoursante...
                        </p>
                    </div>
                </article>
                <div className={'hover:scale-150 transform transform-'}>
                    <Link to={"/AntoninLampin"}>
                        <a className={'btn_seeMore'}>En savoir +</a>
                    </Link>
                </div>
            </section>
            <section className='font_raleway mx_20 padding_1 align_center titleHomeBlock titlePrimary3'>
                <p id='p_homepage'>Ils m'ont fait confiance alors pourquoi pas vous : </p>
                <div className='d_flex align_center flex_wrap justify_c'>
                    <img src='https://companieslogo.com/img/orig/HO.PA_BIG.D-64886ede.png?t=1646248987'
                         alt='Thales Logo' className='img_logo_entreprise'/>
                    <img src='https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png'
                         alt='Restalliance Logo' className='img_logo_entreprise'/>
                    <img src='https://cdn.pixabay.com/photo/2021/09/22/17/17/mcdonalds-6647433_960_720.png'
                         alt='Macdonald Logo' id='mcdonald'/>
                    <img src={Logo_Weldom_2012} alt='Weldom Logo' className='img_logo_entreprise'/>
                </div>

            </section>
        </div>
    );
}

export default MainContent;