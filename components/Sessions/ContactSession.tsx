import React from "react";
import SessionName from "./SessionName";
import Input from "../Input/Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegister } from "@/interfaces/IRegister";

interface IContactSession {
  register: UseFormRegister<IRegister>;
  errors: FieldErrors<IRegister>;
}

const ContactSession: React.FC<IContactSession> = ({ register, errors }) => {
  return (
    <div className="flex flex-col pt-8 pb-14">
      <SessionName sessionName="Informações de contato" />
      <div className="flex w-full pt-8 gap-8">
        <Input
          errors={errors}
          inputName="Celular"
          placeholder="(00) 00000-0000"
          mask="(00) 00000-0000"
          {...register("contact.phone")}
        />
        <div className="w-full">
          <Input
            errors={errors}
            inputName="E-mail"
            placeholder="Digite o e-mail"
            pattern="/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/"
            {...register("contact.email")}
          />
          {errors.contact?.email && (
            <p className="text-projectRed text-xs font-semibold pt-1">
              Digite um e-mail válido
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSession;
