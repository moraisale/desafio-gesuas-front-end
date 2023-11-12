import React from "react";
import { PiHandHeartDuotone, PiHouseFill } from "react-icons/pi";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCalendarEvent, BsFillPersonFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";

const Sidebar = () => {
  const menuItems = [
    {
      icon: <PiHouseFill size={20} color="#535353" />,
      name: "Início",
    },
    {
      icon: <LiaClipboardListSolid size={20} color="#535353" />,
      name: "Cadastro",
    },
    {
      icon: <BsCalendarEvent size={20} color="#535353" />,
      name: "Agenda",
    },
    {
      icon: <BsFillPersonFill size={20} color="#535353" />,
      name: "Perfil",
    },
    {
      icon: <TbReportSearch size={20} color="#535353" />,
      name: "Relatórios",
    },
  ];

  const name = "Felipe Domingues";
  return (
    <div className="h-screen w-[15%] bg-white fixed left-0 top-0 overflow-y-auto border-r-2 border-gray-200">
      <div className="flex w-full border-b-2 border-gray-200 items-center">
        <span className="flex w-full justify-center py-4 ">
          <div className="pr-3">
            <PiHandHeartDuotone size={30} color="red" />
          </div>
          <p className="text-sidebar text-lg">Pro</p>
          <p className="text-projectRed font-bold text-lg">Assistência</p>
        </span>
      </div>
      <div className="flex flex-col py-4 pl-4 border-b-2 border-gray-200">
        <p className="text-sidebar text-xs pb-2">Viçosa</p>
        <div className="flex content-center gap-3 items-center">
          <AiOutlineLeft size={10} color="#535353" cursor="pointer" />
          <p className="text-sidebar font-medium cursor-pointer">Coordenação</p>
        </div>
      </div>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex content-center hover:bg-projectRed cursor-pointer px-4 "
        >
          <div className="flex h-full gap-4 w-full  items-center">
            {item.icon}
            <p className="text-gray-800 font text-md font-medium hover:text-white w-full  py-4">
              {item.name}
            </p>
          </div>
        </div>
      ))}
      <div className="flex absolute bottom-0 w-full align-center gap-2 items-center border-t-2 border-gray-200 pl-4">
        <div className="flex items-center gap-2 py-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center bg-[url('/images/test-photo.jpg')] bg-no-repeat bg-cover bg-center border-2 border-red-400" />
          <p className="text-sidebar ">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
