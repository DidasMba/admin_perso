// import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

const SidebarButton: React.FC<{
  Icon: IconType;
  name: string;
  pathname: string;
  text: string;
}> = ({ Icon, name, pathname, text }) => {
  const currentPath = useLocation();

  return (
    <Link
      to={pathname}
      className={`w-full flex items-center gap-4 px-6 py-4 ${
        currentPath.pathname.includes(name) && "border-r-[5px] bg-secondary"
      } hover:bg-secondary border-active`}
    >
      <Icon size={23} />
      <span className="text-base font-semibold ease-in-out duration-300 hidden lg:block">
        {text}
      </span>
    </Link>
  );
};

export default SidebarButton;
