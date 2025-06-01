import PropTypes from "prop-types";

const CustomArticle = ({bgColor, titre, subtitle, imgSrc}) => {
    return (
        <article className={`${bgColor} text-right w-full m-10 rounded-[64px] ease-in-out duration-500 hover:scale-110`}>
            <div className={"m-8 font-Display"}>
                <h1 className={"font-normal md:text-2xl"}>{titre}</h1>
                <h2>{subtitle}</h2>
            </div>
            <img
                src={imgSrc}
                alt={titre}
                className={"ml-[20%] w-[80%] h-[250px] md:ml-[15%] md:w-[85%] md:h-[350px]  rounded-br-[64px] rounded-tl-[64px] object-cover"}
            />
        </article>
    );
};

CustomArticle.propTypes = {
    bgColor: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired
};

export default CustomArticle;