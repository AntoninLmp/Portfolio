import {useState} from 'react';
import PropTypes from "prop-types";

const ImageWithCaption = ({imgSrc, altText, captionText}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <figure onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <img className="h-auto max-w-full rounded-lg" src={imgSrc} alt={altText}/>
            <div className={"h-0"}>
                <figcaption
                    className={`transition ease-in delay-100 relative bg-gray-300 bottom-14 p-3 
                    w-max rounded-xl text-xs font-light ml-3 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    {captionText}
                </figcaption>
            </div>
        </figure>
    );
};

ImageWithCaption.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    captionText: PropTypes.string.isRequired
};

export default ImageWithCaption;
