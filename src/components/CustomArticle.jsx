import PropTypes from "prop-types";

const CustomArticle = ({bgColor, titre, subtitle, imgSrc, flexNumber}) => {
    return (
        <article className={`${bgColor} text-right w-full m-10 bd_rad64px min_h_455 flex_${flexNumber}`}>
            <div className={"m-8 font-Display"}>
                <h1 className={"font-normal text-2xl"}>{titre}</h1>
                <h2>{subtitle}</h2>
            </div>
            <img
                src={imgSrc}
                alt={titre}
                className={"ml_15 w_85 bd_rad_br_64px h_photo object-cover"}
            />
        </article>
    );
};

CustomArticle.propTypes = {
    bgColor: PropTypes.string.isRequired,
    flexNumber: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
};

export default CustomArticle;