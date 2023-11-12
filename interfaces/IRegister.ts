export interface IRegister {
  name: string;
  socialName?: string;
  birthday: string;
  biologicGender: string;
  gender?: string;
  race: string;
  isLGBT?: boolean;
  rg: string;
  cpf: string;
  address: {
    neighborhood: string;
    street: string;
    number: number;
    complement?: string;
  };
  contact: {
    phone: string;
    email: string;
  };
}
