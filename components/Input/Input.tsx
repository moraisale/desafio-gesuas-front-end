import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IMaskInput } from "react-imask";

interface IInput {
  inputName: string;
  type?: string;
  placeholder: string;
  obrigatory?: boolean;
  infoIcon?: boolean;
  documentInput?: boolean;
  mask?: string;
  pattern?: string;
  title?: string;
  onChange?: any;
  isEmpty: boolean;
  normalInput: boolean;
}

const Input: React.FC<IInput> = ({
  inputName,
  type,
  obrigatory,
  placeholder,
  infoIcon,
  documentInput,
  mask,
  title,
  onChange,
  isEmpty,
  pattern,
  normalInput,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 pb-2">
        <label
          htmlFor="example-input"
          className="block text-sidebar text-md font-bold"
        >
          {inputName}
        </label>
        {infoIcon && (
          <AiOutlineInfoCircle
            size={15}
            color="black"
            cursor="pointer"
            title="Informação"
          />
        )}
      </div>
      {normalInput ? (
        <input
          onChange={onChange}
          type={type}
          pattern={pattern}
          id="example-input"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-[#1A1840] ::placeholder:text-gray-500 text-sidebar max-h-10"
          placeholder={placeholder}
          required={obrigatory}
          title={title}
        />
      ) : (
        <IMaskInput
          onChange={onChange}
          mask={mask}
          type={type}
          pattern={pattern}
          id="example-input"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-[#1A1840] ::placeholder:text-gray-500 text-sidebar max-h-10"
          placeholder={placeholder}
          required={obrigatory}
          title={title}
        />
      )}

      {obrigatory && !documentInput && (
        <p
          className={`${
            isEmpty
              ? "text-projectRed text-xs font-semibold pt-1"
              : "text-sidebar text-xs font-semibold pt-1"
          }`}
        >
          Preenchimento obrigatório
        </p>
      )}
      {documentInput && (
        <p
          className={`${
            isEmpty
              ? "text-projectRed text-xs font-semibold pt-1"
              : "text-sidebar text-xs font-semibold pt-1"
          }`}
        >
          Preenchimento obrigatório de RG ou de CPF
        </p>
      )}
    </div>
  );
};

export default Input;
