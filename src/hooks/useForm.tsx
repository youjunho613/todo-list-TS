import { ChangeEvent, useRef, useState } from "react";

export const useInputForm = <
  T extends Record<keyof T, string | number | boolean>
>(
  initialValue: T
) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const inputs = useRef(new Map<string, HTMLInputElement>());

  const validation = () => {
    const _isValid = [...inputs.current.values()].every(input => {
      const { required, validity } = input;

      return !required || validity.valid;
    });

    setIsValid(_isValid);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setInputValue(prev => ({ ...prev, [name]: value }));

    validation();
  };

  const register = (name: keyof T) => ({
    name,
    value: inputValue[name],
    onChange,
    ref: (element: HTMLInputElement) => {
      inputs.current.set(name as string, element);
    },
  });

  return { inputValue, setInputValue, register, isValid } as const;
};
