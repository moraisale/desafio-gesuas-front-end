import React from "react";
import SessionName from "./SessionName";
import Input from "../Input/Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegister } from "@/interfaces/IRegister";

interface IAddressSession {
  register: UseFormRegister<IRegister>;
  errors: FieldErrors<IRegister>;
}

const AddressSession: React.FC<IAddressSession> = ({ register, errors }) => {
  return (
    <div className="flex flex-col pt-8 ">
      <SessionName sessionName="Local de residência" />
      <div className="flex w-full pt-8 gap-8">
        <Input
          errors={errors.address?.neighborhood}
          inputName="Bairro"
          placeholder="Digite o bairro"
          required
          {...register("address.neighborhood")}
        />
        <Input
          errors={errors.address?.street}
          inputName="Endereço"
          placeholder="Selecione o endereço"
          required
          {...register("address.street")}
        />
      </div>
      <div className="flex w-full pt-8 gap-8">
        <Input
          errors={errors.address?.number}
          inputName="Número"
          placeholder="Selecione o endereço"
          type="number"
          {...register("address.number")}
        />
        <Input
          errors={errors.address?.complement}
          inputName="Complemento"
          placeholder="Ex: apartamento 22"
          {...register("address.complement")}
        />
      </div>
    </div>
  );
};

export default AddressSession;
