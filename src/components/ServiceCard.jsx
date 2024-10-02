import React from 'react'

const ServiceCard = ({ title, description}) => {
    return (
        <div className="w-full md:w-1/2 font-robRegular flex flex-col gap-2">
            <h2 className="font-robMedium text-xl md:text-3xl">{title}</h2>
            <p>{description}</p>
        </div>
    )
    
}

export default ServiceCard
