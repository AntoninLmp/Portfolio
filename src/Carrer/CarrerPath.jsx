import '../index.css';
import './CarrerPath.css';
import {useState} from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import restalliance from '../assets/restalliance-rmbg.png';
import thales from '../assets/thales.png';
import Mcdonald from '../assets/McDonalds_2-rmbg.png';
import siarce from '../assets/siarce-rmbg.png';
import weldom from '../assets/weldom_rmbg.png';


function CarrerPath() {
    const [isTextThalesVisible, setTextThalesVisible] = useState(false);
    const [isTextWeldomVisible, setTextWeldomVisible] = useState(false);
    const [isTextRestallianceVisible, setTextRestallianceVisible] = useState(false);
    const [isTextMcdonaldVisible, setTextMcdonaldVisible] = useState(false);
    const [isTextSiarceVisible, setTextSiarceVisible] = useState(false);

    const toggleTextThalesVisibility = () => {
        setTextThalesVisible(!isTextThalesVisible);
    };
    const toggleTextWeldomVisibility = () => {
        setTextWeldomVisible(!isTextWeldomVisible);
    };
    const toggleTextRestallianceVisibility = () => {
        setTextRestallianceVisible(!isTextRestallianceVisible);
    };
    const toggleTextMcdonaldVisibility = () => {
        setTextMcdonaldVisible(!isTextMcdonaldVisible);
    };
    const toggleTextSiarceVisibility = () => {
        setTextSiarceVisible(!isTextSiarceVisible);
    };
    return (
        <>
            <Header></Header>
            <section>
                <h1 className={'m-20 text-5xl italic text-center'}>Mes expériences professionelles</h1>
            </section>
            <section className='flex mx_10 flex-wrap justify-between font-roboto'>
                <article className={'entreprise rounded-xl mb-10 bg_yellow ${isTextThalesVisible ? expanded : }'}>
                    <div className={'flex items-center'}>
                        <img src={thales} alt='Thales Logo' className={'img_carer mr-2'} />
                        <div className={'my-5'}>
                            <h1 className={'text-lg italic'}>Alternant développeur informatique </h1>
                            <h2>De 2022 à aujourd'hui</h2>
                        </div>
                    </div>
                    <p className={'font-serif'}>
                        Je suis actuellement en <span className=''>alternance chez Thales Land Air System à Limours</span>, où je travaille sur la partie intégration
                        continue des radars militaires développés par l'entreprise. Notre site est spécialisé dans <span className=''>la conception et la fabrication de systèmes électroniques
                        de défense pour les forces armées françaises</span>. <br />
                    </p>
                    {isTextThalesVisible ? (
                        <p className={'font-serif'}>
                            Mon travail consiste à <span className=''>améliorer la partie intégration continue</span> des radars, en utilisant les dernières technologies et méthodologies
                            en la matière. J'ai pour mission de garantir la qualité du processus de développement, en automatisant les tests et en assurant la traçabilité des
                            modifications apportées au code source. <br />
                            Pour ce faire, je travaille en étroite collaboration avec les équipes de développement, de test et de validation des radars.
                            Mon poste chez Thales LAS à Limours est très stimulant. <br />
                            En somme, je suis fier de travailler chez Thales LAS à Limours, où je peux contribuer au développement de technologies de pointe pour la défense de
                            notre pays et de nos alliés. Mon travail sur la partie intégration continue des radars militaires est un défi passionnant.
                        </p>
                    ): null}
                    <button className={'bg-gray-200 hover:bg-gray-300 p-3 px-5 rounded-full text-center ml-90'} onClick={toggleTextThalesVisibility}>
                        {isTextThalesVisible ? '-' : '+'}
                    </button>
                </article>
                <article className={'entreprise rounded-xl mb-10 bg_pink'}>
                    <div className={'flex items-center'}>
                        <img src={weldom} alt='Weldom Logo' className={'img_carer mr-2'} />
                        <div className={'my-5'}>
                            <h1 className={'text-lg italic font-roboto'}>Conseiller de vente - CDI </h1>
                            <h2>De 2020 à 2021, les week-ends</h2>
                        </div>
                    </div>
                    <p className={'font-serif'}>
                        <span className=''>Pendant mes études</span>, j'ai travaillé en tant que vendeur et caissier.
                        J'ai eu l'opportunité de <span className=''>conseiller les clients</span> sur les différents produits disponibles en magasin. J'ai appris à
                        orienter les clients vers les outils, les matériaux et les accessoires les plus adaptés à leurs besoins.
                    </p>
                    {isTextWeldomVisible ? (
                        <p className={'font-serif'}>
                            J'ai également développé
                            ma capacité à <span className=''>proposer des solutions de bricolage à mes clients en fonction de leur niveau de compétence</span>. Cette expérience m'a permis
                            d'approfondir mes connaissances en matière de bricolage. <br />
                            En tant que caissier, j'ai également appris à tenir et à gérer une caisse. J'ai acquis une grande précision
                            dans la manipulation de l'argent et développé ma capacité à <span className=''>travailler efficacement.</span><br />
                            Au-delà de ces compétences techniques, cette expérience m'a également appris à <span className='font-bold'>être à l'écoute des clients, à répondre à leurs besoins
                            et à leurs attentes, et à travailler en équipe</span>. J'ai eu la chance de travailler avec des collègues passionnés par leur métier et qui
                            m'ont transmis leur savoir-faire. Grâce à cette expérience, j'ai acquis de nouvelles compétences, renforcé ma confiance en moi et cela m'a permis de
                            financer une partie de mes études et d'acquérir une expérience professionnelle très valorisante pour mon CV.
                        </p>
                    ):null}
                    <button className={'bg-gray-200 hover:bg-gray-300 p-3 px-5 rounded-full text-center ml-90'} id={"thales_plus"} onClick={toggleTextWeldomVisibility}>
                        {isTextWeldomVisible ? '-' : '+'}
                    </button>
                </article>
                <article className={'entreprise rounded-xl mb-10 bg_green'}>
                    <div className={'flex items-center'}>
                        <img src={restalliance} alt='Restalliance Logo' className='img_carer mr-2' />
                        <div className={'my-5'}>
                            <h1 className={'text-lg italic'}>Employé de restauration</h1>
                            <h2>Durant l'été 2022</h2>
                        </div>
                    </div>
                    <p className={'font-serif'}>
                        J'ai travailler dans le secteur de la restauration collective pendant plusieurs semaines,
                        notamment au sein du prestigieux hôtel Le Normandie à Deauville, ainsi qu'au Golf de Deauville.
                        J'ai travaillé dans la cuisine de l'établissement.
                    </p>
                    {isTextRestallianceVisible ? (
                        <p className={'font-serif'}>
                            J'ai eu l'opportunité de découvrir les différentes étapes de préparation
                            des plats, de la découpe des ingrédients à la présentation finale sur les assiettes ou encore sur
                            la mise en place des buffets. <br /> Ces expériences en restauration collective ont été pour moi
                            très enrichissantes sur le plan professionnel. J'ai appris à travailler dans des environnements
                            exigeants, où la qualité du service et des produits est primordiale.
                        </p>
                    ): null}

                    <button className={'bg-gray-200 hover:bg-gray-300 p-3 px-5 rounded-full text-center ml-90'} onClick={toggleTextRestallianceVisibility}>
                        {isTextRestallianceVisible ? '-' : '+'}
                    </button>
                </article>
                <article className={'entreprise rounded-xl mb-10 bg_yellow'}>
                    <div className={'flex items-center'}>
                        <img src={Mcdonald} alt='Mcdonald Logo' className='img_carer mr-2'/>
                        <div className={'my-5'}>
                            <h1 className={'text-lg italic'}>Equipier polyvalent</h1>
                            <h2>De Avril à Septembre - 2019</h2>
                        </div>
                    </div>
                    <p className={'font-serif'}>
                        J'ai travaillé chez McDonald's pendant 6 mois et cette expérience a été très enrichissante. En tant qu'équipier polyvalent,
                        j'ai occupé différents postes : <span className=''>préparation des aliments, service au comptoir, prise de commandes et nettoyage.</span> <br />
                    </p>
                    {isTextMcdonaldVisible ? (
                        <p className={'font-serif'}>
                            Cette expérience m'a appris à<span className=''> travailler rapidement et efficacement dans un environnement très dynamique et exigeant</span>.
                            J'ai appris à être à l'écoute des clients, à répondre à leurs besoins et à leurs attentes, tout en respectant les normes de qualité et de sécurité
                            alimentaire. Macdonald fonctionnant en travaillant à la chaine, j'ai développé ma capacité à travailler en équipe, à communiquer avec mes collègues
                            et à m'adapter à différentes situations.<br />

                            J'ai également appris l'importance de <span className=''>la rigueur, l'organisation et la gestion du stress</span>. En effet, la gestion du temps
                            et des stocks est primordiale pour assurer la satisfaction des clients et la qualité des produits ce qui m'a permi de développer ma capacité à gérer mon
                            temps et les priorités. <br />
                            Enfin, cette expérience m'a permis de découvrir un environnement professionnel très diversifié et multiculturel.
                        </p>
                    ): null}
                    <button className={'bg-gray-200 hover:bg-gray-300 p-3 px-5 rounded-full text-center ml-90'} onClick={toggleTextMcdonaldVisibility}>
                        {isTextMcdonaldVisible ? '-' : '+'}
                    </button>
                </article>
                <article className={'entreprise rounded-xl mb-10 bg_pink'}>
                    <div className={'flex items-center'}>
                        <img src={siarce} alt='Siarce Logo' className='img_carer mr-3' />
                        <div className={'my-5'}>
                            <h1 className={'text-lg italic'}>Chantiers Citoyens</h1>
                            <h2>En 2017 et en 2018</h2>
                        </div>
                    </div>
                    <p className={'font-serif'}>
                        J'ai participé à plusieurs chantiers citoyens organisés par Siarce et la mairie de ma ville. Ces chantiers avaient pour objectif d'aider
                        la ville à améliorer son cadre de vie en réalisant des <span className=''>travaux d'entretien et de rénovation de différents sites
                            publics tels que des parcs et des jardins</span>.<br />
                    </p>
                    {isTextSiarceVisible ? (
                        <p className={'font-serif'}>
                            Ces chantiers duraient une semaine et impliquaient la participation de nombreux volontaires entre 16 et 25 ans. Ensemble, nous avons travaillé
                            dur pour nettoyer, réparer et embellir les différents sites, dans une ambiance conviviale et solidaire.<br />

                            Cette expérience m'a permis de découvrir l'importance du travail en équipe et de la solidarité dans la réalisation de projets communs. J'ai également
                            renforcé mes liens avec ma communauté locale en contribuant activement à son développement.
                            En somme, ces chantiers citoyens ont été pour moi une expérience très enrichissante et gratifiante.
                        </p>
                    ) : null }
                    <button className={'bg-gray-200 hover:bg-gray-300 p-3 px-5 rounded-full text-center ml-90'} onClick={toggleTextSiarceVisibility}>
                        {isTextSiarceVisible ? '-' : '+'}
                    </button>
                </article>

            </section>
            <Footer></Footer>
        </>
    );
}
export default CarrerPath; 