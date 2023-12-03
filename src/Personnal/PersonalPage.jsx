import '../index.css';

import Header from "../Global/Header";
import imgMe from "../assets/73CF120D-002F-4C37-95F7-39E7E0E42282.png"
import imgScouts from "../assets/scouts.jpg"
import imgVoyage from "../assets/IMG_2195.jpg"
import {Outlet} from "react-router-dom";

const PersonalPage = () => {
    return (
        <>
            <Header></Header>
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
                            Je suis ingénieur en informatique <br/> Je me passionne pour la nature, la musique et les
                            voyages.
                        </h1>
                        <p className={"italic font-light"}>
                            Salut ! Je m'appelle Antonin Lampin, je me passionne pour l'informatique et la création de
                            projets innovants. J'ai fait une école d'ingénieur dans le numérique...
                        </p>
                    </div>
                    <img
                        src={"https://static.vecteezy.com/system/resources/previews/011/298/960/non_2x/simplicity-monstera-plant-freehand-drawing-flat-design-free-png.png"}
                        alt={"plants"} className={"w-60 right-0"}/>
                </section>
                <section className={"mx_25"}>
                    <p className={"italic font-light text-justify"}>
                        Du haut de mes 23 ans, j'aime monter des projets et partir à la rencontre des autres car ils ont
                        tant de choses à nous apprendre. J'ai écouté et vécu avec des étrangers venu demander l'asile en
                        france, rencontre des communautés à l'autre bouts de l'europe... Tous ça grâce aux scouts. J'ai
                        eu l'opportunité de voyager beaucoup en europe ces dernières années pour grandir. J'ai la
                        nature, camper dehors et découvrir ces merveilles.

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
            <Outlet/>
        </>
    );
};

export default PersonalPage;