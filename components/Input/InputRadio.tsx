"use client";
import React, { ChangeEvent } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface IInputRadio {
  name: string;
  infoIcon: boolean;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputRadio: React.FC<IInputRadio> = ({
  name,
  infoIcon,
  checked,
  onChange,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="radio" onChange={onChange} checked={checked} />
      <p className="text-sidebar font-semibold text-sm">{name}</p>
      {infoIcon && (
        <AiOutlineInfoCircle
          size={15}
          color="black"
          cursor="pointer"
          title="Informação"
        />
      )}
    </div>
  );
};

export default InputRadio;
