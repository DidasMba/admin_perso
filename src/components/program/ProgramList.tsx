import React from "react";
import Heading from "../common/Heading";
import Program from "@/pages/Program";
// import { Program } from "../types/program";

type Props = { programs: Program[] };

const ProgramList: React.FC<Props> = ({ programs }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Heading text="Mes Programmes" />
      <ul className="space-y-3">
        {programs.map((program) => (
          <li key={program.id} className="p-3 bg-gray-100 rounded-md">
            <div className="flex justify-between">
              <span className="font-medium">{program.name}</span>
              <span
                className={`text-sm ${
                  program.status === "En cours"
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {program.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramList;
