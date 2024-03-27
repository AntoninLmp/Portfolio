import PropTypes from "prop-types";

const JobArticle = ({bgColor, titre, subtitle, imgSociety, flexNumber, imageText_1, text_1, imageText_2, text_2, imageText_3, text_3}) => {
    return (
        <article className={`${bgColor} w-full bd_rad64px min-h-[400px] hover:scale-110 duration-700 flex_${flexNumber}`}>
            <img
                src={imgSociety}
                alt={titre}
                className={"m-auto my-5 w-52 object-cover"}
            />
            <div className={"m-8 font-Display"}>
                <h1 className={"font-normal text-2xl"}>{titre}</h1>
                <h2>{subtitle}</h2>
            </div>
            <aside className={"mx-14 grid grid-cols-3"}>
                <div>
                    <img src={imageText_1} alt={""} className={"w-24 m-auto"}/>
                    <p className={"text-center pt-4"}>{text_1}</p>
                </div>
                <div>
                    <img src={imageText_2} alt={""} className={"w-24 m-auto"}/>
                    <p className={"text-center pt-4"}>{text_2}</p>
                </div>
                <div>
                    <img src={imageText_3} alt={""} className={"w-24 m-auto"}/>
                    <p className={"text-center pt-4"}>{text_3}</p>
                </div>
            </aside>
        </article>
    );
};

JobArticle.propTypes = {
    bgColor: PropTypes.string.isRequired,
    flexNumber: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgSociety: PropTypes.string.isRequired,
    imageText_1: PropTypes.string.isRequired,
    text_1: PropTypes.string.isRequired,
    imageText_2: PropTypes.string.isRequired,
    text_2: PropTypes.string.isRequired,
    imageText_3: PropTypes.string.isRequired,
    text_3: PropTypes.string.isRequired
};

export default JobArticle;