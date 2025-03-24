import React from "react";
import { Program } from "../types/program";

type Props = { programs: Program[] };

const UpcomingEvents: React.FC<Props> = ({ programs }) => {
  const upcomingEvents = programs.filter((p) => p.nextEvent);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Prochains Événements</h2>
      {upcomingEvents.length === 0 ? (
        <p>Aucun événement à venir</p>
      ) : (
        <ul className="space-y-3">
          {upcomingEvents.map((program) => (
            <li key={program.id} className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between">
                <span className="font-medium">{program.name}</span>
                <span className="text-sm text-blue-500">
                  {program.nextEvent}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingEvents;
