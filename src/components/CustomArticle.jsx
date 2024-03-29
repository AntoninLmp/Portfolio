import PropTypes from "prop-types";

const CustomArticle = ({bgColor, titre, subtitle, imgSrc, flexNumber}) => {
    return (
        <article className={`${bgColor} text-right w-full m-10 rounded-[64px] flex_${flexNumber} ease-in-out duration-500 hover:scale-110`}>
            <div className={"m-8 font-Display"}>
                <h1 className={"font-normal text-2xl"}>{titre}</h1>
                <h2>{subtitle}</h2>
            </div>
            <img
                src={imgSrc}
                alt={titre}
                className={"ml-[15%] w-[85%] rounded-br-[64px] rounded-tl-[64px] h-[350px] object-cover"}
            />
        </article>
    );
};

CustomArticle.propTypes = {
    bgColor: PropTypes.string.isRequired,
    flexNumber: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired
};

export default CustomArticle;