/** @format */
import React from "react";
import { SidebarItems } from "../_utils/constast";
import SidebarButton from "./common/buttons/SidebarButton";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary text-white w-full max-w-[240px] h-full">
      <div className="mt-24 flex flex-col gap-4">
        {SidebarItems.map((item) => (
          <SidebarButton
            key={item.name}
            Icon={item.Icon}
            name={item.name}
            pathname={item.path}
            text={item.text}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
