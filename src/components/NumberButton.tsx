// NumberButton.tsx

interface NumberButtonProps {
  number: number;
  onClick: () => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({ number, onClick }) => {
  return (
    <button
      className="bg-primary-dark hover:bg-primary text-primary-text font-bold py-2 px-4 rounded m-2"
      onClick={onClick}>
      {number}
    </button>
  );
};

export default NumberButton;
