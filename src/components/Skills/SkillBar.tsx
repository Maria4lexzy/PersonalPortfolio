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
      className=' flex flex-col  gap-2 w-1/5  text-slate-700 dark:text-slate-400 cursor-pointer'
    >
      <div>
        {console.log(progress)}

        <div className='flex gap-2'>
          <img src={iconSrc} alt={skillName} />
          <p className='text-sm'>{skillName}</p>
        </div>
        {isModalOpen && (
          <ModalIframe
            url={skillUrl} // Replace with the URL you want to display
            onClose={handleCloseModal}
          />
        )}
      </div>

      {/* <div className='w-full bg-slate-300 rounded-sm h-2.5 dark:bg-gray-700'>
        <div
          className={`h-2.5 rounded-full ${
            backgroundColor ? backgroundColor : 'bg-slate-200'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}
      <div className='relative w-full h-2 bg-gray-300 rounded'>
        <div
          className={`absolute top-0 left-0 h-full bg-green-500 rounded ${
            backgroundColor ? backgroundColor : 'bg-slate-200'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
