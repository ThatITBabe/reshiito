import React from 'react'

const ServiceImage = ({ imageSrc }) => {
    return (
        <div className="w-full md:w-1/2 flex items-center md:justify-center">
            <img
                alt="service img"
                loading="lazy"
                width="350"
                height="0"
                decoding="async"
                data-nimg="1"
                className="rounded-md"
                style={{ color: 'transparent' }}
                srcSet= {imageSrc}
                src= {imageSrc}
            />
        </div>
    )
}

export default ServiceImage
