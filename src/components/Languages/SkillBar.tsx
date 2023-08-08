import React, { useState } from 'react';
import ModalIframe from '@components/Skills/ModalIframe';
interface SkillBarProps {
  iconSrc: string;
  skillName: string;
  progress: number;
  skillUrl: string;
  backgroundColor?: string; // Optional prop for background color
}

const SkillBar: React.FC<SkillBarProps> = ({
  iconSrc,
  skillName,
  progress,
  skillUrl,
  backgroundColor,
}) => {
  return (
    <div className=' flex flex-col  gap-2 w-1/4 text-slate-700 dark:text-slate-400 '>
      <div>
        <div className='flex gap-3'>
          <img src={iconSrc} alt={skillName} />
          <p>{skillName}</p>
        </div>
      </div>

      <div className='w-full bg-slate-300 rounded-sm h-2.5 dark:bg-gray-700'>
        <div
          className={`h-2.5 rounded-full ${
            backgroundColor ? backgroundColor : 'bg-slate-300'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
