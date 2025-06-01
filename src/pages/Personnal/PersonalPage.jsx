import '../../index.css';
import Header from "../../components/Header.jsx";
import imgMe from "../../assets/73CF120D-002F-4C37-95F7-39E7E0E42282.png"
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

const PersonalPage = () => {
    const [isFirefox, setIsFirefox] = useState(false);

    useEffect(() => {
        const isFirefoxBrowser = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        setIsFirefox(isFirefoxBrowser);
    }, []);

    return (
        <>
            <Header backgroundColor="bg-green-50"/>
            <section className={"text-center bg-green-50"}>
                <div className={"mx_30 bg-amber-50 rounded-full py-3"}>
                    <h1 className={"text-6xl lg:text-8xl font-Display c_yellow my-20"}>{data.personal.page_title}</h1>
                    <img src={"https://www.svgrepo.com/show/422032/scout-hat.svg"} alt={""} className={"w-20 absolute md:top-32 top-40 ml_35"}/>
                </div>
                <section className={"flex flex-col justify-center mt-28 px-5"}>
                    <section className={"flex justify-center items-center"}>
                        <div className={"bg-green-200 w-max pt-8 rounded-t-full font-Display flex max-h-52 md:max-h-max "}>
                            <img src={imgMe} alt={"Picture of the creator"} className={"w-56 min-w-40 "}/>
                        </div>
                        <div className={"text-justify mx-16 max-w-lg flex flex-col justify-end"}>
                            <h1 className={"md:text-2xl lg:text-3xl c_green my-8"}>
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
                            <span className={"c_green italic"}>{data.personal.header.about.paragraph_1.part2}</span>
                            {data.personal.header.about.paragraph_1.part3} <br/><br/>

                            {data.personal.header.about.paragraph_2.part1}
                            <span className={"c_pink italic"}> {data.personal.header.about.paragraph_2.part2} </span>
                            {data.personal.header.about.paragraph_2.part3} <br/><br/>

                            {data.personal.header.about.paragraph_3.part1}
                            <span className={"c_yellow"}> {data.personal.header.about.paragraph_3.part2} </span>
                            {data.personal.header.about.paragraph_3.part3}
                            <span className={"c_pink italic"}>{data.personal.header.about.paragraph_3.part4}</span>
                            {data.personal.header.about.paragraph_3.part5} <br/><br/>

                            {data.personal.header.about.paragraph_4.part1}
                            <span className={"c_green italic"}>{data.personal.header.about.paragraph_4.part2}</span>
                            {data.personal.header.about.paragraph_4.part3} <br/><br/>

                            {data.personal.header.about.paragraph_5.part1}
                        </p>
                    </section>
                </section>

                <section className={"mt-32"}>
                    <section className={"flex lg:mx-52"}>
                        <CustomArticle
                            bgColor="bg-pink-100"
                            titre="🚴🏽 Vélo en forêt, Vtt"
                            subtitle="Sport"
                            imgSrc="https://res.cloudinary.com/easymountain/image/upload/dpr_2.625,q_auto/c_fill,g_auto,h_507,w_507/v1/decathlon-outdoor/prod/hikes/6114ffaee2de3/6114ffaee2de3-1628780168"
                         />
                        <CustomArticle
                            bgColor="bg-amber-100"
                            titre="⚜️ Scouts/Guides de France"
                            subtitle="Association"
                            imgSrc={"https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2020/02/tente-scoute.jpg"}
                        />
                    </section>
                    <section className={"flex lg:mx-52"}>
                        <CustomArticle
                            bgColor="bg-blue-100"
                            titre="🛩️ Voyage"
                            subtitle="Hobbie"
                            imgSrc={imgVoyage}
                        />
                        <CustomArticle
                            bgColor="bg-green-200"
                            titre="🎧Musique"
                            subtitle="Une passion"
                            imgSrc={"https://media.timeout.com/images/105976410/750/562/image.jpg"}
                        />
                    </section>
                </section>

            </section>
            <section className={"text-center bg-green-50"}>
                <section className={"lg:mx-60 mx-20 py-10"}>
                    <p className={"font-light text-justify text-base"}>
                        {data.personal.description.paragraph.part1}
                        <span className='c_green'>{data.personal.description.paragraph.part2}</span>
                        {data.personal.description.paragraph.part3}
                        <span className='c_pink'>{data.personal.description.paragraph.part4}</span>
                        {data.personal.description.paragraph.part5}
                        <span className='c_yellow'>{data.personal.description.paragraph.part6}</span>,
                        {data.personal.description.paragraph.part7} <br/><br/>
                        {data.personal.description.paragraph.part8}
                        <span className='c_green'>{data.personal.description.paragraph.part9}</span>
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