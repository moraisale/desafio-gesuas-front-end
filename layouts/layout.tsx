import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

interface ILayout {
  page: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ page, children }) => {
  return (
    <div className="flex w-100vw ml-[15%]">
      <Sidebar />
      <div className="fixed  w-full top-0">
        <p className="text-projectBlue text-2xl font-bold py-4 pl-6 bg-white">
          {page}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
