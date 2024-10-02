import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceImage from './ServiceImage'
import enterpriseImg from './enterprise.webp';

const SectionThree = () => {
    return (
        <section>
            <div className="max-w-[1240px] m-auto py-[2rem] md:py-[5rem] flex flex-col-reverse md:flex-row items-center justify-center px-5  gap-5 md:gap-0">
                <ServiceCard
                    title="Capture your expense in a snap"
                    description="Build your credit history and savings with the help of our Credit Builder for an improved credit score, better value loans and access to other Monese credit products for a secure, financial future."
                />
                <ServiceImage imageSrc={enterpriseImg} />
            </div>
            <div className="max-w-[1240px] m-auto py-[2rem] md:py-[5rem]  flex flex-col md:flex-row items-center justify-center px-5 gap-5 md:gap-0">
                <ServiceImage imageSrc={enterpriseImg} />
                <ServiceCard
                    title="Capture your expense in a snap"
                    description="Build your credit history and savings with the help of our Credit Builder for an improved credit score, better value loans and access to other Monese credit products for a secure, financial future."
                />
            </div>
            <div className="max-w-[1240px] m-auto  py-[1rem] md:py-[5rem] flex flex-col-reverse md:flex-row items-center justify-center px-5  gap-5 md:gap-0">
                <ServiceCard
                    title="Capture your expense in a snap"
                    description="Build your credit history and savings with the help of our Credit Builder for an improved credit score, better value loans and access to other Monese credit products for a secure, financial future."
                />
                <ServiceImage imageSrc={enterpriseImg} />
            </div>
        </section>
    )
}

export default SectionThree
