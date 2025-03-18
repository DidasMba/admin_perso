import React from "react";
import ProgramList from "../components/ProgramList";
import ProgramProgress from "../components/ProgramProgress";
import UpcomingEvents from "../components/UpcomingEvents";
import { Program } from "../types/program";

const mockPrograms: Program[] = [
  {
    id: "1",
    name: "Développement Web",
    status: "En cours",
    progress: 60,
    nextEvent: "10 Septembre",
  },
  { id: "2", name: "Data Science", status: "Terminé", progress: 100 },
  {
    id: "3",
    name: "Marketing Digital",
    status: "À venir",
    progress: 0,
    nextEvent: "15 Octobre",
  },
];

const Program: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Program</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgramList programs={mockPrograms} />
        <ProgramProgress programs={mockPrograms} />
        <UpcomingEvents programs={mockPrograms} />
      </div>
    </div>
  );
};

export default Program;
