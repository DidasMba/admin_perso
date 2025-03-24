import React from "react";
import BaseLayout from "../components/BaseLayout";
import ProgramList from "../components/program/ProgramList";
import ProgramProgress from "../components/program/ProgramProgress";

import UpcomingEvents from "../components/program/UpcomingEvents";

type Program = {
  id: string;
  name: string;
  status: string;
  progress: number;
  nextEvent?: string;
};

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
    <BaseLayout>
      {/* <UserProfile /> */}
      <ProgramList programs={mockPrograms} />
      <ProgramProgress programs={mockPrograms} />
      <UpcomingEvents programs={mockPrograms} />
    </BaseLayout>
  );
};

export default Program;
