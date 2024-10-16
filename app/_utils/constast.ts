/** @format */

import { LuPackage, LuCalendar } from "react-icons/lu";
import { TbLogs } from "react-icons/tb";
import { TbMessage2Question } from "react-icons/tb";
import { RiFeedbackLine } from "react-icons/ri";
import { LiaStoreAltSolid } from "react-icons/lia";

export const SidebarItems = [
    {
        name: "dashboard",
        path: "/admin/dashboard",
        text: "Dashboard",
        Icon: LuPackage,
    },
    {
        name: "planning",
        path: "/admin/planning",
        text: "Planning",
        Icon: LuCalendar,
    },
    {
        name: "blogs",
        path: "/admin/blogs",
        text: "Blogs",
        Icon: TbLogs,
    },
    {
        name: "career",
        path: "/admin/career",
        text: "Career",
        Icon: TbMessage2Question,
    },
    {
        name: "store",
        path: "/admin/store",
        text: "Store",
        Icon: LiaStoreAltSolid,
    },
    {
        name: "feedback",
        path: "/admin/feedback",
        text: "Feedback",
        Icon: RiFeedbackLine,
    },


];

export const events = [
    {
        name: "Name Of the Events",
        date: "12 Mar 2021",
        time: "3pm - 9pm",
        location: "Kigali, Rwanda",
        price: 50,
        imageUrl: "",
    },
    {
        name: "Name Of the Events",
        date: "12 Mar 2021",
        time: "3pm - 9pm",
        location: "Kigali, Rwanda",
        price: 50,
        imageUrl: "",
    },
];
