import '../../index.css';

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectExample from "../../components/ProjectExample.jsx";
import img_ordonnancement from "../../assets/ordonnancement.png";
import {useState} from "react";

const projectOptions = [
    {
        id: "web",
        label: "WebSite",
        icon: "https://www.shareicon.net/data/2016/09/09/827488_browser_512x512.png",
        projectName: "Développement de plusieurs sites",
        imageSource: "https://www.devwerkz.com/wp-content/uploads/2020/01/DevWerkz_Web-design-and-development_01-Main-illust.png",
        githubLink: "https://github.com/Sawangg/madle",
        accent: "from-green-50 to-white",
        tags: ["UX", "React", "Front-end"],
        content: (
            <>
                <p>
                    Ces projets m’ont aidé à consolider mon <span className={"font-semibold text-primary-green"}>sens du design et de l’expérience utilisateur</span> en créant des interfaces web fonctionnelles et modernes.
                    <span className={"font-semibold text-primary-green"}>Développement du site internet de la société foodconsulting.</span>
                </p>
                <a href={"https://www.foodconsultingexpertise.fr"} target={"_blank"} rel={"noreferrer"} className={"inline-flex items-center gap-3 rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"}>
                    foodconsultingexpertise.fr
                </a>
            </>
        ),
    },{
        id: "huffman",
        label: "C",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        projectName: "Algorithme de Huffman",
        imageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Huffman_tree_2.svg/1200px-Huffman_tree_2.svg.png",
        githubLink: "",
        accent: "from-amber-50 to-white",
        tags: ["Compression", "Structures de données", "Algorithmique"],
        content: (
            <p>
                L’algorithme de Huffman permet de <span className={"font-semibold text-primary-green"}>compressser des données</span> en attribuant des codes plus courts aux symboles les plus fréquents.
                J’ai utilisé cette logique pour travailler sur des problématiques de réduction de taille et de performance.
            </p>
        ),
    },
    {
        id: "automate",
        label: "Java",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
        projectName: "Projet Automate",
        imageSource: "https://gallium.inria.fr/~maranget/X/421/poly/poly119.png",
        githubLink: "https://github.com/AntoninLmp/Projet_Automate",
        accent: "from-green-50 to-white",
        tags: ["Automates", "JUnit", "Spring Boot"],
        content: (
            <p>
                Ce projet m’a permis de mettre en place un traitement complet d’automates finis avec <span className={"font-semibold text-primary-green"}>déterminisation, minimisation et reconnaissance de mots</span>.
                J’ai aussi travaillé sur la qualité logicielle avec des tests unitaires et d’intégration.
            </p>
        ),
    },
    {
        id: "ordonnancement",
        label: "Python",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png",
        projectName: "Algorithme d’ordonnancement",
        imageSource: img_ordonnancement,
        githubLink: "https://github.com/AntoninLmp/Algorithme_Ordonnancement",
        accent: "from-amber-50 to-white",
        tags: ["Python", "Pytests", "CI/CD"],
        content: (
            <p>
                J’ai implémenté une solution d’ordonnancement avec une approche claire et structurée. L’objectif était d’améliorer la <span className={"font-semibold text-primary-green"}>lisibilité du code</span> et la robustesse du traitement.
            </p>
        ),
    },
    
    {
        id: "net",
        label: "C# & .NET",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1920px-Logo_C_sharp.svg.png",
        projectName: "Shard API, Jeu de stratégie temps réel dans l’espace",
        imageSource: "https://static.vecteezy.com/system/resources/previews/015/720/527/non_2x/spaceship-illustration-isolated-on-transparent-background-png.png",
        githubLink: "",
        accent: "from-amber-50 to-white",
        tags: ["API", "Temps réel", "Architecture"],
        content: (
            <p>
                Le projet Shard a mis en avant des enjeux techniques riches autour de la <span className={"font-semibold text-primary-green"}>gestion d’événements en temps réel</span> et de la collaboration en équipe.
            </p>
        ),
    },
    {
        id: "android",
        label: "Android Studio",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg",
        projectName: "Football Tracker : Statistiques de match",
        imageSource: "https://developer.android.com/static/studio/images/device-mirroring.png",
        githubLink: "https://github.com/AntoninLmp/Football-Tracker",
        accent: "from-green-50 to-white",
        tags: ["Mobile", "API", "UX mobile"],
        content: (
            <p>
                Cette application m’a permis de travailler sur <span className={"font-semibold text-primary-green"}>l’intégration d’API</span> et la conception d’une interface mobile fluide et intuitive.
            </p>
        ),
    },
    {
        id: "react",
        label: "React",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        projectName: "Front library for building user interfaces",
        imageSource: "https://www.officialgates.com/assets/images/banner-images/react-native-app.png",
        githubLink: "https://github.com/Synops-ia/WebApp",
        accent: "from-amber-50 to-white",
        tags: ["React", "Portfolio", "Interfaces dynamiques"],
        content: (
            <>
                <p>
                    Mon parcours avec React a commencé sur ce portfolio puis s’est étendu à des projets plus complets, avec une <span className={"font-semibold text-primary-green"}>volonté constante d’apprendre et d’itérer</span>.
                </p>
                
            </>
        ),
    },
];

