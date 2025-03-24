import React from "react";
import { Program } from "../types/program";

type Props = { programs: Program[] };

const ProgramList: React.FC<Props> = ({ programs }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Vos Programmes</h2>
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
