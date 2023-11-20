import Navbar from '../Global/Navbar.jsx';
import Header from "../Global/Header";
import '../index.css';
import './CarrerPath.css';
import Footer from '../Global/Footer.jsx';

import restalliance from '../../public/restalliance.png';
import thales from '../../public/thales.png';
import Mcdonald from '../../public/McDonalds_2.jpg';
import siarce from '../../public/siarce.png';
import weldom from '../../public/weldom.png';

function CarrerPath() {
    return (
        < >
            <Header></Header>
            <Navbar></Navbar>
            <section className='d_flex mx_10 flex_wrap justify_b'>
                <article className='entreprise'>
                    <img src={thales} alt='Thales Logo' className='img_carrer_entreprise' />
                    <h1 className='c_green'>Alternant développeur informatique - 2022/Aujourd'hui </h1>
                    <p>
                        Je suis actuellement en <span className='c_green'>alternance chez Thales Land Air System à Limours</span>, où je travaille sur la partie intégration
                        continue des radars militaires développés par l'entreprise. Notre site est spécialisé dans <span className='c_green'>la conception et la fabrication de systèmes électroniques
                            de défense pour les forces armées françaises</span>. <br />

                        Mon travail consiste à <span className='c_green'>améliorer la partie intégration continue</span> des radars, en utilisant les dernières technologies et méthodologies
                        en la matière. J'ai pour mission de garantir la qualité du processus de développement, en automatisant les tests et en assurant la traçabilité des
                        modifications apportées au code source. <br />
                        Pour ce faire, je travaille en étroite collaboration avec les équipes de développement, de test et de validation des radars.
                        Mon poste chez Thales LAS à Limours est très stimulant. <br />
                        En somme, je suis fier de travailler chez Thales LAS à Limours, où je peux contribuer au développement de technologies de pointe pour la défense de
                        notre pays et de nos alliés. Mon travail sur la partie intégration continue des radars militaires est un défi passionnant.
                    </p>
                </article>
                <article className='entreprise'>
                    <img src={weldom} alt='weldom Logo' className='img_carrer_entreprise' />
                    <h1 className='c_green'>Conseiller de vente - CDI (week-end) - 2020/2021 </h1>
                    <p>
                        <span className='c_green'>Pendant mes études</span>, j'ai travaillé en tant que vendeur et caissier.
                        J'ai eu l'opportunité de <span className='c_green'>conseiller les clients</span> sur les différents produits disponibles en magasin. J'ai appris à
                        orienter les clients vers les outils, les matériaux et les accessoires les plus adaptés à leurs besoins. J'ai également développé
                        ma capacité à <span className='c_green'>proposer des solutions de bricolage à mes clients en fonction de leur niveau de compétence</span>. Cette expérience m'a permis
                        d'approfondir mes connaissances en matière de bricolage. <br />
                        En tant que caissier, j'ai également appris à tenir et à gérer une caisse. J'ai acquis une grande précision
                        dans la manipulation de l'argent et développé ma capacité à <span className='c_green'>travailler efficacement.</span><br />
                        Au-delà de ces compétences techniques, cette expérience m'a également appris à <span className='c_green bold'>être à l'écoute des clients, à répondre à leurs besoins
                            et à leurs attentes, et à travailler en équipe</span>. J'ai eu la chance de travailler avec des collègues passionnés par leur métier et qui
                        m'ont transmis leur savoir-faire. Grâce à cette expérience, j'ai acquis de nouvelles compétences, renforcé ma confiance en moi et cela m'a permis de
                        financer une partie de mes études et d'acquérir une expérience professionnelle très valorisante pour mon CV.
                    </p>
                </article>
                <article className='entreprise'>
                    <img src={restalliance} alt='Restalliance Logo' className='img_carrer_entreprise' />
                    <h1 className='c_green'>Employé de restauration - Août - 2022 </h1>
                    <p>
                        J'ai travailler dans le secteur de la restauration collective pendant plusieurs semaines, notamment au sein du prestigieux hôtel Le Normandie à Deauville,
                        ainsi qu'au Golf de Deauville. J'ai travaillé dans la cuisine de l'établissement. J'ai eu l'opportunité de découvrir les différentes étapes de préparation
                        des plats, de la découpe des ingrédients à la présentation finale sur les assiettes ou encore sur la mise en place des buffets. <br />
                        Ces expériences en restauration collective ont été pour moi très enrichissantes sur le plan professionnel. J'ai appris à travailler dans des environnements
                        exigeants, où la qualité du service et des produits est primordiale.
                    </p>
                </article>
                <article className='entreprise'>
                    <img src={Mcdonald} alt='Mcdonald Logo' className='img_carrer_entreprise' />
                    <h1 className='c_green'>Equipier polyvalent - Avril/Septembre - 2019 </h1>
                    <p>
                        J'ai travaillé chez McDonald's pendant 6 mois et cette expérience a été très enrichissante. En tant qu'équipier polyvalent,
                        j'ai occupé différents postes : <span className='c_green'>préparation des aliments, service au comptoir, prise de commandes et nettoyage.</span> <br />

                        Cette expérience m'a appris à<span className='c_green'> travailler rapidement et efficacement dans un environnement très dynamique et exigeant</span>.
                        J'ai appris à être à l'écoute des clients, à répondre à leurs besoins et à leurs attentes, tout en respectant les normes de qualité et de sécurité
                        alimentaire. Macdonald fonctionnant en travaillant à la chaine, j'ai développé ma capacité à travailler en équipe, à communiquer avec mes collègues
                        et à m'adapter à différentes situations.<br />

                        J'ai également appris l'importance de <span className='c_green'>la rigueur, l'organisation et la gestion du stress</span>. En effet, la gestion du temps
                        et des stocks est primordiale pour assurer la satisfaction des clients et la qualité des produits ce qui m'a permi de développer ma capacité à gérer mon
                        temps et les priorités. <br />
                        Enfin, cette expérience m'a permis de découvrir un environnement professionnel très diversifié et multiculturel.
                    </p>
                </article>
                <article className='entreprise'>
                    <img src={siarce} alt='Siarce Logo' className='img_carrer_entreprise' />
                    <h1 className='c_green'>Chantiers Citoyens - 2017 et 2018 </h1>
                    <p>
                        J'ai participé à plusieurs chantiers citoyens organisés par Siarce et la mairie de ma ville. Ces chantiers avaient pour objectif d'aider
                        la ville à améliorer son cadre de vie en réalisant des <span className='c_green'>travaux d'entretien et de rénovation de différents sites
                            publics tels que des parcs et des jardins</span>.<br />

                        Ces chantiers duraient une semaine et impliquaient la participation de nombreux volontaires entre 16 et 25 ans. Ensemble, nous avons travaillé
                        dur pour nettoyer, réparer et embellir les différents sites, dans une ambiance conviviale et solidaire.<br />

                        Cette expérience m'a permis de découvrir l'importance du travail en équipe et de la solidarité dans la réalisation de projets communs. J'ai également
                        renforcé mes liens avec ma communauté locale en contribuant activement à son développement.
                        En somme, ces chantiers citoyens ont été pour moi une expérience très enrichissante et gratifiante.
                    </p>
                </article>

            </section>
            <Footer></Footer>
        </>
    );
}
export default CarrerPath; 