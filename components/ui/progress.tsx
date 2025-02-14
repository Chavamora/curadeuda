interface ProgressProps {
  value: number;
}

const Progress = ({ value }: ProgressProps) => {
  const progressValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`relative h-2 rounded-full bg-gray-200 overflow-hidden `}
      role="progressbar"
      aria-valuenow={progressValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="absolute left-0 top-0 h-full bg-green-600 rounded-full transition-all duration-300"
        style={{ width: `${progressValue}%` }}
      />
    </div>
  );
};

export default Progress;
