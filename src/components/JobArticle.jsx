import PropTypes from "prop-types";

const JobArticle = ({
    title,
    subtitle,
    summary,
    imgSociety,
    accent,
    badge,
    highlights,
    isLast = false,
}) => {
    return (
        <article className={"relative md:pl-12"}>
            <div className={"absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary-green shadow-md md:block"} />
            {!isLast && (
                <div className={"absolute left-0 top-12 hidden h-full w-px -translate-x-1/2 bg-emerald-200 md:block"} />
            )}

            <div className={`rounded-[28px] border border-white/70 bg-gradient-to-br ${accent} p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.2)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] md:p-8`}>
                <div className={"flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"}>
                    <div className={"max-w-2xl"}>
                        <div className={"flex flex-wrap items-center gap-3"}>
                            <span className={"inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-green"}>
                                {badge}
                            </span>
                            <span className={"text-sm font-medium text-slate-600"}>{subtitle}</span>
                        </div>
                        <h2 className={"mt-4 font-display text-2xl text-primary-green md:text-3xl"}>{title}</h2>
                        <p className={"mt-3 text-sm leading-7 text-slate-700 md:text-base"}>{summary}</p>
                    </div>

                    <div className={"flex-shrink-0"}>
                        <div className={"rounded-2xl bg-white/80 p-3 shadow-sm"}>
                            <img
                                src={imgSociety}
                                alt={title}
                                className={"h-16 w-auto object-contain"}
                            />
                        </div>
                    </div>
                </div>

                <div className={"mt-6 grid gap-3 md:grid-cols-3"}>
                    {highlights.map((item) => (
                        <div key={item.title} className={"rounded-2xl bg-white/70 px-4 py-4"}>
                            <div className={"flex items-center gap-3"}>
                                <img src={item.icon} alt={""} className={"h-8 w-8"} />
                                <p className={"text-sm font-semibold text-slate-800"}>{item.title}</p>
                            </div>
                            <p className={"mt-2 text-sm leading-6 text-slate-600"}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

JobArticle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imgSociety: PropTypes.any.isRequired,
    accent: PropTypes.string,
    badge: PropTypes.string,
    highlights: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
    isLast: PropTypes.bool,
};

export default JobArticle;