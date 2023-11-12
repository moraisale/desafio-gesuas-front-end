import React from "react";
import SessionName from "./SessionName";
import Input from "../Input/Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegister } from "@/interfaces/IRegister";

interface IDocumentsSession {
  register: UseFormRegister<IRegister>;
  errors: FieldErrors<IRegister>;
}

const DocumentsSession: React.FC<IDocumentsSession> = ({
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col pt-8 ">
      <SessionName sessionName="Documentos" />
      <div className="flex w-full pt-8 gap-8">
        <Input
          errors={errors.rg}
          inputName="RG"
          placeholder="0000000000"
          required
          documentInput
          mask="00.000.000-0"
          {...register("rg")}
        />
        <Input
          errors={errors.cpf}
          inputName="CPF"
          placeholder="0000000000"
          required
          documentInput
          mask="000.000.000-00"
          {...register("cpf")}
        />
      </div>
    </div>
  );
};

export default DocumentsSession;
