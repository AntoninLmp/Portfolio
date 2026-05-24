import '../../index.css';

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const studies = [
    {
        school: "EFREI Paris, Villejuif",
        years: "2020 - 2024",
        title: "École d’ingénieurs spécialisée dans le numérique",
        description:
            "À l’EFREI, j’ai consolidé mes compétences techniques et élargi mes connaissances en ingénierie informatique dans un environnement dynamique et stimulant. C’est pendant cette période que j’ai pu structurer mon profil et approfondir mes capacités de projet.",
        image:
            "https://storage.letudiant.fr/osp/cards/949/Logo-Generique-1-251113123328.png",
        alt: "EFREI Paris",
        badge: "Diplôme",
        detail: "Ingénieur en informatique"
    },
    {
        school: "ESSCA, Budapest",
        years: "Semestre en 2021",
        title: "Échange académique et ouverture culturelle",
        description:
            "Mon semestre à Budapest a été une expérience forte, à la fois académique et humaine. J’ai découvert une nouvelle approche de l’apprentissage, enrichi mon niveau d’anglais et rencontré des étudiants du monde entier.",
        image:
            "https://i.ytimg.com/vi/cqJmzQM0OOo/mqdefault.jpg",
        alt: "ESSCA Budapest",
        badge: "Échange",
        detail: "Ouverture internationale"
    },
    {
        school: "Université Paris Diderot, Paris 13",
        years: "2019 - 2020",
        title: "Double licence biologie / informatique",
        description:
            "J’ai commencé par une double licence pour explorer deux domaines qui me fascinaient. Après quelques mois, j’ai pris conscience que la biologie ne correspondait pas à mon projet professionnel, et j’ai orienté mon parcours vers l’informatique.",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Universite-Paris-Rive-Gauche.JPG",
        alt: "Université Paris Diderot",
        badge: "Université",
        detail: "Orientation vers le numérique"
    },
    {
        school: "Lycée René Cassin, Arpajon",
        years: "2016 - 2019",
        title: "Baccalauréat scientifique avec mention",
        description:
            "Les années lycée ont été une période de découvertes, tant sur moi-même que sur mes envies professionnelles. C’est à ce moment-là, grâce à la spécialité ISN, que j’ai réellement trouvé l’univers qui me correspondait.",
        image:
            "https://cet-ingenierie.fr/wp-content/uploads/2017/03/89_principale.jpg",
        alt: "Lycée René Cassin",
        badge: "Lycée",
        detail: "Spécialité informatique"
    }
];

const Studies = () => {
    return (
        <>
            <Header backgroundColor={"bg-amber-50"} />
            <section className={"bg-gradient-to-b from-amber-50 via-white to-amber-50"}>
                <div className={"mx-auto max-w-6xl px-6 pb-8 pt-10 lg:px-8 lg:pb-10"}>
                    <div className={"rounded-[32px] bg-white/80 px-6 py-10 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.2)] backdrop-blur sm:px-8 lg:px-12"}>
                        <div className={"flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"}>
                            <div className={"max-w-2xl text-left"}>
                                <span className={"inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-green"}>
                                    Parcours académique
                                </span>
                                <h1 className={"mt-4 font-display text-4xl text-primary-green md:text-5xl lg:text-6xl"}>
                                    Mes études.
                                </h1>
                                <p className={"mt-4 text-sm leading-7 text-slate-700 md:text-base"}>
                                    Mon parcours reflète une progression claire entre découvertes, orientation et spécialisation dans le numérique.
                                    Voici les étapes qui ont façonné mon profil aujourd’hui.
                                </p>
                            </div>
                            <div className={"grid gap-3 sm:grid-cols-3 lg:w-[380px]"}>
                                <div className={"rounded-2xl bg-emerald-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>5+</p>
                                    <p className={"text-sm text-slate-600"}>années d’études</p>
                                </div>
                                <div className={"rounded-2xl bg-amber-50 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>1</p>
                                    <p className={"text-sm text-slate-600"}>séjour à l’étranger</p>
                                </div>
                                <div className={"rounded-2xl bg-slate-100 px-4 py-3 text-left"}>
                                    <p className={"text-2xl font-semibold text-primary-green"}>3</p>
                                    <p className={"text-sm text-slate-600"}>lieux clés</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-10 space-y-6"}>
                        {studies.map((study, index) => (
                            <article
                                key={study.school}
                                className={`grid gap-5 rounded-[28px] bg-white/90 p-5 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.22)] ring-1 ring-slate-100 lg:grid-cols-[220px,1fr] lg:p-6`}
                            >
                                <div className={"flex flex-col justify-between gap-4"}>
                                    <div>
                                        <p className={"text-sm uppercase tracking-[0.25em] text-primary-green"}>{study.years}</p>
                                        <p className={"mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-primary-green"}>
                                            {study.badge}
                                        </p>
                                        <h2 className={"mt-4 text-xl font-semibold text-slate-900"}>{study.school}</h2>
                                        <p className={"mt-2 text-sm text-slate-600"}>{study.detail}</p>
                                    </div>
                                </div>

                                <div className={"grid gap-4 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"}>
                                    <div>
                                        <h3 className={"text-2xl font-semibold text-primary-green"}>{study.title}</h3>
                                        <p className={"mt-3 text-sm leading-7 text-slate-700 md:text-base text-justify"}>{study.description}</p>
                                    </div>
                                    <img
                                        src={study.image}
                                        alt={study.alt}
                                        className={"h-52 w-full rounded-[24px] object-cover md:h-64"}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer backgroundColor={"bg-amber-50"} />
        </>
    );
};

export default Studies;