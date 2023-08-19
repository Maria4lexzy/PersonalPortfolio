interface PlainPillProps {
  description: string;
  id: any;
}

const PlainPill: React.FC<PlainPillProps> = ({ id, description }) => {
  return (
    <div
      key={id}
      className='flex items-center bg-violet-500/20  rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer'
    >
      <p className='capitalize text-xs  text-ellipsis'>{description}</p>
    </div>
  );
};

export default PlainPill;
