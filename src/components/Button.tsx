import React from "react";
import { ButtonType } from "../../types/ButtonType";

export const Button = ({ title }: ButtonType) => {
  return (
    <button className="w-full text-center text-xs px-5 py-4 bg-button rounded-lg font-semibold transition-all hover:bg-button-hover">
      {title}
    </button>
  );
};
