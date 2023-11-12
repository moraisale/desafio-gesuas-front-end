"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import InputRadio from "../Input/InputRadio";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRegister } from "@/interfaces/IRegister";

const biologicGenders = ["Masculino", "Feminino"];

const races = ["Branca", "Preta", "Parda", "Índigena", "Amarela"];

const genderList = [
  "Mulher cisgênero",
  "Mulher transgênero",
  "Travesti",
  "Homem cisgênero",
  "Homem transgênero",
  "Não binário",
];

interface IPersonIdSession {
  register: UseFormRegister<IRegister>;
  errors: FieldErrors<IRegister>;
}

const PersonIdSession: React.FC<IPersonIdSession> = ({ register, errors }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isLgbt, setIsLgbt] = useState<string | null>(null);

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };

  const handleIsLgbtChange = (value: string) => {
    setIsLgbt(value);
  };

  return (
    <div className="flex w-full pt-6 flex-col gap-6">
      <Input
        errors={errors.name}
        inputName="Nome"
        obrigatory
        placeholder="Digite o nome"
        type="text"
        infoIcon={false}
        mask=""
        {...register("name")}
      />
      <Input
        errors={errors.socialName}
        infoIcon
        inputName="Nome social"
        obrigatory={false}
        placeholder="Digite o nome social"
        type="text"
        {...register("socialName")}
      />
      <div className="flex gap-8">
        <Input
          errors={errors.birthday}
          infoIcon={false}
          inputName="Data de nascimento"
          required
          placeholder="dd/mm/aaaa"
          type="string"
          mask="00/00/0000"
          {...register("birthday")}
        />
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <label
              htmlFor="example-input"
              className="block text-sidebar text-md font-bold"
            >
              Sexo biológico
            </label>
          </div>
          <select
            id="example-input"
            className="w-full text-sidebar px-3 py-2 border rounded-md focus:outline-none  border-[#1A1840] ::placeholder:text-gray-500"
          >
            {biologicGenders.map((option, index) => (
              <option
                key={+index}
                {...register("biologicGender")}
                className="text-sidebar"
                {...register("biologicGender")}
              >
                {option}
              </option>
            ))}
          </select>
          <p
            className={`${
              errors.biologicGender
                ? "text-projectRed text-xs font-semibold pt-1"
                : "text-sidebar text-xs font-semibold pt-1"
            }`}
          >
            Preenchimento obrigatório
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col w-full">
          <p className="text-sidebar text-md font-bold pb-4">Gênero</p>
          <div className="grid grid-cols-2 w-full gap-3">
            {genderList.map((gender, index) => (
              <InputRadio
                {...register("gender")}
                key={+index}
                name={gender}
                infoIcon
                onChange={() => handleGenderChange(gender)}
                checked={selectedGender === gender}
              />
            ))}
          </div>
          <div className="w-full pt-6 pr-4">
            <div className="flex items-center gap-1 pb-2">
              <label
                htmlFor="example-input"
                className="block text-sidebar text-md font-bold"
              >
                Cor/raça
              </label>
            </div>
            <select
              id="example-input"
              className="w-full text-sidebar px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-[#1A1840] ::placeholder:text-gray-500"
            >
              {races.map((option, index) => (
                <option
                  key={+index}
                  className="text-sidebar"
                  {...register("race")}
                >
                  {option}
                </option>
              ))}
            </select>
            <p
              className={`${
                errors.race
                  ? "text-projectRed text-xs font-semibold pt-1"
                  : "text-sidebar text-xs font-semibold pt-1"
              }`}
            >
              Preenchimento obrigatório
            </p>
          </div>
        </div>
        <div className="w-full pl-4">
          <p className="text-sidebar text-md font-bold pb-4">
            A pessoa se considera parte do público LBGTQIA+?
          </p>
          <div className="flex gap-6">
            <InputRadio
              {...register("isLGBT")}
              name="Sim"
              infoIcon
              onChange={() => handleIsLgbtChange("Sim")}
              checked={isLgbt === "Sim"}
            />{" "}
            <InputRadio
              {...register("isLGBT")}
              name="Não"
              infoIcon
              onChange={() => handleIsLgbtChange("Não")}
              checked={isLgbt === "Não"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonIdSession;
