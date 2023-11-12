"use client";
import RegistrationCompleted from "@/components/Modal/RegistrationCompleted";
import SessionName from "@/components/Sessions/SessionName";
import { useState } from "react";
import Input from "@/components/Input/Input";
import InputRadio from "@/components/Input/InputRadio";
import { IObrigatoryFields } from "@/interfaces/IObrigatoryFields";
import Layout from "@/layouts/layout";
import Sidebar from "@/components/Sidebar/Sidebar";

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

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isLgbt, setIsLgbt] = useState<string | null>(null);
  const [obrigatoryFields, setObrigatoryFields] = useState<IObrigatoryFields>(
    {} as IObrigatoryFields
  );

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };

  const handleIsLgbtChange = (value: string) => {
    setIsLgbt(value);
  };

  const handleSubmitRegister = (event: any) => {
    event.preventDefault();
    handleOpenModal();
  };

  const handleInputChange = (
    fieldName: keyof IObrigatoryFields,
    value: string
  ) => {
    setObrigatoryFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  return (
    <div className="flex w-100vw ml-[15%]">
      <Sidebar />
      <div className="fixed  w-full top-0">
        <p className="text-projectBlue text-2xl font-bold py-4 pl-6 bg-white">
          Cadastro
        </p>
      </div>
      <RegistrationCompleted open={open} onClose={handleCloseModal} />
      <form onSubmit={handleSubmitRegister} className="w-full">
        <div className="pt-[40px] w-full px-6">
          <div className="flex w-full pt-12">
            <SessionName sessionName="Identificação da pessoa" />
          </div>
          <div className="flex w-full pt-6 flex-col  gap-6">
            <Input
              normalInput
              title="Somente letras"
              isEmpty={obrigatoryFields.name?.length === 0}
              inputName="Nome"
              obrigatory
              pattern="^[A-Za-z ]+$"
              placeholder="Digite o nome"
              type="text"
              infoIcon={false}
              onChange={(event: any) =>
                handleInputChange("name", event.target.value)
              }
            />
            <Input
              pattern="^[A-Za-z]+$"
              normalInput
              isEmpty={false}
              infoIcon
              inputName="Nome social"
              obrigatory={false}
              placeholder="Digite o nome social"
              type="text"
            />
            <div className="flex gap-8">
              <Input
                normalInput={false}
                isEmpty={
                  obrigatoryFields.birthday?.length === 0 ||
                  obrigatoryFields.birthday?.length < 10
                }
                infoIcon={false}
                inputName="Data de nascimento"
                obrigatory
                placeholder="dd/mm/aaaa"
                type="string"
                mask="00/00/0000"
                pattern="^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$"
                onChange={(event: any) =>
                  handleInputChange("birthday", event.target.value)
                }
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
                  required
                  id="example-input"
                  className="w-full text-sidebar px-3 py-2 border rounded-md focus:outline-none  border-[#1A1840] ::placeholder:text-gray-500"
                >
                  <option value="" disabled selected hidden>
                    Selecione
                  </option>
                  {biologicGenders.map((option, index) => (
                    <option key={+index} className="text-sidebar">
                      {option}
                    </option>
                  ))}
                </select>
                <p
                  className={`${
                    obrigatoryFields.biologicGender?.length === 0
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
                    required
                    id="example-input"
                    className="w-full text-sidebar px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-[#1A1840] ::placeholder:text-gray-500"
                  >
                    <option value="" disabled selected hidden>
                      Selecione
                    </option>
                    {races.map((option, index) => (
                      <option key={+index} className="text-sidebar">
                        {option}
                      </option>
                    ))}
                  </select>
                  <p
                    className={`${
                      obrigatoryFields.race?.length === 0
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
                    name="Sim"
                    infoIcon
                    onChange={() => handleIsLgbtChange("Sim")}
                    checked={isLgbt === "Sim"}
                  />{" "}
                  <InputRadio
                    name="Não"
                    infoIcon
                    onChange={() => handleIsLgbtChange("Não")}
                    checked={isLgbt === "Não"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-8 ">
            <SessionName sessionName="Documentos" />
            <div className="flex w-full pt-8 gap-8">
              <Input
                normalInput={false}
                isEmpty={obrigatoryFields.rg?.length === 0}
                inputName="RG"
                placeholder="0000000000"
                obrigatory
                documentInput
                mask="00.000.000-0"
                onChange={(event: any) =>
                  handleInputChange("rg", event.target.value)
                }
              />
              <Input
                normalInput={false}
                isEmpty={
                  obrigatoryFields.cpf?.length === 0 ||
                  obrigatoryFields.cpf?.length < 14
                }
                inputName="CPF"
                placeholder="0000000000"
                obrigatory
                documentInput
                pattern="\d{11}"
                mask="000.000.000-00"
                onChange={(event: any) =>
                  handleInputChange("cpf", event.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col pt-8 ">
            <SessionName sessionName="Local de residência" />
            <div className="flex w-full pt-8 gap-8">
              <Input
                normalInput={false}
                isEmpty={obrigatoryFields.neighborhood?.length === 0}
                inputName="Bairro"
                placeholder="Digite o bairro"
                obrigatory
                onChange={(event: any) =>
                  handleInputChange("neighborhood", event.target.value)
                }
              />
              <Input
                normalInput={false}
                isEmpty={obrigatoryFields.street?.length === 0}
                inputName="Endereço"
                placeholder="Selecione o endereço"
                obrigatory
                onChange={(event: any) =>
                  handleInputChange("street", event.target.value)
                }
              />
            </div>
            <div className="flex w-full pt-8 gap-8">
              <Input
                normalInput={false}
                isEmpty={false}
                inputName="Número"
                placeholder="Selecione o endereço"
                type="number"
              />
              <Input
                normalInput={false}
                isEmpty={false}
                inputName="Complemento"
                placeholder="Ex: apartamento 22"
              />
            </div>
          </div>
          <div className="flex flex-col pt-8 pb-14">
            <SessionName sessionName="Informações de contato" />
            <div className="flex w-full pt-8 gap-8">
              <Input
                normalInput={false}
                isEmpty={false}
                inputName="Celular"
                placeholder="(00) 00000-0000"
                mask="(00) 00000-0000"
              />
              <div className="w-full">
                <Input
                  normalInput
                  isEmpty={false}
                  inputName="E-mail"
                  placeholder="Digite o e-mail"
                  title="Digite um e-mail válido"
                  pattern="/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end gap-4 pb-4">
            <button className="text-projectBlue py-2 px-20 border border-projectBlue rounded-md">
              Cancelar
            </button>
            <button
              className="bg-projectBlue py-2 px-20 rounded-md "
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
