import '../index.css';

import Header from "../Global/Header.jsx";
import Footer from "../Global/Footer.jsx";
import SchoolWithCaption from "./SchoolWithCaption.jsx";

const Studies = () => {
    return (
        <>
            <Header backgroundColor={"bg-amber-50"}/>
            <section className={"text-center bg-amber-50"}>
                <div className={"mx_30 bg-green-50 rounded-full py-3"}>
                    <h1 className={"text-8xl font-Display c_green my-20"}>Mes études.</h1>
                    <img src={"https://www.svgrepo.com/show/285187/stars-star.svg"} alt={""} className={"w-20 absolute top-20"}/>
                </div>
                <section>
                    <SchoolWithCaption
                        imgSrc={"https://cet-ingenierie.fr/wp-content/uploads/2017/03/89_principale.jpg"}
                        altText={"Lycée rené cassin"}
                        title={"Lycée René Cassin, Arpajon"}
                        years={"2016 - 2019"}
                        description={"Mes années de lycée ont étè de belles années, pleines de découverte sur les autres et sur moi-même. C'est à ce moment la " +
                            "grace à la spécialité ISN (informatique) que j'ai découvert le domaine qui me plaisait. J'ai eu un BAC Scientifique avec Mention."}
                        side={"left"}
                    />
                    {/*<img src={"https://www.creativefabrica.com/wp-content/uploads/2021/08/16/house-plants-in-pots-Graphics-15910935-1.png"} alt={""} className={"w-1/3 absolute"}/>*/}
                    <img src={"https://www.svgrepo.com/show/418916/doodle-education-line-2.svg"} alt={""} className={"w-24 absolute ml_15"}/>
                    <SchoolWithCaption
                        imgSrc={"https://upload.wikimedia.org/wikipedia/commons/2/2b/Universite-Paris-Rive-Gauche.JPG"}
                        altText={"Université Paris Diderot, Paris 13ème"}
                        title={"Université Paris Diderot, Paris 13ème"}
                        years={"2019 - 2020"}
                        description={"J'ai commencé par une Double licence Biologie/Informatique à l'Université Paris Diderot car à l'époque c'était les deux domaines" +
                            " qui me plaisaient le plus. Après quelques mois, j'ai réaliser que la biologie n'était pas faite pour moi alors je me suis concentré sur " +
                            "l'informatique. Je n'y suis pas rester longtemps puisque j'ai rejoins l'efrei dans la même année en rentré décalé. "}
                    />
                    <img src={"https://www.svgrepo.com/show/418922/doodle-education-line.svg"} alt={""} className={"w-24 absolute ml_85"}/>
                    <SchoolWithCaption
                        imgSrc={"https://www.efrei.fr/wp-content/uploads/2021/09/ecole-ingenieur-generaliste-paris-efrei-scaled.jpg"}
                        altText={"Efrei Paris, Villejuif"}
                        title={"Efrei Paris, Villejuif"}
                        years={"2020 - 2024"}
                        description={"En 2020, je suis entré à l'EFREI, une école d'ingénieurs spécialisée dans le numérique. Mon objectif " +
                            "était de parfaire mes compétences et d'acquérir les connaissances nécessaires pour obtenir un diplôme d'ingénieur. Tout au long de mes années" +
                            ", j'ai été immergé dans un environnement dynamique et stimulant, où j'ai eu l'opportunité d'explorer des domaines variés de " +
                            "l'ingénierie liés aux nouvelles technologies. "}
                        side={"left"}
                    />
                    <img src={"https://www.svgrepo.com/show/418918/doodle-finish-graduation.svg"} alt={""} className={"w-24 absolute ml_15"}/>
                    <SchoolWithCaption
                        imgSrc={"https://yt3.googleusercontent.com/ytc/APkrFKZFdRraXm1FF3yRvvfoz12kWbQtZJUXFLy3odZL=s900-c-k-c0x00ffffff-no-rj"}
                        altText={"ESSCA, Budapest"}
                        title={"ESSCA, Budapest"}
                        years={"Un semestre en 2021"}
                        description={"Durant mon semestre d'échange à Budapest à l'ESCCA, j'ai été immergé dans un environnement nouveau et multiculturelle. Les cours stimulants" +
                            "m'ont permis d'explorer de nouvelles approches créatives et d'approfondir mes compétences linguistique. Au-delà des cours, j'ai découvert" +
                            " la richesse culturelle de Budapest et tissé des liens avec des étudiants du monde entier. Cette expérience unique a contribué à élargir mes horizons." +
                            " Elle restera gravée comme une des meilleures période de ma vie."}
                    />
                </section>
            </section>
            <Footer backgroundColor={"bg-amber-50"}/>
        </>
    );
};

export default Studies;