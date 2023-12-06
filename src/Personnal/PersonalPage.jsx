import '../index.css';

import Header from "../Global/Header";
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
import ImageWithCaption from "./ImageWithCaption.jsx";

const PersonalPage = () => {
    return (
        <>
            <Header backgroundColor="bg-green-50"/>
            <section className={"text-center bg-green-50"}>
                <div className={"mx_30 bg-amber-50 rounded-full py-3"}>
                    <h1 className={"text-8xl font-Display c_yellow my-20"}>I'm Antonin.</h1>
                </div>
                <section className={"flex justify-center mt-28"}>
                    <div className={"bg-green-200 w-max pt-8 rounded-t-full font-Display"}>
                        <img src={imgMe} alt={"Picture of the creator"} className={"w-56 m-auto "}/>
                        {/*<p className={"text-left"}>Picture of me. </p>*/}
                    </div>
                    <div className={"text-justify mx-16 max-w-lg flex flex-col justify-end"}>
                        <h1 className={"text-3xl c_green my-8"}>
                            Je suis ingénieur en informatique <br/> Je me passionne pour les voyages, les voitures et la
                            nature.
                        </h1>
                        <p className={"italic font-light  text-lg"}>
                            Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création de
                            projets innovants. J'ai fait une école d'ingénieur dans le numérique...
                        </p>
                    </div>
                    <img
                        src={"https://static.vecteezy.com/system/resources/previews/011/298/960/non_2x/simplicity-monstera-plant-freehand-drawing-flat-design-free-png.png"}
                        alt={"plants"} className={"w-60 right-0"}/>
                </section>
                <section className={"mx_25 mt-7"}>
                    <p className={"font-light text-justify text-base"}>
                        {/*Du haut de mes 23 ans, j'aime monter des projets et partir à la rencontre des autres car ils ont*/}
                        {/*tant de choses à nous apprendre. J'ai écouté et vécu avec des étrangers venu demander l'asile en*/}
                        {/*france, rencontre des communautés à l'autre bouts de l'europe... Tous ça grâce aux scouts. J'ai*/}
                        {/*eu l'opportunité de voyager beaucoup en europe ces dernières années pour grandir. J'ai la*/}
                        {/*nature et découvrir ces merveilles.*/}
                        Du haut de mes 23 ans, je suis sur le point de terminer mes études en ingénierie dans le monde
                        du
                        numérique. Mon parcours professionnel et personnel a été marqué par ma passion pour
                        l'apprentissage, la découverte et le partage.
                        Je suis passionné par les projets qui ont un impact positif sur la société, et je suis convaincu
                        que l'innovation peut être un puissant moteur de changement. Mon portfolio reflète mon
                        engagement envers la diversité et la création de solutions novatrices.<br/>
                        Bienvenue dans mon univers, où la curiosité, la créativité et le partage sont les maîtres-mots.
                    </p>
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
                    <p className={"italic font-light text-justify text-base"}>
                        Depuis l'âge de 10 ans, je suis impliqué dans le mouvement scout, une aventure qui a façonné ma
                        personnalité et m'a permis d'obtenir de formidable valeurs. Pendant ces 13 années en tant
                        que scout, j'ai eu l'opportunité unique de monter des projets inspirants et de rencontrer des
                        individus venant d'horizons divers. Ces expériences m'ont enseigné que <span
                        className='c_yellow'>chacun a quelque chose
                        d'unique à offrir</span>, et j'ai toujours été avide d'apprendre de ceux que je
                        rencontre.<br/><br/>

                        Au cours de mes voyages à travers l'Europe, j'ai eu l'occasion de découvrir et apprendre à
                        connaître
                        d'autres cultures. Ces expériences m'ont profondément touché, renforçant ma
                        conviction que <span className='c_pink'>la diversité est une richesse </span>et que chacun a le
                        pouvoir de faire une différence
                        positive dans le monde.<br/><br/>

                        Voyager a été pour moi plus qu'une simple aventure, c'était une école de vie. Cela m'a permis de
                        grandir, de m'ouvrir à de nouvelles perspectives et de développer une profonde appréciation pour
                        la nature et ses merveilles. <br/>
                    </p>
                </section>
                <section className="mx-20">
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline">
                            <div className="grid gap-4 ">
                                <ImageWithCaption
                                    imgSrc={imgAnnecy1}
                                    altText={"Photo d'Annecy centre ville"}
                                    captionText={"Annecy, France"}
                                />
                                {/*<figure>*/}
                                {/*    <img className="h-auto max-w-full rounded-lg" src={imgAnnecy1}*/}
                                {/*         alt="Photo d'Annecy centre ville"/>*/}
                                {/*    <div className={"h-0 "}>*/}
                                {/*        <figcaption*/}
                                {/*            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">*/}
                                {/*            Annecy, France*/}
                                {/*        </figcaption>*/}
                                {/*    </div>*/}
                                {/*</figure>*/}
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgPrague} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Prague, Tchéquie
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgAnnecy3} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Col de la Forclaz
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                            <div className="grid gap-4 ">
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgBulgarie} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Баня, Bulgarie
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgCassis} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Cassis, France
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgWien2} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Vienne, Autriche
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                            <div className="grid gap-4 ">
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgScoutFlag} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Savoie, France
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgScoutsCompas} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Limoges, France
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgWien} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">Annecy,
                                            France
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                            <div className="grid gap-4 ">
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgNormandie} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Hautôt-sur-mer, France
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgCar1} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3"> France
                                        </figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="h-auto max-w-full rounded-lg" src={imgScoutFire} alt=""/>
                                    <div className={"h-0"}>
                                        <figcaption
                                            className="relative bg-gray-300 bottom-14 p-3 w-max rounded-xl text-xs font-light ml-3">
                                            Quelque part dans la nuit
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"mx_25 py-10"}>
                    <p className={"italic font-light text-justify text-base"}>
                        Depuis l'âge de 10 ans, je suis impliqué dans le mouvement scout, une aventure qui a façonné ma
                        personnalité et m'a permis d'obtenir de formidable valeurs. Pendant ces 13 années en tant
                        que scout, j'ai eu l'opportunité unique de monter des projets inspirants et de rencontrer des
                        individus venant d'horizons divers. Ces expériences m'ont enseigné que <span
                        className='c_yellow'>chacun a quelque chose
                        d'unique à offrir</span>, et j'ai toujours été avide d'apprendre de ceux que je
                        rencontre.<br/><br/>

                        Au cours de mes voyages à travers l'Europe, j'ai eu l'occasion de découvrir et apprendre à
                        connaître
                        d'autres cultures. Ces expériences m'ont profondément touché, renforçant ma
                        conviction que <span className='c_pink'>la diversité est une richesse </span>et que chacun a le
                        pouvoir de faire une différence
                        positive dans le monde.<br/><br/>

                        Voyager a été pour moi plus qu'une simple aventure, c'était une école de vie. Cela m'a permis de
                        grandir, de m'ouvrir à de nouvelles perspectives et de développer une profonde appréciation pour
                        la nature et ses merveilles. <br/>
                    </p>
                </section>
            </section>
        </>
    )
        ;
};

export default PersonalPage;