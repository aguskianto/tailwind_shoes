import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tw-merge';

type Props = {
  value: number;
  title: string;
  options: number[];
  className: string;
  onChange: (vr: number) => void;
  disabled: boolean;
};

const Select: React.FC<Props> = ({
  value,
  title,
  options,
  className,
  onChange,
  disabled,
}) => {
  return (
    <div className='relative dark:text-black'>
      <select
        onChange={(e) => onChange(parseInt(e.target.value))}
        value={value || ''}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 ${className}`
        )}
      >
        <option value='' disabled hidden>
          {title}
        </option>
        {options.map((option: number) => {
          if (disabled === false) {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          } else if (disabled === true && option === value) {
            return (
              <option value={option} key={option} disabled={disabled}>
                {option}
              </option>
            );
          } else {
            return;
          }
        })}
      </select>
      <div className='flex-center absolute inset-y-0 right-0 pr-3'>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
