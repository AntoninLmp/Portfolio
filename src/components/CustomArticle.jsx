import PropTypes from "prop-types";

const CustomArticle = ({bgColor, titre, subtitle, imgSrc, className = ""}) => {
    return (
        <article className={`${bgColor} font-display text-right w-full transition-transform duration-500 ${className}`}>
            <div className={"m-8 font-display"}>
                <h1 className={"font-display text-xl md:text-3xl"}>{titre}</h1>
                <h2>{subtitle}</h2>
            </div>
            <img
                src={imgSrc}
                alt={titre}
                className={"w-full h-[250px] md:h-[350px] rounded-br-[64px] rounded-tl-[64px] object-cover"}
            />
        </article>
    );
};

CustomArticle.propTypes = {
    bgColor: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired,
    className: PropTypes.string
};

export default CustomArticle;