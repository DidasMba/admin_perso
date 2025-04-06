// import { useState } from "react";
import Heading from "../common/Heading";
import EventCard from "./EventCard";
import { useGetUserEventQuery } from "../../lib/features/slice/eventsSlice";

// type Event = {
//   id: number;
//   title: string;
//   date: string;
//   image: string;
// };

const EventProfile: React.FC = () => {
  // const eventsPerPage = 3;
  // const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetUserEventQuery();

  const savedEvent = {
    title: "Conférence IA et Innovation",
    date: "25 Février 2025",
    image: "/saved-event.jpg",
  };

  // const totalPages = Math.ceil(pastEvents.length / eventsPerPage);
  // const startIndex = (currentPage - 1) * eventsPerPage;
  // const displayedEvents = pastEvents.slice(
  //   startIndex,
  //   startIndex + eventsPerPage
  // );
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="w-full">
      {/* Événement enregistré en grand format */}
      <Heading text="Événements  enregistré" />
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={savedEvent.image}
          alt={savedEvent.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-2xl font-bold">{savedEvent.title}</h2>
          <p className="text-lg">{savedEvent.date}</p>
        </div>
      </div>

      {/* Section des événements passés */}
      <Heading text="Événements passés" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.data.length === 0 ? (
          <div>
            <h3>Pas des evenement trouver</h3>
          </div>
        ) : (
          data?.data.map((event) => (
            <EventCard
              key={event.id}
              event={{
                id: event.id,
                title: event.EventTranslation[0].theme,
                date: event.start_date,
                image: event.thumbnail,
              }}
            />
          ))
        )}
        {/* {displayedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))} */}
      </div>

      {/* Boutons de pagination */}
      {/* <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span className="px-3 py-1 bg-gray-200 rounded font-semibold">
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div> */}
    </div>
  );
};

export default EventProfile;

//b y p a g n
