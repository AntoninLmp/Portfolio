import '../../index.css';
import Header from "../../components/Header.jsx";
import imgMe from "../../assets/portrait.png";
import imgVoyage from "../../assets/IMG_0585.jpg"

//Image Gallery
import imgAnnecy1 from "../../assets/Annecy.jpg";
import imgAnnecy3 from "../../assets/Annecy3.jpg";
import imgScoutFlag from "../../assets/Scout_savoie.jpg";
import imgScoutFire from "../../assets/Scouts2.jpg";
import imgCassis from "../../assets/CassisStreet.jpg";
import imgWien from "../../assets/Wien.jpg";
import imgWien2 from "../../assets/Wien2.jpg";
import imgScout from "../../assets/Scouts_compas.jpg";
import imgNormandy from "../../assets/Normandie.jpg";
import imgCar1 from "../../assets/car1.jpg";
import imgPrague from "../../assets/Prague1.jpg";
import imgBulgaria from "../../assets/Bulgarie1.jpg";

import ImageWithCaption from "../../components/ImageWithCaption.jsx";
import Footer from "../../components/Footer.jsx";
import {useEffect, useState} from "react";
import CustomArticle from "../../components/CustomArticle.jsx";
import data from '../../locales/fr.json';

const hobbies = [
    {
        bgColor: "",
        titre: "Vivre avec la nature et apprendre les valeurs de la vie en communauté",
        subtitle: "Scouts/Guides de France, Association",
        imgSrc: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2020/02/tente-scoute.jpg"
    },
    {
        bgColor: "",
        titre: "Pratiquer le VTT en forets pour me vider la tête",
        subtitle: "Sport",
        imgSrc: "https://www.velorizons.com/mf_websites/main/uploads/fr/circuit/circuit_331/vosges-vtt-1_1639567137.jpg"
    },
    {
        bgColor: "",
        titre: "Partir à l'aventure et découvrir de nouveaux horizons",
        subtitle: "Hobbie",
        imgSrc: imgVoyage
    },
    {
        bgColor: "",
        titre: "S'évader par la musique et les concerts",
        subtitle: "Une passion",
        imgSrc: "https://media.timeout.com/images/105976410/750/562/image.jpg"
    }
];