const overviewCards = [
    {
        title: "Diversité des technologies",
        text: "C, Java, Python, React, .NET et mobile : La diversité des technologies constitue un pilier central de mon parcours d'ingénieur. J'ai eu l'opportunité de travailler avec un large éventail de langages et d'outils.",
    },
    {
        title: "Travail en équipe",
        text: "Collaborer avec des équipes multidisciplinaires m'a permis de développer des compétences solides en communication, en résolution de problèmes et en leadership. Ensemble, nous avons atteint des objectifs ambitieux.",
    },
    {
        title: "Construction de projet",
        text: "Le cycle de vie d'un projet est un processus dynamique, allant de la planification à la livraison, qui exige flexibilité et apprentissage continu. Maîtriser ce cycle permet de naviguer efficacement à travers les défis et les opportunités.",
    },
    {
        title: "Enrichissement personnel",
        text: "Chaque projet est une occasion d'apprendre et de grandir, en perfectionnant mes compétences techniques et en renforçant ma capacité à résoudre des problèmes complexes. Cette quête d'amélioration continue est au cœur de mon parcours professionnel.",
    },
];

const Project = () => {
    const [activeProject, setActiveProject] = useState("web");
    const selectedProject = projectOptions.find((project) => project.id === activeProject) ?? projectOptions[0];

    return (
        <>
            <Header backgroundColor={"bg-green-50"} />
            <div className={"bg-green-50 text-center"}>
                <section className={"mx-auto max-w-6xl px-6 pb-10 pt-8 lg:px-8 lg:pb-16"}>
                    <div className={"rounded-[32px] px-6 py-10 backdrop-blur sm:px-8 lg:px-12"}>
                        <div className={"flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"}>
                            <div className={"max-w-2xl text-left"}>
                                <span className={"inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-green"}>
                                    Portfolio projets
                                </span>
                                <h1 className={"mt-4 font-display text-4xl text-primary-green md:text-5xl lg:text-6xl"}>
                                    Mes projets.
                                </h1>
                            </div>

                            <div className={"grid gap-3 sm:grid-cols-2 lg:w-[360px]"}>
                                <div className={"rounded-2xl bg-emerald-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>7</p>
                                    <p className={"text-sm text-slate-600"}>technologies explorées</p>
                                </div>
                                <div className={"rounded-2xl bg-amber-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>4</p>
                                    <p className={"text-sm text-slate-600"}>grands axes de développement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"mx-auto max-w-6xl px-6 pb-8 lg:px-8"}>
                    <div className={"grid gap-4 md:grid-cols-2 xl:grid-cols-4"}>
                        {overviewCards.map((card) => (
                            <article
                                key={card.title}
                                className={"rounded-[24px] border border-white/70 bg-white/80 p-5 text-left shadow-[0_18px_70px_-35px_rgba(15,23,42,0.15)] backdrop-blur"}
                            >
                                <p className={"text-sm font-semibold uppercase tracking-[0.3em] text-primary-green"}>Focus</p>
                                <h2 className={"mt-3 font-display text-xl text-primary-green"}>{card.title}</h2>
                                <p className={"mt-3 text-sm leading-7 text-slate-700"}>{card.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={"mx-auto max-w-6xl px-6 pb-16 lg:px-8"}>
                    <div className={"mb-6 text-left"}>
                        <p className={"text-sm font-semibold uppercase tracking-[0.3em] text-primary-green"}>Explorateur de projets</p>
                        <h2 className={"mt-3 font-display text-3xl text-primary-green md:text-4xl"}>
                            Choisissez une technologie pour découvrir un projet.
                        </h2>
                    </div>

                    <div className={"mb-6 flex flex-wrap justify-center gap-3"}>
                        {projectOptions.map((project) => {
                            const isActive = activeProject === project.id;

                            return (
                                <button
                                    key={project.id}
                                    type={"button"}
                                    onClick={() => setActiveProject(project.id)}
                                    className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                        isActive
                                            ? "bg-primary-green text-white shadow-[0_16px_50px_-25px_rgba(27,94,63,0.9)]"
                                            : "bg-white/85 text-slate-700 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)]"
                                    }`}
                                >
                                    <img src={project.icon} alt={project.label} className={"h-6 w-6"} />
                                    <span>{project.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    <ProjectExample
                        projectName={selectedProject.projectName}
                        imageSource={selectedProject.imageSource}
                        content={selectedProject.content}
                        githubLink={selectedProject.githubLink}
                        accent={selectedProject.accent}
                        tags={selectedProject.tags}
                    />
                </section>

                <section className={"mx-auto max-w-6xl px-6 pb-16 lg:px-8"}>
                    <div className={"rounded-[28px] bg-white/80 px-6 py-8 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.18)] backdrop-blur sm:px-8"}>
                        <div className={"text-left"}>
                            <p className={"text-sm font-semibold uppercase tracking-[0.3em] text-primary-green"}>Autres technologies</p>
                            <h2 className={"mt-3 font-display text-3xl text-primary-green md:text-4xl"}>
                                Une stack élargie pour rester polyvalent.
                            </h2>
                        </div>

                        <div className={"mt-6 grid gap-4 md:grid-cols-3"}>
                            <div className={"rounded-[22px] bg-emerald-50 px-4 py-5 text-left"}>
                                <img
                                    src="https://user.oc-static.com/upload/2021/11/10/1636542639252_Moby-logo.png"
                                    alt="Docker"
                                    className={"h-16 w-auto object-contain"}
                                />
                                <p className={"mt-3 text-sm font-semibold text-slate-800"}>Docker</p>
                            </div>
                            <div className={"rounded-[22px] bg-amber-50 px-4 py-5 text-left"}>
                                <img
                                    src="https://logodownload.org/wp-content/uploads/2022/05/linux-logo-0.png"
                                    alt="Linux"
                                    className={"h-16 w-auto object-contain"}
                                />
                                <p className={"mt-3 text-sm font-semibold text-slate-800"}>Linux</p>
                            </div>
                            <div className={"rounded-[22px] bg-pink-50 px-4 py-5 text-left"}>
                                <img
                                    src="https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-04/K8S-logo.png"
                                    alt="Kubernetes"
                                    className={"h-16 w-auto object-contain"}
                                />
                                <p className={"mt-3 text-sm font-semibold text-slate-800"}>Kubernetes</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer backgroundColor={"bg-green-50"} />
        </>
    );
};

export default Project;