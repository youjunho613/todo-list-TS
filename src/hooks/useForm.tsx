import { ChangeEvent, useCallback, useState } from "react";

type TInputValue = {
  [key: string]: string | number;
};

export const useForm = <T extends TInputValue>(initialData: T) => {
  const [inputValue, setInputValue] = useState(initialData);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const register = (name: keyof T) => ({
    name,
    value: inputValue[name] || "",
    onChange,
  });
  return { Value: inputValue, register };
};
