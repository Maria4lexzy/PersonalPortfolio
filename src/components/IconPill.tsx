import React from 'react';

interface PillProps {
  iconSrc: string;
  description?: string;
  classListItems?: string;
}

const IconPill: React.FC<PillProps> = ({
                                         iconSrc,
                                         description,
                                         classListItems,
                                       }) => {
  const classNames = `flex gap-2 items-center ${classListItems || ''}`;

  return (
      <div
          className={`
        interactable 
        flex 
        items-center 
        bg-violet-500/20 
        dark:bg-gray-700 
        dark:text-gray-100 
        font-medium 
        gap-x-1.5 
        h-7 
        px-2 md:px-3 
        py-1.5 
        rounded-lg 
        text-gray-700 
        w-fit 
        transition-all 
        duration-300 
        ease-out-expo 
        hover:bg-primary-dark/30 
        dark:hover:bg-primary-dark/40 
        hover:shadow-lg 
        hover:shadow-primary-dark/20 
        hover:scale-105 
        group
        hover:cursor-pointer
      `}
      >
        <div className={classNames}>
          <img
              src={iconSrc}
              alt={description ? `${description} icon` : 'icon'}
              className="h-auto w-5 transition-transform duration-300 ease-in-out-cubic group-hover:scale-110 group-hover:animate-pulse"
          />
          {description && (
              <p className={`capitalize text-xs md:text-sm font-doses tracking-wide truncate `}>
                {description}
              </p>
          )}
        </div>
      </div>
  );
};
export default IconPill;

