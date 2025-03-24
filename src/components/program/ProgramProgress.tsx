import React from "react";
import { Program } from "../types/program";

type Props = { programs: Program[] };

const ProgramProgress: React.FC<Props> = ({ programs }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Progression</h2>
      <ul className="space-y-3">
        {programs.map((program) => (
          <li key={program.id} className="p-3">
            <span className="font-medium">{program.name}</span>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${program.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramProgress;
