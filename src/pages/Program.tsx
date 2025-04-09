import React from "react";
import BaseLayout from "../components/BaseLayout";
import ProgramList from "../components/program/ProgramList";
import ProgramProgress from "../components/program/ProgramProgress";

type Program = {
  id: string;
  name: string;
  status: string;
  progress: number;
  startDate?: string; 
  endDate?: string;  
  nextEvent?: string;
};

const mockPrograms: Program[] = [
  {
    id: "1",
    name: "Développement Web",
    status: "En cours",
    progress: 60,
    startDate: "2025-03-03",
    endDate: "2025-11-30",
    nextEvent: "10 Septembre",
  },
  {
    id: "2",
    name: "Data Science",
    status: "Terminé",
    progress: 100,
    startDate: "2025-01-15",
    endDate: "2025-05-20",
  },
  {
    id: "3",
    name: "Marketing Digital",
    status: "À venir",
    progress: 0,
    startDate: "2025-10-01",
    endDate: "2025-02-28",
    nextEvent: "15 Octobre",
  },
];

const Program: React.FC = () => {
  return (
    <BaseLayout>
      {/* <UserProfile /> */}
      <ProgramList programs={mockPrograms} />
      <div className="mt-8">
        {" "}
        {/* Ajout de l'espace entre les composants */}
        <ProgramProgress programs={mockPrograms} />
      </div>
    </BaseLayout>
  );
};

export default Program;
