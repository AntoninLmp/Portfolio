import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const ImageWithCaption = ({imgSrc, altText, captionText}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <figure onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <img className="h-auto max-w-full rounded-lg" src={imgSrc} alt={altText}/>
            <div className={"h-0"}>
                <figcaption
                    className={`transition ease-in-out delay-150 relative bg-gray-300 bottom-14 p-3 
                    w-max rounded-xl text-xs font-light ml-3 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    {captionText}
                </figcaption>
            </div>
        </figure>
    );
};

export default ImageWithCaption;
