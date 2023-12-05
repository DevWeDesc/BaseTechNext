import React from "react";
import { InputType } from "../../types/InputType";

export const Input = ({
  type,
  placeholder,
  id,
  value,
  setValue,
  Icon,
}: InputType) => {
  const handleValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className="flex justify-between items-center bg-input text-xs px-5 py-4 rounded-lg text-opacity-not-focus  transition-all hover:bg-input-hover hover:text-white">
      <input
        className="w-full bg-transparent outline-none"
        onChange={handleValue}
        value={value}
        type={type}
        name={id}
        placeholder={placeholder}
        id={id}
      />
      {Icon}
    </div>
  );
};
