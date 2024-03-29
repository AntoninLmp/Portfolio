import '../../index.css';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import JobArticle from "../../components/JobArticle.jsx";
// Importing images
import restalliance from '../../assets/restalliance-rmbg.png';
import thales from '../../assets/thales.png';
import Mcdonald from '../../assets/McDonalds_2-rmbg.png';
import siarce from '../../assets/siarce-rmbg.png';
import weldom from '../../assets/weldom_rmbg.png';

function Career() {

    return (
        <>
            <Header backgroundColor={"bg-pink-50"}> </Header>
            <section className={"text-center bg-pink-50"}>
                {/* Name of this section */}
                <div className={"mx_30 bg-amber-50 rounded-full py-3"}>
                    <h1 className={"text-7xl font-Display c_yellow my-20"}>Mes éxperiences professionnelles.</h1>
                    <img src={"https://www.svgrepo.com/show/233976/suitcase-portfolio.svg"} alt={""}
                         className={"w-20 absolute top-[340px]"}/>
                </div>
                <section className='mx-40 font-roboto mt-24 grid grid-cols-2 gap-20'>
                    <JobArticle
                        bgColor={"bg-amber-100"}
                        titre={"Alternant développeur informatique"}
                        subtitle={"De 2022 à aujourd'hui"}
                        imgSociety={thales}
                        imageText_1={"https://www.svgrepo.com/show/502440/computer.svg"}
                        text_1={"Intégration continue"}
                        imageText_2={"https://www.svgrepo.com/show/121436/radar.svg"}
                        text_2={"Environnement de développement radar"}
                        imageText_3={"https://www.svgrepo.com/show/233976/suitcase-portfolio.svg"}
                        text_3={"Intégration continue des radars militaires"}
                        flexNumber={"1"} />
                    <JobArticle
                        bgColor={"bg-green-100"}
                        titre={"Conseiller de vente - CDI"}
                        subtitle={"De 2020 à 2021, les week-ends"}
                        imgSociety={weldom}
                        imageText_1={"https://www.svgrepo.com/show/485388/hammer.svg"}
                        text_1={"Solutions de Bricolage"}
                        imageText_2={"https://cdn-icons-png.flaticon.com/512/2534/2534183.png"}
                        text_2={"Service client"}
                        imageText_3={"https://cdn-icons-png.flaticon.com/512/4689/4689923.png"}
                        text_3={"Gestion des caisses"}
                        flexNumber={"1"}/>
                    <JobArticle
                        bgColor={"bg-pink-200"}
                        titre={"Employé de restauration"}
                        subtitle={"Durant l'été 2022"}
                        imgSociety={restalliance}
                        imageText_1={"https://www.svgrepo.com/show/429377/bibimbub-cooking-food.svg "}
                        text_1={"Préparation des plats"}
                        imageText_2={"https://www.svgrepo.com/show/244463/dish.svg"}
                        text_2={"Qualité du service"}
                        imageText_3={"https://www.svgrepo.com/show/317748/team.svg"}
                        text_3={"Travail en équipe"}
                        flexNumber={"1"} />
                    <JobArticle
                        bgColor={"bg-amber-100"}
                        titre={"Equipier polyvalent"}
                        subtitle={"De Avril à Septembre - 2019"}
                        imgSociety={Mcdonald}
                        imageText_1={"https://www.svgrepo.com/show/521655/fast-forward.svg"}
                        text_1={"Service Rapide"}
                        imageText_2={"https://www.svgrepo.com/show/493315/fast-food-male-clerk-upper-body.svg"}
                        text_2={"Polyvalence"}
                        imageText_3={"https://www.svgrepo.com/show/317748/team.svg"}
                        text_3={"Travail en Équipe"}
                        flexNumber={"1"} />
                    <JobArticle
                        bgColor={"bg-green-100"}
                        titre={"Chantiers Citoyens"}
                        subtitle={"En 2017 et en 2018"}
                        imgSociety={siarce}
                        imageText_1={"https://cdn-icons-png.flaticon.com/512/3208/3208264.png"}
                        text_1={"Solidarité"}
                        imageText_2={"https://www.svgrepo.com/show/216839/newspaper-news.svg"}
                        text_2={"Contribution à la Communauté Locale"}
                        imageText_3={"https://www.svgrepo.com/show/478789/information.svg"}
                        text_3={"Expérience Enrichissante"}
                        flexNumber={"1"} />

                   {/*
                        <p className={'font-serif'}>
                            Je suis actuellement en <span
                            className=''>alternance chez Thales Land Air System à Limours</span>, où je travaille sur la
                            partie intégration
                            continue des radars militaires développés par l'entreprise. Notre site est spécialisé
                            dans <span className=''>la conception et la fabrication de systèmes électroniques
                        de défense pour les forces armées françaises</span>. <br/>
                        </p>
                        {isTextThalesVisible ? (
                            <p className={'font-serif'}>
                                Mon travail consiste à <span
                                className=''>améliorer la partie intégration continue</span> des radars, en utilisant
                                les dernières technologies et méthodologies
                                en la matière. J'ai pour mission de garantir la qualité du processus de développement,
                                en automatisant les tests et en assurant la traçabilité des
                                modifications apportées au code source. <br/>
                                Pour ce faire, je travaille en étroite collaboration avec les équipes de développement,
                                de test et de validation des radars.
                                Mon poste chez Thales LAS à Limours est très stimulant. <br/>
                                En somme, je suis fier de travailler chez Thales LAS à Limours, où je peux contribuer au
                                développement de technologies de pointe pour la défense de
                                notre pays et de nos alliés. Mon travail sur la partie intégration continue des radars
                                militaires est un défi passionnant.
                            </p>
                        ) : null}

                            <span className=''>Pendant mes études</span>, j'ai travaillé en tant que vendeur et
                            caissier.
                            J'ai eu l'opportunité de <span className=''>conseiller les clients</span> sur les différents
                            produits disponibles en magasin. J'ai appris à
                            orienter les clients vers les outils, les matériaux et les accessoires les plus adaptés à
                            leurs besoins.
                        </p>
                        {isTextWeldomVisible ? (
                            <p className={'font-serif'}>
                                J'ai également développé
                                ma capacité à <span className=''>proposer des solutions de bricolage à mes clients en fonction de leur niveau de compétence</span>.
                                Cette expérience m'a permis
                                d'approfondir mes connaissances en matière de bricolage. <br/>
                                En tant que caissier, j'ai également appris à tenir et à gérer une caisse. J'ai acquis
                                une grande précision
                                dans la manipulation de l'argent et développé ma capacité à <span className=''>travailler efficacement.</span><br/>
                                Au-delà de ces compétences techniques, cette expérience m'a également appris à <span
                                className='font-bold'>être à l'écoute des clients, à répondre à leurs besoins
                            et à leurs attentes, et à travailler en équipe</span>. J'ai eu la chance de travailler avec
                                des collègues passionnés par leur métier et qui
                                m'ont transmis leur savoir-faire. Grâce à cette expérience, j'ai acquis de nouvelles
                                compétences, renforcé ma confiance en moi et cela m'a permis de
                                financer une partie de mes études et d'acquérir une expérience professionnelle très
                                valorisante pour mon CV.
                            </p>
                        ) : null}

                        <p className={'font-serif'}>
                            J'ai travailler dans le secteur de la restauration collective pendant plusieurs semaines,
                            notamment au sein du prestigieux hôtel Le Normandie à Deauville, ainsi qu'au Golf de
                            Deauville.
                            J'ai travaillé dans la cuisine de l'établissement.
                        </p>
                        {isTextRestallianceVisible ? (
                            <p className={'font-serif'}>
                                J'ai eu l'opportunité de découvrir les différentes étapes de préparation
                                des plats, de la découpe des ingrédients à la présentation finale sur les assiettes ou
                                encore sur
                                la mise en place des buffets. <br/> Ces expériences en restauration collective ont été
                                pour moi
                                très enrichissantes sur le plan professionnel. J'ai appris à travailler dans des
                                environnements
                                exigeants, où la qualité du service et des produits est primordiale.
                            </p>
                        ) : null}

                        <p className={'font-serif'}>
                            J'ai travaillé chez McDonald's pendant 6 mois et cette expérience a été très enrichissante.
                            En tant qu'équipier polyvalent,
                            j'ai occupé différents postes : <span className=''>préparation des aliments, service au comptoir, prise de commandes et nettoyage.</span>
                            <br/>
                        </p>
                            <p className={'font-serif'}>
                                Cette expérience m'a appris à<span className=''> travailler rapidement et efficacement dans un environnement très dynamique et exigeant</span>.
                                J'ai appris à être à l'écoute des clients, à répondre à leurs besoins et à leurs
                                attentes, tout en respectant les normes de qualité et de sécurité
                                alimentaire. Macdonald fonctionnant en travaillant à la chaine, j'ai développé ma
                                capacité à travailler en équipe, à communiquer avec mes collègues
                                et à m'adapter à différentes situations.<br/>

                                J'ai également appris l'importance de <span className=''>la rigueur, l'organisation et la gestion du stress</span>.
                                En effet, la gestion du temps
                                et des stocks est primordiale pour assurer la satisfaction des clients et la qualité des
                                produits ce qui m'a permi de développer ma capacité à gérer mon
                                temps et les priorités. <br/>
                                Enfin, cette expérience m'a permis de découvrir un environnement professionnel très
                                diversifié et multiculturel.
                            </p>

                        <p className={'font-serif'}>
                            J'ai participé à plusieurs chantiers citoyens organisés par Siarce et la mairie de ma ville.
                            Ces chantiers avaient pour objectif d'aider
                            la ville à améliorer son cadre de vie en réalisant des <span className=''>travaux d'entretien et de rénovation de différents sites
                            publics tels que des parcs et des jardins</span>.<br/>
                        </p>
                        {isTextSiarceVisible ? (
                            <p className={'font-serif'}>
                                Ces chantiers duraient une semaine et impliquaient la participation de nombreux
                                volontaires entre 16 et 25 ans. Ensemble, nous avons travaillé
                                dur pour nettoyer, réparer et embellir les différents sites, dans une ambiance
                                conviviale et solidaire.<br/>

                                Cette expérience m'a permis de découvrir l'importance du travail en équipe et de la
                                solidarité dans la réalisation de projets communs. J'ai également
                                renforcé mes liens avec ma communauté locale en contribuant activement à son
                                développement.
                                En somme, ces chantiers citoyens ont été pour moi une expérience très enrichissante et
                                gratifiante.
                            </p>
                    */}
                </section>
            </section>
            <Footer backgroundColor={"bg-pink-50"}></Footer>
        </>
    );
}

export default Career;