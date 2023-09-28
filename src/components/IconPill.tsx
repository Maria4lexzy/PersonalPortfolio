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
  const classNames = `flex gap-2 ${classListItems || ''}`;

  return (
    <div className='interactable flex items-center bg-violet-500/20 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-1.5 md:px-2.5 py-3.5 text-gray-700 text-ellipsis ...  w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 '>
      <div className={classNames}>
        <img src={iconSrc} alt={description + 'icon'} className='h-auto w-4' />
        {description ? (
          <p className='capitalize text-xs md:text-base truncate'>
            {description}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default IconPill;
