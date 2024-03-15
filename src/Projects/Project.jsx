import '../index.css';

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import ProjectExample from "../components/ProjectExample";
import img_ordo from "../assets/ordonnancement.png";
import {useState} from "react";

const Project = () => {
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
        <>
            <Header backgroundColor={"bg-green-50"}/>
            <div className="bg-green-50 text-center">
                <div className={"mx_30 bg-amber-50 rounded-full py-3"}>
                    <h1 className={"text-8xl font-Display c_yellow my-20"}>Mes projets.</h1>
                    <img src={"https://www.svgrepo.com/show/411643/code.svg"} alt={"icons"}
                         className={"w-16 absolute top-80 ml_35"}/>
                </div>
                <section className={"bg-white my-20 mx-48 rounded-xl flex flex-col"}>
                    <div className={"flex justify-evenly text-start"}>
                        <article className={"p-14"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>01.</h1>
                            <p>Loremz jizebfizeb  fzebfize  fzeibfz efuzefze hiu </p>
                        </article>
                        <article className={"p-14"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>02.</h1>
                            <p>Loremz jizebfizeb  fzebfize  fzeibfz efuzefze hiu </p>
                        </article>
                    </div>
                    <div className={"flex justify-evenly text-start"}>
                        <article className={"p-14"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>03.</h1>
                            <p>Loremz jizebfizeb  fzebfize  fzeibfz efuzefze hiu </p>
                        </article>
                        <article className={"p-14"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>04.</h1>
                            <p>Loremz jizebfizeb  fzebfize  fzeibfz efuzefze hiu </p>
                        </article>
                    </div>
                </section>
                <section className={"w-full py-20"}>
                    <section className={'w-full h-full text-center'}>
                        {/*<h1 className={'text-white mb-5 titlePrimary1 font-medium c_yellow'}>Mes Projets</h1>*/}
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
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
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
                                                Le projet Automates finis et Expressions rationnelles consiste
                                                en <span
                                                className={'c_yellow italic font-normal'}> la conception et implémentation
                                                d'un programme en Java permettant le traitement d'automates finis</span>.
                                                Les principales étapes incluent la lecture d'un automate depuis un
                                                fichier, l'affichage de l'automate, la déterminisation, la
                                                complétion,
                                                la minimisation, la reconnaissance de mots, la construction de
                                                l'automate du langage complémentaire, et la standardisation. Le
                                                programme doit également être capable de gérer plusieurs automates.
                                                Nous
                                                avons essayer de d'allier le bon fonctionnement du programme, la
                                                qualité
                                                de l'interface, la clarté des structures de données, la lisibilité
                                                du
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
                                                J'ai eu l'occassion de <span
                                                className={'c_pink italic font-normal'}> développer plusieurs sites
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
                                                    panoblis de tests entre les versions ont été cruciaux pour
                                                    garantir
                                                    la qualité du projet. Les défis techniques stimulants, tels que
                                                    la
                                                    gestion des événements spatiaux en temps réel, ont été résolus
                                                    grâce
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
                                                    ce portfolio</span>. En entreprenant cette initiative, j'ai
                                                commencer
                                                l'apprentissage continu de React pour créer une interface
                                                utilisateur
                                                dynamique et moderne. Ce processus m'a permis de découvrir les
                                                subtilités de React, des composants aux états et aux cycles de vie.
                                                J'ai ensuite élargi mes compétences et les ai appliquées dans le
                                                développement du site
                                                <span className={'c_pink italic font-normal'}>"synops.ia"</span>. En
                                                utilisant React de manière avancée, j'ai contribué à
                                                créer une interface interactive pour ce projet d'envergure,
                                                démontrant
                                                ainsi une progression significative dans ma maîtrise de cette
                                                bibliothèque. <br/>

                                                Ce portfolio, fruit de mon apprentissage initial, représente non
                                                seulement mes compétences actuelles, mais également ma <span
                                                className={'c_yellow italic font-normal'}>volonté constante
                                                    de relever des défis et d'apprendre de nouvelles technologies pour
                                                    réaliser des projets exceptionnels</span>.
                                            </p>}
                                            githubLink={"https://github.com/Synops-ia/WebApp"}
                                        />
                                    ) : null}
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                {/*<section className='font_raleway mx_20 p-1 items-center mb-0 font-light titlePrimary3'>*/}
                {/*    <p id='p_homepage'>Ils m'ont fait confiance alors pourquoi pas vous : </p>*/}
                {/*    <div className='flex items-center flex_wrap justify-center'>*/}
                {/*        <img*/}
                {/*            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thales.svg/2560px-Thales.svg.png'*/}
                {/*            alt='Thales Logo' className='img_logo_entreprise'/>*/}
                {/*        <img src='https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png'*/}
                {/*             alt='Restalliance Logo' className='img_logo_entreprise'/>*/}
                {/*        <img src='https://cdn.pixabay.com/photo/2021/09/22/17/17/mcdonalds-6647433_960_720.png'*/}
                {/*             alt='Macdonald Logo' id='mcdonald'/>*/}
                {/*        <img*/}
                {/*            src={"https://cdn.cookielaw.org/logos/b3b7961d-f863-4eea-b258-af339f48d7ed/e9984d7a-9b40-440c-9e6f-469b7a59aa9f/74c97cbc-debb-4e2d-8c4c-487517bbd5f1/logo-weldom.png"}*/}
                {/*            alt='Weldom Logo' className='img_logo_entreprise'/>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
            <Footer backgroundColor={"bg-green-50"}/>
        </>
    );
};

export default Project;