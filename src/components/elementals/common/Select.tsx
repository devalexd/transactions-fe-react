import { useEffect } from 'react';

const Select = (props: SelectProps) => {
  const { topic = '', options, setId, defaultId = 0 } = props;
  useEffect(() => setId(defaultId), []);
  return (
    <select onChange={(e) => setId(Number(e.target.value))}>
      {options.map((option, index) => {
        return (
          <option key={`${topic}-select-option_${index}`} value={index}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

interface SelectProps {
  topic?: string;
  options: Array<string>;
  setId: (arg1: number) => any;
  defaultId?: number;
}

export default Select;
