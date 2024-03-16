import '../index.css';

import Header from "../components/Header.jsx";
import imgMe from "../assets/73CF120D-002F-4C37-95F7-39E7E0E42282.png"

import imgScouts from "../assets/Scouts.jpg"
import imgVoyage from "../assets/IMG_0585.jpg"

//Image Gallery
import imgAnnecy1 from "../assets/Annecy.jpg";
import imgAnnecy3 from "../assets/Annecy3.jpg";
import imgScoutFlag from "../assets/Scout_savoie.jpg";
import imgScoutFire from "../assets/Scouts2.jpg";
import imgCassis from "../assets/CassisStreet.jpg";
import imgWien from "../assets/Wien.jpg";
import imgWien2 from "../assets/Wien2.jpg";
import imgScoutsCompas from "../assets/Scouts_compas.jpg";
import imgNormandie from "../assets/Normandie.jpg";
import imgCar1 from "../assets/car1.jpg";
import imgPrague from "../assets/Prague1.jpg";
import imgBulgarie from "../assets/Bulgarie1.jpg";
import ImageWithCaption from "../components/ImageWithCaption.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";

const PersonalPage = () => {
    const [isFirefox, setIsFirefox] = useState(false);

    useEffect(() => {
        // Détecter si le navigateur est Firefox
        const isFirefoxBrowser = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        // Mettre à jour l'état en conséquence
        setIsFirefox(isFirefoxBrowser);
    }, []);

    return (
        <>
            <Header backgroundColor="bg-green-50"/>
            <section className={"text-center bg-green-50"}>
                <div className={"mx_30 bg-amber-50 rounded-full py-3"}>
                    <h1 className={"text-8xl font-Display c_yellow my-20"}>I'm Antonin.</h1>
                    <img src={"https://www.svgrepo.com/show/422032/scout-hat.svg"} alt={""} className={"w-16 absolute top-20 ml_35"}/>
                </div>
                <section className={"flex flex-col justify-center mt-28"}>
                    <section className={"flex justify-center"}>
                        <div className={"bg-green-200 w-max pt-8 rounded-t-full font-Display"}>
                            <img src={imgMe} alt={"Picture of the creator"} className={"w-56 m-auto "}/>
                            {/*<p className={"text-left"}>Picture of me. </p>*/}
                        </div>
                        <div className={"text-justify mx-16 max-w-lg flex flex-col justify-end"}>
                            <h1 className={"text-3xl c_green my-8"}>
                                Je suis ingénieur en informatique <br/> Je me passionne pour les voyages, les voitures
                                et la nature.
                            </h1>
                            <p className={"italic font-light  text-lg"}>
                                Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création
                                de projets innovants. J'ai fait une école d'ingénieur dans le numérique...
                            </p>
                        </div>
                        <img
                            src={"https://static.vecteezy.com/system/resources/previews/011/298/960/non_2x/simplicity-monstera-plant-freehand-drawing-flat-design-free-png.png"}
                            alt={"plants"} className={"w-60 right-0"}/>
                    </section>
                    <section className={"flex justify-center pt-6"}>
                        <p className={"font-light text-justify text-base max-w-5xl"}>
                            Bienvenue dans mon <span className={"c_green italic"}>univers</span>, où la curiosité, la
                            créativité et le partage sont les piliers fondamentaux.
                            À l'aube de mes <span className={"c_pink italic"}>23 ans</span>, je m'apprête à conclure mes
                            études en ingénierie dans le domaine du numérique. Mon parcours, tant professionnel que
                            personnel, est jalonné par ma passion pour l'apprentissage, l'exploration et le partage des
                            connaissances.Je nourris une réelle passion pour les projets à impact sociétal positif, et
                            je suis fermement convaincu que l'innovation peut constituer un vecteur de changement
                            puissant.<br/><br/>

                            En dehors de mes activités professionnelles, j'aime <span className={"c_yellow"}>
                            partager des moments de convivialité</span> en compagnie de mes amis, explorant de nouveaux
                            endroits et expériences. <span className={"c_pink italic"}>Voyager est une de mes
                            grandes passions</span>; découvrir de nouvelles cultures, rencontrer des personnes fascinantes et
                            contempler des paysages époustouflants nourrit mon esprit d'aventure et
                            d'émerveillement.<br/><br/>

                            J'apprécie également les échanges avec autrui, car je suis convaincu que chaque discussion
                            est une opportunité d'apprentissage. <span className={"c_green italic"}>La diversité des
                            perspectives et des expériences enrichit notre compréhension du monde</span> qui nous
                            entoure, et j'aime me nourrir de ces interactions pour continuer à grandir personnellement
                            et professionnellement.<br/><br/>

                            Mon portfolio témoigne de mon engagement en faveur de la diversité et de la création de
                            solutions novatrices.
                        </p>
                    </section>
                </section>

                <section className={"mt-32"} id={"section_moi"}>
                    <section className={"flex mx-52"}>
                        <article className={"bg-pink-100 text-right w-full m-10 bd_rad64px min_h_455 flex_1"}>
                            <div className={"m-8 font-Display"}>
                                <h1 className={"font-normal text-2xl"}>🚴🏽 Vélo en forêt, Vtt</h1>
                                <h2>Sport</h2>
                            </div>
                            <img
                                src={"https://media.ucpa.com/image/upload/f_auto/t_UCPA/UCPA-SPORT-NATURE/France/00043747.jpg"}
                                alt={"Image de vélo"} className={"ml_15 w_85 bd_rad_br_64px h_photo object-cover"}/>
                        </article>
                        <article className={"bg-amber-100 text-right w-full m-10 bd_rad64px min_h_455 flex_2"}>
                            <div className={"m-8 font-Display"}>
                                <h1 className={"font-normal text-2xl"}>⚜️ Scouts et Guides de France</h1>
                                <h2>Association</h2>
                            </div>
                            <img src={imgScouts} alt={"Image de vélo"}
                                 className={"ml_10 w_90 bd_rad_br_64px h_photo object-cover"}/>
                        </article>
                    </section>
                    <section className={"flex mx-52"}>
                        <article className={"bg-blue-100 text-right w-full m-10 bd_rad64px min_h_455 flex_2"}>
                            <div className={"m-8 font-Display"}>
                                <h1 className={"font-normal text-2xl"}>🛩️ Voyage</h1>
                                <h2>Hobbie</h2>
                            </div>
                            <img src={imgVoyage} alt={"Image de la ciotat"}
                                 className={"ml_10 w_90 bd_rad_br_64px h_photo object-cover"}/>
                        </article>
                        <article className={"bg-green-200 text-right w-full m-10 bd_rad64px min_h_455 flex_1"}>
                            <div className={"m-8 font-Display"}>
                                <h1 className={"font-normal text-2xl"}>🎧Musique</h1>
                                <h2>Une passion</h2>
                            </div>
                            <img src={"https://media.timeout.com/images/105976410/750/562/image.jpg"}
                                 alt={"Image d'un concert"}
                                 className={"ml_15 w_85 bd_rad_br_64px h_photo object-cover"}/>
                        </article>
                    </section>
                </section>

            </section>
            <section className={"text-center bg-green-50"}>
                <section className={"mx_25 py-10"}>
                    <p className={"font-light text-justify text-base"}>
                        Depuis l'âge de 10 ans, je suis impliqué dans le mouvement scout, une aventure qui a façonné ma
                        personnalité et m'a permis d'obtenir de formidable valeurs. Pendant ces 13 années en tant
                        que scout, j'ai eu l'opportunité unique de monter des projets inspirants et de rencontrer des
                        individus venant d'horizons divers. Par exemple <span className='c_green'>j'ai partagé le
                        quotidien de personnes venu demander l'asile en France</span>, ils m'ont raconter leur histoire,
                        m'ont appris un peu de leur langue et m'ont fait découvrir leur culture. J'ai également eu
                        l'occasion de participer à des <span className='c_pink'>projets de solidarité internationale,
                        notamment en Bulgarie</span>, où j'ai pu aider à la rénovation d'une école et à la mise en
                        place d'activités pour les enfants. Ces expériences m'ont enseigné que <span className='c_yellow'>
                        chacun a quelque chose d'unique à offrir</span>, et j'ai toujours été avide d'apprendre de ceux que je
                        rencontre.<br/><br/>

                        Au cours de mes voyages à travers l'Europe, j'ai eu l'occasion de découvrir et apprendre à
                        connaître
                        d'autres cultures. Ces expériences m'ont profondément touché, renforçant ma
                        conviction que <span className='c_green'>la diversité est une richesse </span>et que chacun a le
                        pouvoir de faire une différence
                        positive dans le monde.<br/><br/>

                        Voyager a été pour moi plus qu'une simple aventure, c'était une école de vie. Cela m'a permis de
                        grandir, de m'ouvrir à de nouvelles perspectives et de développer une profonde appréciation pour
                        la nature et ses merveilles. <br/>
                    </p>
                </section>
                <section className="mx-20">
                    <div>
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isFirefox ? 'items-stretch' : 'items-baseline'}`}>
                            <div className="grid gap-4 ">
                                <ImageWithCaption
                                    imgSrc={imgAnnecy1}
                                    altText={"Photo d'Annecy centre ville"}
                                    captionText={"Annecy, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgPrague}
                                    altText={"Photo Lenon Wall, Prague"}
                                    captionText={"Prague, Tchéquie"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgAnnecy3}
                                    altText={"Photo du Col de la Forclaz"}
                                    captionText={"Col de la Forclaz, Savoie"}
                                />
                            </div>
                            <div className="grid gap-4 ">
                                <ImageWithCaption
                                    imgSrc={imgBulgarie}
                                    altText={"Photo Banya en bulgarie"}
                                    captionText={"Баня, Bulgarie"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgCassis}
                                    altText={"Photo dans les rues de cassis"}
                                    captionText={"Cassis, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgWien2}
                                    altText={"Photo de Vienne"}
                                    captionText={"Vienne, Autriche"}
                                />
                            </div>
                            <div className="grid gap-4 ">
                                <ImageWithCaption
                                    imgSrc={imgScoutFlag}
                                    altText={"Photo Savoie en France"}
                                    captionText={"Savoie, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgScoutsCompas}
                                    altText={"Photo limoges, France"}
                                    captionText={"Limoges, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgWien}
                                    altText={"Photo de Vienne"}
                                    captionText={"Vienne, Autriche"}
                                />
                            </div>
                            <div className="grid gap-4 ">
                                <ImageWithCaption
                                    imgSrc={imgNormandie}
                                    altText={"Photo Hautôt-sur-mer, France"}
                                    captionText={"Hautôt-sur-mer, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgCar1}
                                    altText={"Photo limoges, France"}
                                    captionText={"Nord-Pas-Calais, France"}
                                />
                                <ImageWithCaption
                                    imgSrc={imgScoutFire}
                                    altText={"Photo d'un feu de bois"}
                                    captionText={"Quelque part dans la nuit"}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer backgroundColor={"bg-green-50"}/>
        </>
    )
        ;
};

export default PersonalPage;