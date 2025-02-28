/** @format */

import { LuPackage, LuCalendar } from "react-icons/lu";
// import { TbLogs } from "react-icons/tb";
import { TbMessage2Question } from "react-icons/tb";
import { RiFeedbackLine } from "react-icons/ri";
import { LiaStoreAltSolid } from "react-icons/lia";

export const TOKEN = "auth-sora";

export const SidebarItems = [
  {
    name: "profile",
    path: "/admin/profile",
    text: "Profile",
    Icon: LuPackage,
  },
  {
    name: "event",
    path: "/admin/event",
    text: "Mes événements",
    Icon: LuCalendar,
  },
  {
    name: "calendar",
    path: "/admin/calendar",
    text: "Calendar",
    Icon: LuCalendar,
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

export const tabItems = [
  {
    id: "programs",
    title: "Programme",
  },
  {
    id: "event",
    title: "Événement",
  },
  {
    id: "article",
    title: "Article",
  },
];

export const programsData = [
  {
    name: "Program CD",
    startedIn: "12 Mar 2024",
    duration: "6 Month",
    courses: 23,
    progress: "64%",
    imageUrl: "",
  },
  {
    name: "Program AB",
    startedIn: "12 Mar 2023",
    duration: "6 Month",
    courses: 10,
    progress: "51%",
    imageUrl: "",
  },
  {
    name: "Program FH",
    startedIn: "12 Mar 2022",
    duration: "6 Month",
    courses: 14,
    progress: "31%",
    imageUrl: "",
  },
];
