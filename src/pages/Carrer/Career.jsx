import '../../index.css';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import JobArticle from "../../components/JobArticle.jsx";
// Importing images
import restalliance from '../../assets/restalliance-rmbg.png';
import thales from '../../assets/thales.png';
import alten from '../../assets/Logo_alten.png';
import Mcdonald from '../../assets/McDonalds_2-rmbg.png';
import siarce from '../../assets/siarce-rmbg.png';
import weldom from '../../assets/weldom_rmbg.png';

function Career() {

    return (
        <>
            <Header backgroundColor={"bg-green-50"}> </Header>
            <section className={"text-center bg-green-50"}>
                {/* Name of this section */}
                <div className ={"mx-auto max-w-6xl px-6 pb-8 pt-10 lg:px-8 lg:pb-10"}>
                    <div id="career_title" className={"rounded-[32px] bg-white/80 px-6 py-10 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.2)] backdrop-blur sm:px-8 lg:px-12"}>
                        <div className={"flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"}>
                            <div className={"max-w-2xl text-left"}>
                                <span className={"inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-green"}>
                                    Parcours professionnel
                                </span>
                                <h1 className={"mt-4 font-display text-4xl text-primary-green md:text-5xl lg:text-6xl"}>
                                    Mes experiences professionnelles.
                                </h1>
                                <p className={"mt-4 text-sm leading-7 text-slate-700 md:text-base"}>
                                    J'ai eu l'opportunité de travailler dans différents secteurs, ce qui m'a permis d'acquérir une expérience professionnelle diversifiée et enrichissante. Voici un aperçu de mes expériences professionnelles les plus significatives.
                                </p>
                            </div>
                            <div className={" sm:grid-cols-3 lg:w-[380px]"}>
                                <div className={"rounded-2xl mb-4 bg-emerald-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>2</p>
                                    <p className={"text-sm text-slate-600"}>années d'alternance</p>
                                </div>
                                <div className={"rounded-2xl mb-4 bg-amber-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>4</p>
                                    <p className={"text-sm text-slate-600"}>années d'expérience</p>
                                </div>
                                <div className={"rounded-2xl mb-4 bg-slate-100 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>2</p>
                                    <p className={"text-sm text-slate-600"}>emplois étudiants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={"mx-auto mt-16 max-w-6xl px-6 pb-16 lg:px-8"}>
                    <div className={"mb-8 text-left"}>
                        <p className={"text-sm font-semibold uppercase tracking-[0.3em] text-primary-green"}>Timeline professionnelle</p>
                        <h2 className={"mt-3 font-display text-3xl text-primary-green md:text-4xl"}>
                            Mon parcours professionnel
                        </h2>
                        <p className={"mt-3 max-w-2xl text-sm leading-7 text-slate-700 md:text-base"}>
                            Voici un aperçu de mes expériences professionnelles les plus significatives, qui illustrent mon parcours diversifié et enrichissant dans différents secteurs d'activité.
                        </p>
                    </div>

                    <div className={"relative"}>
                        <div className={"absolute left-5 top-0 hidden h-full w-px bg-emerald-200 md:block"} />
                        <div className={"space-y-6 md:space-y-8"}>
                            <Job Article
                                title={"Développeur web - front-end (Safran Colombelles)"}
                                subtitle={"De 2024 à aujourd'hui"}
                                summary={"Conception et développement de nouvelles fonctionnalités pour deux interfaces web distinctes dédiées au tracking et à la visualisation de satellites(Wewatch). Evolution visuel et optimisation de performance côté client. Gestion des releases, correction de bugs et mise à jour continue du système pour garantir la fiabilité de l'application."}
                                imgSociety={alten}
                                accent={"from-green-50 to-white"}
                                badge={"CDI"}
                                highlights={[
                                    { title: "Modernisation IHM & UX", text: "Etre force de proposition pour améliorer et moderniser le visuel de l'IHM", icon: "https://www.svgrepo.com/show/502440/computer.svg" },
                                    { title: "Nouvelle fonctionnalité", text: "Intégration de nouvelles fonctionnalités de visualisation de satellites", icon: "https://www.svgrepo.com/show/445268/new-rectangle-solid.svg" },
                                    { title: "Spatiale", text: "Développement de nouvelles connaissances sur l'espace et les satellites", icon: "https://www.svgrepo.com/show/519074/satellite.svg" },
                                ]}
                            />
                            <JobArticle
                                title={"Alternant ingénieur en informatique"}
                                subtitle={"De 2022 à 2024"}
                                summary={"Amélioration de  l'intégration continue pour les radars de la famille des Multi Fonctional Radars (MFR). Optimisation et fiabilisation grâce à l'introduction de nouvelles méthodes de test et d'intégration."}
                                imgSociety={thales}
                                accent={"from-green-50 to-white"}
                                badge={"Alternance"}
                                highlights={[
                                    { title: "CI/CD", text: "Intégration continue", icon: "https://www.svgrepo.com/show/502440/computer.svg" },
                                    { title: "Radar", text: "Environnement de développement radar", icon: "https://www.svgrepo.com/show/121436/radar.svg" },
                                    { title: "Déploiements", text: "Intégration continue des radars militaires", icon: "https://www.svgrepo.com/show/233976/suitcase-portfolio.svg" },
                                ]}
                            />
                            <JobArticle
                                title={"Conseiller de vente - CDI"}
                                subtitle={"De 2020 à 2021, week-ends"}
                                summary={"Conseils et accompagnement client dans le domaine du bricolage. Caisses et gestion de stock."}
                                imgSociety={weldom}
                                accent={"from-green-50 to-white"}
                                badge={"CDI"}
                                highlights={[
                                    { title: "Bricolage", text: "Solutions de bricolage", icon: "https://www.svgrepo.com/show/485388/hammer.svg" },
                                    { title: "Clientèle", text: "Service client", icon: "https://cdn-icons-png.flaticon.com/512/2534/2534183.png" },
                                    { title: "Caisse", text: "Gestion des caisses", icon: "https://cdn-icons-png.flaticon.com/512/4689/4689923.png" },
                                ]}
                            />
                            <JobArticle
                                title={"Employé de restauration"}
                                subtitle={"Durant l'été 2022"}
                                summary={"Travail saisonnier dans la restauration, avec des responsabilités variées allant de la préparation des plats à la qualité du service, en passant par le travail en équipe."}
                                imgSociety={restalliance}
                                accent={"from-green-50 to-white"}
                                badge={"Saisonnier"}
                                highlights={[
                                    { title: "Cuisine", text: "Préparation des plats", icon: "https://www.svgrepo.com/show/429377/bibimbub-cooking-food.svg " },
                                    { title: "Service", text: "Qualité du service", icon: "https://www.svgrepo.com/show/244463/dish.svg" },
                                    { title: "Équipe", text: "Travail en équipe", icon: "https://www.svgrepo.com/show/317748/team.svg" },
                                ]}
                            />
                            <JobArticle
                                title={"Equipier polyvalent"}
                                subtitle={"De avril à septembre 2019"}
                                summary={"Rôle polyvalent en environnement rapide, avec une attention particulière à la cadence, à la convivialité et à la coordination."}
                                imgSociety={Mcdonald}
                                accent={"from-green-50 to-white"}
                                badge={"Étudiant"}
                                highlights={[
                                    { title: "Vitesse", text: "Service rapide", icon: "https://www.svgrepo.com/show/521655/fast-forward.svg" },
                                    { title: "Polyvalence", text: "Polyvalence", icon: "https://www.svgrepo.com/show/493315/fast-food-male-clerk-upper-body.svg" },
                                    { title: "Équipe", text: "Travail en équipe", icon: "https://www.svgrepo.com/show/317748/team.svg" },
                                ]}
                            />
                            <JobArticle
                                title={"Chantiers Citoyens"}
                                subtitle={"En 2017 et 2018"}
                            summary={"Implication dans des projets collectifs et solidaires sur une semaine. Avec une ouverture sur la communauté, le but étant de participer a des actions dans sa commune afin d'améliorer le quotidien des habitants."}
                                imgSociety={siarce}
                                accent={"from-green-50 to-white"}
                                badge={"Engagement"}
                                highlights={[
                                    { title: "Solidarité", text: "Solidarité", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208264.png" },
                                    { title: "Communauté", text: "Contribution à la communauté locale", icon: "https://www.svgrepo.com/show/216839/newspaper-news.svg" },
                                    { title: "Expérience", text: "Expérience enrichissante", icon: "https://www.svgrepo.com/show/478789/information.svg" },
                                ]}
                                isLast={true}
                            />
                        </div>
                    </div>
                </section>
            </section>
            <Footer backgroundColor={"bg-green-50"}></Footer>
        </>
    );
}

export default Career;