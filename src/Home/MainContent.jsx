import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../index.css';
import './css/Home.css';

import img_ordo from '../../public/ordonnancement.png';
import ProjectExample from "./ProjectExample.jsx";

function MainContent() {
    // const [isVisible, setIsVisible] = useState(false);
    const [CButton, setCButton] = useState(true);
    const [JavaButton, setJavaButton] = useState(false);
    const [PythonButton, setPythonButton] = useState(false);
    const [WebButton, setWebButton] = useState(false);
    const [NetButton, setNetButton] = useState(false);
    const [ReactButton, setReactButton] = useState(false);

    const toggleCButton = () => {
        setJavaButton(false);
        setPythonButton(false);
        setWebButton(false);
        setNetButton(false);
        setReactButton(false);
        !CButton ? setCButton(!CButton) : null;
    };
    const toggleJavaButton = () => {
        setCButton(false);
        setPythonButton(false);
        setWebButton(false);
        setNetButton(false);
        setReactButton(false);
        !JavaButton ? setJavaButton(!JavaButton) : null;
    };
    const togglePythonButton = () => {
        setCButton(false);
        setJavaButton(false);
        setWebButton(false);
        setNetButton(false);
        setReactButton(false);
        !PythonButton ? setPythonButton(!PythonButton) : null;
    };
    const toogleWebButton = () => {
        setCButton(false);
        setJavaButton(false);
        setPythonButton(false);
        setNetButton(false);
        setReactButton(false);
        !WebButton ? setWebButton(!WebButton) : null;
    }
    const toogleNetButton = () => {
        setCButton(false);
        setJavaButton(false);
        setPythonButton(false);
        setWebButton(false);
        setReactButton(false);
        !NetButton ? setNetButton(!NetButton) : null;
    }
    const toogleReactButton = () => {
        setCButton(false);
        setJavaButton(false);
        setPythonButton(false);
        setWebButton(false);
        setNetButton(false);
        !ReactButton ? setReactButton(!ReactButton) : null;
    }

    return (
        <div className='font_raleway'>
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path transform="translate(0 1 )" fill="#18C3A1"
                          d="M0,160L34.3,181.3C68.6,203,137,245,206,250.7C274.3,256,343,224,411,186.7C480,149,549,107,617,80C685.7,53,754,43,823,42.7C891.4,43,960,53,1029,69.3C1097.1,85,1166,107,1234,138.7C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                <section className={'bg_green'}>
                    <article className={'w-full h-full text-center'}>
                        <h1 className={'text-white mb-5 titlePrimary1 font-medium'}>Mes Projets</h1>
                        {/*<h2 className={'text-white text_secondary'}>Développement de plusieurs projets au cours de mes
                            études...</h2>*/}
                        <section>
                            <section className={'flex justify justify-evenly font-light italic mx-48'}>
                                <button className={'flex flex-col items-center'} onClick={toggleCButton}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/280px-C_Programming_Language.svg.png"
                                        className={'img_language mb-5'}/>
                                    <p>C</p>
                                </button>
                                <button className={'flex flex-col items-center'} onClick={toggleJavaButton}>
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                                        className={'img_language mb-5'}/>
                                    <p>Java</p>
                                </button>
                                <button className={'flex flex-col items-center'} onClick={togglePythonButton}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                                        className={'img_language mb-5'}/>
                                    <p>Python</p>
                                </button>
                                <button className={'flex flex-col items-center'} onClick={toogleWebButton}>
                                    <img src="https://www.shareicon.net/data/2016/09/09/827488_browser_512x512.png"
                                         className={'img_language mb-5'}/>
                                    <p>Html, Css<br/> & JS</p>
                                </button>
                                <button className={'flex flex-col items-center'} onClick={toogleNetButton}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
                                        className={'img_language mb-5'}/>
                                    <p>C# & .NET</p>
                                </button>
                                <button className={'flex flex-col items-center'} onClick={toogleReactButton}>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                         className={'img_language mb-5'}/>
                                    <p>React</p>
                                </button>
                                <Link to={"/Projects"}>
                                    <button className={'flex flex-col items-center'}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/57/57013.png"
                                             className={'img_language mb-5'}/>
                                        <p>Other</p>
                                    </button>
                                </Link>

                            </section>
                            <section>
                                <section className={'mx-72 text-left bg-amber-50 rounded-2xl'}>
                                    <div className={'bg-black rounded-t-2xl flex p-2 h-auto'}>
                                        <div className={'h-5 w-5 bg-red-600 mx-3 rounded-full'}></div>
                                        <div className={'h-5 w-5 bg-yellow-300 mx-3 rounded-full'}></div>
                                        <div className={'h-5 w-5 bg-green-600 mx-3 rounded-full'}></div>
                                    </div>
                                    {/* =============================== Projets ===================================*/}

                                    {CButton ? (
                                        <ProjectExample
                                            projectName={"Algorithme de Huffman"}
                                            imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Huffman_tree_2.svg/1200px-Huffman_tree_2.svg.png"}
                                            pContent={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                L'algorithme de Huffman est un <span
                                                className={'c_pink italic font-normal'}>algorithme de compression de données</span> qui
                                                permet de compresser des fichiers en attribuant des codes de
                                                longueur variable aux symboles en fonction de leur fréquence
                                                d'apparition dans le fichier. Il a été développé par David A.
                                                Huffman en 1952. Le principe de base de l'algorithme de Huffman
                                                repose sur l'idée de représenter les symboles les plus fréquents
                                                avec des codes plus courts et les symboles moins fréquents avec des
                                                codes plus longs. Cela permet d'optimiser la taille du fichier
                                                compressé, car les symboles fréquents sont représentés de manière
                                                plus compacte.
                                            </p>}
                                        />
                                    ) : null}
                                    {JavaButton ? (
                                        <ProjectExample
                                            projectName={'Projet Automate'}
                                            imageSrc={"https://gallium.inria.fr/~maranget/X/421/poly/poly119.png"}
                                            pContent={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                Le projet Automates finis et Expressions rationnelles consiste en <span
                                                className={'c_yellow italic font-normal'}> la conception et implémentation
                                                d'un programme en Java permettant le traitement d'automates finis</span>.
                                                Les principales étapes incluent la lecture d'un automate depuis un
                                                fichier, l'affichage de l'automate, la déterminisation, la complétion,
                                                la minimisation, la reconnaissance de mots, la construction de
                                                l'automate du langage complémentaire, et la standardisation. Le
                                                programme doit également être capable de gérer plusieurs automates. Nous
                                                avons essayer de d'allier le bon fonctionnement du programme, la qualité
                                                de l'interface, la clarté des structures de données, la lisibilité du
                                                code.
                                            </p>}
                                            githubLink={"https://github.com/AntoninLmp/Projet_Automate"}
                                        />
                                    ) : null}
                                    {PythonButton ? (
                                        <ProjectExample
                                            projectName={"Algorithme d'ordonnancement"}
                                            imageSrc={img_ordo}
                                            pContent={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                L'algorithme de Huffman est un <span
                                                className={'c_green italic font-normal'}>algorithme de compression de données</span> qui
                                                permet de compresser des fichiers en attribuant des codes de
                                                longueur
                                            </p>}
                                            githubLink={"https://github.com/AntoninLmp/Algorithme_Ordonnancement"}
                                        />
                                    ) : null}
                                    {WebButton ? (
                                        <ProjectExample
                                            projectName={"Developement de plusieurs sites"}
                                            imageSrc={"https://www.devwerkz.com/wp-content/uploads/2020/01/DevWerkz_Web-design-and-development_01-Main-illust.png"}
                                            pContent={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                J'ai eu l'occassion de <span className={'c_pink italic font-normal'}> développer plusieurs sites
                                                web </span>durant ma scolarité.
                                            </p>}
                                            githubLink={"https://github.com/AntoninLmp/WebPage-Leagues-of-Legends"}
                                        />
                                    ) : null}
                                    {NetButton ? (
                                        <ProjectExample
                                            projectName={"Shard API, Jeu de stratégie temps réel dans l’espace"}
                                            imageSrc={"https://static.vecteezy.com/system/resources/previews/015/720/527/non_2x/spaceship-illustration-isolated-on-transparent-background-png.png"}
                                            pContent={
                                                <p className={'mx-8 mr-20 text-justify font-light'}>
                                                    J'ai contribué au projet "Shard", <span
                                                    className={'c_yellow italic font-normal'}>une API de
                                                    stratégie en temps réel entre des vaisseaux dans l'espace </span>.
                                                    Travaillant en équipe
                                                    sur le développement d'une API, notre objectif était de soutenir
                                                    l'expérience de jeu immersive. Les itérations régulières et les
                                                    panoblis de tests entre les versions ont été cruciaux pour garantir
                                                    la qualité du projet. Les défis techniques stimulants, tels que la
                                                    gestion des événements spatiaux en temps réel, ont été résolus grâce
                                                    à une collaboration étroite et à une approche itérative.
                                                </p>}
                                            githubLink={""}
                                        />
                                    ) : null}
                                    {ReactButton ? (
                                        <ProjectExample
                                            projectName={"Front library for building user interfaces"}
                                            imageSrc={"https://www.officialgates.com/assets/images/banner-images/react-native-app.png"}
                                            pContent={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                Mon parcours avec <span className={'c_green italic font-normal'}>React a débuté avec le projet de construire
                                                ce portfolio</span>. En entreprenant cette initiative, j'ai commencer
                                                l'apprentissage continu de React pour créer une interface utilisateur
                                                dynamique et moderne. Ce processus m'a permis de découvrir les
                                                subtilités de React, des composants aux états et aux cycles de vie.
                                                J'ai ensuite élargi mes compétences et les ai appliquées dans le développement du site
                                                <span className={'c_pink italic font-normal'}>"synops.ia"</span>. En utilisant React de manière avancée, j'ai contribué à
                                                créer une interface interactive pour ce projet d'envergure, démontrant
                                                ainsi une progression significative dans ma maîtrise de cette
                                                bibliothèque. <br/>

                                                Ce portfolio, fruit de mon apprentissage initial, représente non
                                                seulement mes compétences actuelles, mais également ma <span className={'c_yellow italic font-normal'}>volonté constante
                                                de relever des défis et d'apprendre de nouvelles technologies pour
                                                réaliser des projets exceptionnels</span>.
                                            </p>}
                                            githubLink={"https://github.com/Synops-ia/WebApp"}
                                        />
                                    ) : null}
                                </section>
                            </section>
                        </section>
                    </article>
                    {/*<div className='w-full h_100 mb_4'>
                        <div>
                        <Link to={"/Project"}>
                            <img
                                src={Logos_language}
                                alt='Project images'
                                className={'text-center m-auto'}
                            />
                        </Link>


                            <h1 className='mb-0 font-light c_green titlePrimary1'>Mon Parcours professionel</h1>
                            <h2 className='text_secondary'>Mes experiences dans le monde du travail ...</h2>
                        </div>
                        <Link to={"/parcoursProfessionnel"}>
                            <article className='bg_img bg_pro border_rad w_100 h_70'></article>
                        </Link>
                    </div>*/}
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path transform="translate(0 -1)" fill="#18C3A1" fill-opacity="1"
                          d="M0,128L34.3,154.7C68.6,181,137,235,206,256C274.3,277,343,267,411,266.7C480,267,549,277,617,245.3C685.7,213,754,139,823,106.7C891.4,75,960,85,1029,106.7C1097.1,128,1166,160,1234,160C1302.9,160,1371,128,1406,112L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </section>

            <section className={'flex flex-col justify-evenly mx_20'}>
                <article className={'w-full h-full mb-5'}>
                    <h1 className='titlePrimary2'>À propos</h1>
                    <p className='description'>
                        Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création de
                        projets innovants. Mon interêt pour le développement informatique va de pair avec ma passion
                        pour la collaboration au sein d'une équipe. J'adore concevoir des solutions novatrices en
                        mettant en commun nos idées et compétences. Je ne suis pas que développeur, je suis aussi pleins
                        d'autres choses ...
                    </p>
                </article>
                <article className={'w-full h-full flex mb-8'}>
                    <div className='mr-5e'>
                        <h1 className='titlePrimary3'>Mes études</h1>
                        <p className='description'>
                            J'ai commencé par aller à l'université après mon Bac scientifique. J'avais choisi de faire
                            une double licence biologie et informatique, cependant après quelques mois je me suis rendu
                            compte que la biologie n'était pas un domaine qui me plaisait contrairement à
                            l'informatique.
                            Puis l'occasion de rejoindre une école d'ingénieur s'est présenté à moi alors je l'ai saisi
                            ...
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
                <div>
                    <Link to={"/AntoninLampin"}>
                        <a className={'btn_seeMore'}>En savoir +</a>
                    </Link>
                </div>
            </section>
            <section className='font_raleway mx_20 padding_1 items-center mb-0 font-light titlePrimary3'>
                <p id='p_homepage'>Ils m'ont fait confiance alors pourquoi pas vous : </p>
                <div className='flex items-center flex_wrap justify-center'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thales.svg/2560px-Thales.svg.png'
                        alt='Thales Logo' className='img_logo_entreprise'/>
                    <img src='https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png'
                         alt='Restalliance Logo' className='img_logo_entreprise'/>
                    <img src='https://cdn.pixabay.com/photo/2021/09/22/17/17/mcdonalds-6647433_960_720.png'
                         alt='Macdonald Logo' id='mcdonald'/>
                    <img
                        src={"https://cdn.cookielaw.org/logos/b3b7961d-f863-4eea-b258-af339f48d7ed/e9984d7a-9b40-440c-9e6f-469b7a59aa9f/74c97cbc-debb-4e2d-8c4c-487517bbd5f1/logo-weldom.png"}
                        alt='Weldom Logo' className='img_logo_entreprise'/>
                </div>

            </section>
        </div>
    );
}

export default MainContent;