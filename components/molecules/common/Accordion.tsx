'use client'

import BodyText from '@/components/atoms/typography/BodyText'
import HeadingText from '@/components/atoms/typography/HeadingText'
import React, { useState } from 'react'

const Accordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="group flex flex-col gap-2 w-full">
            <button onClick={toggleAccordion} className={`text-left ${isOpen && 'text-[#2BADB7]'} transition-all duration-300 ease-in-out`}>
                <HeadingText text="Accordion" fontSize="24px" hoverColor="#ff0000" />
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <BodyText text="This is the body text of the accordion. This is the body text of the accordion. This is the body text of the accordion. This is the body text of the accordion." fontSize="16px" lineClamp={3} />
            </div>
        </div>
    );
};

export default Accordion