interface PillProps {
  iconSrc: string;
  description: string;
}

const Pill: React.FC<PillProps> = ({ iconSrc, description }) => {
  return (
    <div className='flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer'>
      <div className='flex gap-3'>
        <img src={iconSrc} alt={description} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Pill;