const PersonalPage = () => {
    const [isFirefox, setIsFirefox] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const isFirefoxBrowser = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        setIsFirefox(isFirefoxBrowser);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % hobbies.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + hobbies.length) % hobbies.length);
    };

    return (
        <>
            <Header backgroundColor="bg-green-50"/>
            <section className={"text-center bg-green-50"}>
                <div className={"mx_30 bg-sage-green rounded-full py-3"}>
                    <h1 className={"text-6xl lg:text-8xl font-display text-primary-green my-20"}>{data.personal.page_title}</h1>
                    <img src={"https://www.svgrepo.com/show/422032/scout-hat.svg"} alt={""} className={"w-20 absolute md:top-32 top-40 ml_35"}/>
                </div>
                <section className={"flex flex-col justify-center mt-28 px-5"}>
                    <section className={"flex justify-center items-center"}>
                        <div className={"bg-light-green w-max pt-8 rounded-t-full font-display flex max-h-52 md:max-h-max "}>
                            <img src={imgMe} alt={"Picture of the creator"} className={"w-56 min-w-40 "}/>
                        </div>
                        <div className={"text-justify mx-16 max-w-lg flex flex-col justify-end"}>
                            <h1 className={"md:text-2xl lg:text-3xl text-primary-green my-8"}>
                                {data.personal.header.title}
                            </h1>
                            <p className={"italic font-light md:text-base lg:text-lg"}>
                                {data.personal.header.subtitle}
                            </p>
                        </div>
                        <img
                            src={"https://static.vecteezy.com/system/resources/previews/011/298/960/non_2x/simplicity-monstera-plant-freehand-drawing-flat-design-free-png.png"}
                            alt={"plants"} className={"hidden lg:inline w-60 right-0"}/>
                    </section>
                    <section className={"flex justify-center pt-6 px-6"}>
                        <p className={"font-light text-justify text-base max-w-5xl"}>
                            {data.personal.header.about.paragraph_1.part1}
                            <span className={"text-primary-green italic"}>{data.personal.header.about.paragraph_1.part2}</span>
                            {data.personal.header.about.paragraph_1.part3} <br/><br/>

                            {data.personal.header.about.paragraph_2.part1}
                            <span className={"text-primary-green italic"}> {data.personal.header.about.paragraph_2.part2} </span>
                            {data.personal.header.about.paragraph_2.part3} <br/><br/>

                            {data.personal.header.about.paragraph_3.part1}
                            <span className={"text-primary-green"}> {data.personal.header.about.paragraph_3.part2} </span>
                            {data.personal.header.about.paragraph_3.part3}
                            <span className={"text-primary-green italic"}>{data.personal.header.about.paragraph_3.part4}</span>
                            {data.personal.header.about.paragraph_3.part5} <br/><br/>

                            {data.personal.header.about.paragraph_4.part1}
                            <span className={"text-primary-green italic"}>{data.personal.header.about.paragraph_4.part2}</span>
                            {data.personal.header.about.paragraph_4.part3} <br/><br/>

                            {data.personal.header.about.paragraph_5.part1}
                        </p>
                    </section>
                </section>

                <section className={"mt-32 px-5 lg:px-12"}>
                    <div className={"mx-auto max-w-6xl"}>
                        <div className={"mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"}>
                            <div className={"text-left"}>
                                <p className={"text-sm uppercase tracking-[0.35em] text-primary-green mb-2"}>Mes passions</p>
                                <h2 className={"font-display text-3xl text-primary-green md:text-4xl"}>Un petit voyage à travers mes envies</h2>
                                <p className={"mt-2 max-w-2xl text-sm font-light text-gray-700 md:text-base"}>
                                    Parcourez ces univers d’un simple clic pour mieux me connaître.
                                </p>
                            </div>
                            <div className={"flex items-center gap-3 self-end"}>
                                <button
                                    type={"button"}
                                    onClick={goToPreviousSlide}
                                    aria-label={"Afficher la passion précédente"}
                                    className={"rounded-full bg-white/80 px-4 py-2 text-xl text-primary-green shadow-[0_12px_30px_-15px_rgba(15,23,42,0.35)] transition hover:scale-105 hover:bg-white"}
                                >
                                    ←
                                </button>
                                <button
                                    type={"button"}
                                    onClick={goToNextSlide}
                                    aria-label={"Afficher la passion suivante"}
                                    className={"rounded-full bg-white/80 px-4 py-2 text-xl text-primary-green shadow-[0_12px_30px_-15px_rgba(15,23,42,0.35)] transition hover:scale-105 hover:bg-white"}
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div className={"overflow-hidden rounded-[40px] bg-light-green px-3 py-4 backdrop-blur-sm md:px-6"}>
                            <div
                                className={"flex transition-transform duration-500 ease-out"}
                                style={{transform: `translateX(-${currentSlide * 100}%)`}}
                            >
                                {hobbies.map((hobby) => (
                                    <div key={hobby.titre} className={"min-w-full px-2 md:px-4"}>
                                        <CustomArticle
                                            bgColor={hobby.bgColor}
                                            titre={hobby.titre}
                                            subtitle={hobby.subtitle}
                                            imgSrc={hobby.imgSrc}
                                            className={"mx-auto"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={"mt-5 flex justify-center gap-2"}>
                            {hobbies.map((hobby, index) => (
                                <button
                                    key={hobby.titre}
                                    type={"button"}
                                    aria-label={`Afficher ${hobby.titre}`}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-3 w-3 rounded-full transition ${index === currentSlide ? 'bg-primary-green scale-110' : 'bg-primary-green/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

            </section>
            <section className={"text-center bg-green-50"}>
                <section className={"flex justify-center pt-6 px-6"}>
                    <p className={"font-light text-justify text-base max-w-5xl mb-14"}>
                        {data.personal.description.paragraph.part1}
                        <span className='text-primary-green'>{data.personal.description.paragraph.part2}</span>
                        {data.personal.description.paragraph.part3}
                        <span className='text-primary-green'>{data.personal.description.paragraph.part4}</span>
                        {data.personal.description.paragraph.part5}
                        <span className='text-primary-green'>{data.personal.description.paragraph.part6}</span>,
                        {data.personal.description.paragraph.part7} <br/><br/>
                        {data.personal.description.paragraph.part8}
                        <span className='text-primary-green'>{data.personal.description.paragraph.part9}</span>
                        {data.personal.description.paragraph.part10}<br/><br/>
                        {data.personal.description.paragraph.part11} <br/>
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
                                    imgSrc={imgBulgaria}
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
                                    imgSrc={imgScout}
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
                                    imgSrc={imgNormandy}
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