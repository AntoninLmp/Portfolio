import PropTypes from "prop-types";

const ProjectExample = ({
    projectName,
    imageSource,
    content,
    githubLink,
    accent = "from-emerald-50 to-white",
    tags = [],
}) => (
    <section className={`rounded-[28px] border border-white/70 bg-gradient-to-br ${accent} p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.2)] backdrop-blur md:p-8`}>
        <div className={"grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"}>
            <div>
                <span className={"inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-green"}>
                    Projet sélectionné
                </span>
                <h2 className={"mt-4 font-display text-3xl text-primary-green md:text-4xl"}>{projectName}</h2>
                <div className={"mt-4 text-sm leading-7 text-slate-700 md:text-base"}>{content}</div>

                <div className={"mt-5 flex flex-wrap gap-2"}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={"rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700"}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className={"rounded-[24px] bg-white/80 p-3 shadow-sm"}>
                <img
                    src={imageSource}
                    alt={projectName}
                    className={"h-64 w-full rounded-[18px] object-cover"}
                />
            </div>
        </div>

        <div className={"mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/70 pt-4"}>
            <p className={"text-sm text-slate-600"}>
                {githubLink ? "Disponible sur GitHub" : "Lien non disponible pour ce projet"}
            </p>

            {githubLink ? (
                <a
                    href={githubLink}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={"inline-flex items-center gap-3 rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        className={"h-5 w-5"}
                        alt="GitHub"
                    />
                    Voir le dépôt
                </a>
            ) : (
                <span className={"rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"}>
                    Code privé / dossier interne
                </span>
            )}
        </div>
    </section>
);

ProjectExample.propTypes = {
    projectName: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    githubLink: PropTypes.string,
    accent: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectExample;