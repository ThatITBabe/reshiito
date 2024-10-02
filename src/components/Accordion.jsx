import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
 
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full text-left py-3 px-4 focus:outline-none flex justify-between items-center"
                onClick={toggleAccordion}
            >
                <span className="text-lg font-medium">{title}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4">{content}</div>
            </div>
        </div>
    )
}

export default Accordion
