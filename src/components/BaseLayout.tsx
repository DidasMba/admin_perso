import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-svh font-montserrat">
      <Sidebar />
      <div className="flex-1 h-svh overflow-y-auto">
        <Header />
        <div className="h-full px-6 w-full md:px-8 py-6">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
