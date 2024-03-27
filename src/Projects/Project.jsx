import '../index.css';

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import ProjectExample from "../components/ProjectExample";
import img_ordonnancement from "../assets/ordonnancement.png";
import {useState} from "react";

const Project = () => {
    // const [isVisible, setIsVisible] = useState(false);
    const [CButton, setCButton] = useState(true);
    const [JavaButton, setJavaButton] = useState(false);
    const [PythonButton, setPythonButton] = useState(false);
    const [WebButton, setWebButton] = useState(false);
    const [NetButton, setNetButton] = useState(false);
    const [ReactButton, setReactButton] = useState(false);
    const [AndroidButton, setAndroidButton] = useState(false);

    const toggleButton = (buttonName) => {
        setCButton(buttonName === 'CButton');
        setJavaButton(buttonName === 'JavaButton');
        setPythonButton(buttonName === 'PythonButton');
        setWebButton(buttonName === 'WebButton');
        setNetButton(buttonName === 'NetButton');
        setReactButton(buttonName === 'ReactButton');
        setAndroidButton(buttonName === 'AndroidButton');
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
                <section className={"bg-green-100 my-20 mx-48 rounded-3xl flex flex-col"}>
                    <div className={"flex justify-evenly text-start"}>
                        <article className={"p-12 w-1/3"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>01.</h1>
                            <h2 className={"c_green font-bold italic text-2xl"}>Diversité des technologies </h2>
                            <p className={"text-gray-600 italic text-justify pt-5"}>
                                La diversité des technologies constitue un pilier central de mon parcours
                                d'ingénieur.j'ai eu l'opportunité de travailler avec un large éventail de langages et
                                d'outils, allant du développement en C et Java à la conception de solutions en Python,
                                React et Docker.
                            </p>
                        </article>
                        <article className={"p-12 w-1/3"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>02.</h1>
                            <h2 className={"c_green font-bold italic text-2xl"}>Travail en équipe</h2>
                            <p className={"text-gray-600 italic text-justify pt-5"}>
                                Collaborer avec des équipes multidisciplinaires m'a permis de développer des compétences
                                solides en communication, en résolution de problèmes et en leadership. Ensemble, nous
                                avons atteint des objectifs ambitieux grâce à une collaboration efficace et une
                                répartition judicieuse des tâches.
                            </p>
                        </article>
                    </div>
                    <div className={"flex justify-evenly text-start"}>
                        <article className={"p-12 w-1/3"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>03.</h1>
                            <h2 className={"c_green font-bold italic text-2xl"}>Construction de projet</h2>
                            <p className={"text-gray-600 italic text-justify pt-5"}>
                                Le cycle de vie d'un projet est un processus dynamique, allant de la planification à la
                                livraison, qui exige flexibilité et apprentissage continu. Maîtriser ce cycle permet de
                                naviguer efficacement à travers les défis et les opportunités de chaque projet.
                            </p>
                        </article>
                        <article className={"p-12 w-1/3"}>
                            <h1 className={'text-white mb-5 text-3xl font-medium c_green'}>04.</h1>
                            <h2 className={"c_green font-bold italic text-2xl"}>Enrichissement personnel </h2>
                            <p className={"text-gray-600 italic text-justify pt-5"}>
                                Chaque projet est une occasion d'apprendre et de grandir, que ce soit en perfectionnant
                                mes compétences techniques, en renforçant ma capacité à résoudre des problèmes complexes
                                ou en développant ma créativité. Chaque défi relevé me rapproche de mes objectifs
                                professionnels et me permet de m'épanouir en tant qu'ingénieur.
                            </p>
                        </article>
                    </div>
                </section>

                <section className={"w-full py-20"}>
                    <section className={'w-full h-full text-center'}>
                        <section>
                            <section className='flex justify justify-evenly font-light italic mx-48 my-10'>
                                <button className='flex flex-col items-center' onClick={() => toggleButton("CButton")}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/280px-C_Programming_Language.svg.png"
                                        className={'img_language mb-5'} alt={"CButton"}/>
                                    <p>C</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("JavaButton")}>
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                                        className={'img_language mb-5'} alt={"JavaButton"}/>
                                    <p>Java</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("PythonButton")}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                                        className={'img_language mb-5'} alt={"PythonButton"}/>
                                    <p>Python</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("WebButton")}>
                                    <img src="https://www.shareicon.net/data/2016/09/09/827488_browser_512x512.png"
                                         className={'img_language mb-5'} alt={"WebSiteButton"}/>
                                    <p>WebSite</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("NetButton")}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
                                        className={'img_language mb-5'} alt={"NetButton"}/>
                                    <p>C# & .NET</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("AndroidButton")}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/1200px-Android_Studio_Logo_%282023%29.svg.png"
                                        className={'img_language mb-5'} alt={"AndroidButton"}/>
                                    <p>Android Studio</p>
                                </button>
                                <button className={'flex flex-col items-center'}
                                        onClick={() => toggleButton("ReactButton")}>
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                        className={'img_language mb-5'} alt={"ReactButtons"}/>
                                    <p>React</p>
                                </button>
                                <Link to={"/Projects"}>
                                    <button className={'flex flex-col items-center'}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/57/57013.png"
                                             className={'img_language mb-5'} alt={"ProjectButton"}/>
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
                                            imageSource={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Huffman_tree_2.svg/1200px-Huffman_tree_2.svg.png"}
                                            content={<p className={'mx-8 mr-20 text-justify font-light'}>
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
                                            githubLink={""}/>
                                    ) : null}
                                    {JavaButton ? (
                                        <ProjectExample
                                            projectName={'Projet Automate'}
                                            imageSource={"https://gallium.inria.fr/~maranget/X/421/poly/poly119.png"}
                                            content={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                ° Le projet Automates finis et Expressions rationnelles consiste
                                                en <span className={'c_yellow italic font-normal'}> la conception et implémentation
                                                d'un programme en Java permettant le traitement d'automates finis</span>.
                                                Les principales étapes incluent la lecture d'un automate depuis un
                                                fichier, l'affichage de l'automate, la déterminisation, la complétion,
                                                la minimisation, la reconnaissance de mots, la construction de
                                                l'automate du langage complémentaire, et la standardisation. Le
                                                programme doit également être capable de gérer plusieurs automates.
                                                Nous avons essayer de d'allier le bon fonctionnement du programme, la
                                                qualité de l'interface, la clarté des structures de données, la
                                                lisibilité du code.
                                                <br/><br/>
                                                ° J'ai pu travailler en équipe sur des projets <span
                                                className={'c_green italic font-normal'}>Spring Boot</span>. J'ai pu
                                                mettre en place des tests unitaires et d'intégration avec Junit et
                                                Mockito.
                                            </p>}
                                            githubLink={"https://github.com/AntoninLmp/Projet_Automate"}
                                        />
                                    ) : null}
                                    {PythonButton ? (
                                        <ProjectExample
                                            projectName={"Algorithme d'ordonnancement"}
                                            imageSource={img_ordonnancement}
                                            content={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                ° L'algorithme de Huffman est un <span
                                                className={'c_green italic font-normal'}>algorithme de compression de données</span> qui
                                                permet de compresser des fichiers. Tout d'abord, il analyse la fréquence
                                                d'apparition de chaque symbole dans le fichier à compresser, puis il
                                                construit un arbre binaire appelé "arbre de Huffman" en utilisant ces
                                                fréquences. Dans cet arbre, les symboles les moins fréquents sont
                                                positionnés aux extrémités les plus éloignées de la racine, tandis que
                                                les symboles plus courants sont plus proches de la racine. Ensuite,
                                                l'algorithme attribue des codes binaires aux symboles en parcourant cet
                                                arbre, en donnant aux symboles les plus fréquents des codes plus courts
                                                pour optimiser la compression.
                                                <br/><br/>
                                                ° J'ai également implémenté une solution utilisant <span
                                                className={'c_yellow italic font-normal'}>pytests</span> chez thales
                                                pour améliorer l'intégration continue au seins des radars.
                                            </p>}
                                            githubLink={"https://github.com/AntoninLmp/Algorithme_Ordonnancement"}
                                        />
                                    ) : null}
                                    {WebButton ? (
                                        <ProjectExample
                                            projectName={"Developement de plusieurs sites"}
                                            imageSource={"https://www.devwerkz.com/wp-content/uploads/2020/01/DevWerkz_Web-design-and-development_01-Main-illust.png"}
                                            content={<p className={'mx-8 mr-20 text-justify font-light'}>
                                                J'ai eu l'occassion de <span
                                                className={'c_pink italic font-normal'}> développer plusieurs sites
                                                web </span>durant ma scolarité, une expérience enrichissante qui m'a
                                                permis de plonger dans le monde fascinant du développement web. À
                                                travers ces projets, j'ai pu mettre en pratique mes compétences en
                                                conception et en programmation pour créer des interfaces utilisateur
                                                attrayantes et fonctionnelles. Chaque site web représente un défi
                                                unique, qu'il s'agisse de concevoir une expérience utilisateur
                                                intuitive, d'optimiser les performances ou d'intégrer des
                                                fonctionnalités avancées. Cette expérience m'a non seulement permis
                                                d'approfondir mes connaissances techniques, mais aussi de développer ma
                                                capacité à travailler en équipe et à répondre aux besoins spécifiques
                                                des clients.
                                            </p>}
                                            githubLink={"https://github.com/Sawangg/madle"}
                                        />
                                    ) : null}
                                    {NetButton ? (
                                        <ProjectExample
                                            projectName={"Shard API, Jeu de stratégie temps réel dans l’espace"}
                                            imageSource={"https://static.vecteezy.com/system/resources/previews/015/720/527/non_2x/spaceship-illustration-isolated-on-transparent-background-png.png"}
                                            content={
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
                                    {AndroidButton ? (
                                        <ProjectExample
                                            projectName={"Android Studio, Football Tracker : Statistiques de match"}
                                            imageSource={"https://developer.android.com/static/studio/images/device-mirroring.png"}
                                            content={
                                                <p className={'mx-8 mr-20 text-justify font-light'}>
                                                    J'ai participé au développement de l'application <span
                                                    className={'c_pink italic font-normal'}> "Football Tracker" </span>,
                                                    une application mobile qui permet aux utilisateurs de suivre les
                                                    statistiques des matchs de football en temps réel. En utilisant
                                                    Android Studio, j'ai contribué à la conception de l'interface
                                                    utilisateur, à l'intégration des API de données en temps réel et à
                                                    la mise en œuvre des fonctionnalités de suivi des matchs. Ce projet
                                                    m'a permis de mettre en pratique mes compétences en développement
                                                    mobile et de travailler en équipe pour créer une application
                                                    fonctionnelle et conviviale.
                                                </p>}
                                            githubLink={"https://github.com/AntoninLmp/Football-Tracker"}
                                        />
                                    ) : null}
                                    {ReactButton ? (
                                        <ProjectExample
                                            projectName={"Front library for building user interfaces"}
                                            imageSource={"https://www.officialgates.com/assets/images/banner-images/react-native-app.png"}
                                            content={<p className={'mx-8 mr-20 text-justify font-light'}>
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
                <section>
                    <h1 className={'text-white text-3xl font-medium c_yellow underline'}>Autres technologies</h1>
                    <div className={'flex justify-evenly items-center'}>
                        <img
                            src='https://user.oc-static.com/upload/2021/11/10/1636542639252_Moby-logo.png'
                            alt='Thales Logo' className={"w-80 h-full"}/>
                        <img
                            src='https://logodownload.org/wp-content/uploads/2022/05/linux-logo-0.png'
                            alt='Thales Logo' className={"w-80 h-full"}/>
                        <img
                            src='https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-04/K8S-logo.png'
                            alt='Thales Logo' className={"w-80 h-full"}/>
                    </div>

                </section>
            </div>
            <Footer backgroundColor={"bg-green-50"}/>
        </>
    );
};

export default Project;