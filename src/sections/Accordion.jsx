// Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Toggle button to show/hide the content */}
            <button onClick={toggleAccordion} className='cursor-pointer'>
                {title}
            </button>

            {/* Collapsible content */}
            <div style={{ display: isOpen ? 'block' : 'none' }} className='transition'>
                {children}
            </div>
        </div>
    );
};

export default Accordion;
