import React, { useState } from 'react';
import ModalIframe from '@components/Skills/ModalIframe';
interface ISkillBarProps {
  id: string;
  iconSrc: string;
  skillName: string;
  progress: number;
  skillUrl: string;
  backgroundColor?: string; // Optional prop for background color
}

const SkillBar: React.FC<ISkillBarProps> = ({
  id,
  iconSrc,
  skillName,
  progress,
  skillUrl,
  backgroundColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      key={id}
      onClick={handleOpenModal}
      className='interactable gap-2 w-3/12 text-slate-700 dark:text-slate-400 '
    >
      <div>
        <div className='flex gap1 md:gap-2 mb-1 '>
          <img src={iconSrc} alt={skillName} className='h-auto w-4' />
          <p className='text-xs md:text-sm truncate overflow-hidden ...'>
            {skillName}
          </p>
        </div>
        {isModalOpen && (
          <ModalIframe
            url={skillUrl} // Replace with the URL you want to display
            onClose={handleCloseModal}
          />
        )}
      </div>

      <div className='relative w-full h-2 bg-slate-600 rounded'>
        <div
          className={`absolute top-0 left-0 h-full rounded ${
            backgroundColor ? backgroundColor : 'bg-slate-200'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
