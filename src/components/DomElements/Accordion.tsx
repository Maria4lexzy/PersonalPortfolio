// Accordion.tsx
import React, { ReactNode, useState } from 'react';
// import ChevronDownIcon from 'images/chevronDown.svg';
import Subtitle from '../Typography/Subtitle.astro';

// Define the types for the props
interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  // Define the state type
  interface AccordionState {
    isOpen: boolean;
  }

  // Use the state type for the useState hook
  const [state, setState] = useState<AccordionState>({ isOpen: false });

  const toggleAccordion = () => {
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  return (
    <div>
      {/* Toggle button to show/hide the content */}
      <button
        onClick={toggleAccordion}
        className='cursor-pointer flex items-center'
      >
        {/* <Subtitle subTitle='kkkk' /> */}
        <span className='mr-2'>{title}</span>
        <p>icon here</p>
        {/* <ChevronDownIcon
          className={`transition transform ${state.isOpen ? 'rotate-180' : ''}`}
          size={18}
        /> */}
      </button>

      {/* Collapsible content */}
      <div
        style={{ display: state.isOpen ? 'block' : 'none' }}
        className='transition'
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
