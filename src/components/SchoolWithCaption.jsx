import '../index.css';
// eslint-disable-next-line react/prop-types
const SchoolWithCaption = ({imgSrc, altText, title, years, description, side}) => {
    return (
        <>
            {side === "left" ? (
                <div className={"flex text-center items-center w-full justify-center py-8"}>
                    <img src={imgSrc} alt={altText} className={"rounded-full w-60 h-60"}/>
                    <div className={"w-[30%] mx-10 text-start "}>
                        <h1 className={"c_green text-2xl italic"}>{title}</h1>
                        <h2 className={"c_yellow text-base italic"}>{years}</h2>
                        <p className={"text-justify mt-3 text-sm lg:text-base"}>{description}</p>
                    </div>
                </div>
            ) : (
                <div className={"flex text-center items-center w-full justify-center py-8"}>
                    <div className={"w-[30%] mx-10 text-start"}>
                        <h1 className={"c_green text-2xl italic"}>{title}</h1>
                        <h2 className={"c_yellow text-base italic"}>{years}</h2>
                        <p className={"text-justify mt-3 text-sm lg:text-base"}>{description}</p>
                    </div>
                    <img src={imgSrc} alt={altText} className={"rounded-full w-60 h-60"}/>
                </div>
            )}
        </>
    );
};

export default SchoolWithCaption;
