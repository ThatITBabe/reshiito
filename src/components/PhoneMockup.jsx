import React from 'react'
import phoneImg from './image.webp';

const PhoneMockup = () => {
    return (
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
                alt="phoneMockup"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-[200px] sm:w-[250px] md:w-[370px] lg:w-[380px] h-auto"
                style={{ color: 'transparent' }}
                srcSet={phoneImg}
                src={phoneImg}
            />
        </div>
    )
}

export default PhoneMockup
