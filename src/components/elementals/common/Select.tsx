import { useEffect } from "react";
import { SelectProps } from "../../../types/componentsProps";

const Select = (props: SelectProps) => {
  const { topic = '', options, setId, defaultId = 0 } = props;
  useEffect(() => setId(defaultId), []);
  return (
    <select onChange={(e) => setId(Number(e.target.value))}>
      {options.map((option, index) => {
        return (
          <option
            key={`${topic}-select-option_${index}`}
            value={index}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default Select;