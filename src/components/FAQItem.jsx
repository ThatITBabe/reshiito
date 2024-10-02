import React, { useState } from 'react'

const FAQItem = ({ title, description }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const titleParts = title.split('?');
    const mainTitle = titleParts[0];
    const questionMark = titleParts[1] !== undefined ? '?' : '';

    return (
        <div className="w-full md:w-4/6 m-auto font-robRegular">
            <div
                className="font-robMedium cursor-pointer flex items-start justify-start gap-5"
                onClick={toggleAccordion}
            >
                <div className="">
                    {isOpen ? (
                        // Icon when open (up arrow)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,53.66,165.66L128,91.31l74.34,74.35a8,8,0,0,0,11.32-11.32Z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                        </svg>
                    )}
                </div>
                <h3 className="faq">{mainTitle}
                    {questionMark && (
                        <span className="que">?</span>
                    )}</h3>
            </div>
            {isOpen && (
                <div className="accordion_accordionBody__4vFS7 text-grays500 jjj faq">
                    {description}
                </div>
            )}
        </div>
    )
}

export default FAQItem
