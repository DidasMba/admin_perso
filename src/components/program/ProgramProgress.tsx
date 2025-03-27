import React from "react";
type Program = {
  id: string;
  name: string;
  status: string;
  nextEvent?: string;
  startDate?: string;
  endDate?: string;
  progress: number;
};

type Props = { programs: Program[] };

const ProgramProgress: React.FC<Props> = ({ programs }) => {
  const formatFrenchDate = (dateString?: string) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long", // This will show full month name in French
      year: "numeric",
    };

    return date.toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Progression</h2>
      <ul className="space-y-3">
        {programs.map((program) => (
          <li key={program.id} className="p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{program.name}</span>
              <span className="text-sm text-gray-500">
                {formatFrenchDate(program.startDate)} - {formatFrenchDate(program.endDate)}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${program.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Début</span>
              <span>Fin</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramProgress;