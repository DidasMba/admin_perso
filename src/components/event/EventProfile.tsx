import React from "react";
import Heading from "../common/Heading";

// Définition de l'interface pour typer les événements
interface Event {
  id?: number;
  title: string;
  date: string;
  image: string;
  description?: string;
}

// Composant pour l'événement en cours
const CurrentEvent: React.FC<{ event: Event }> = ({ event }) => (
  <div className="mb-8">
    <Heading text={`Événement enregistré`} />
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm">{event.date}</p>
        <p className="text-xs mt-1">{event.description}</p>
      </div>
    </div>
  </div>
);

// Composant pour les cartes d'événements passés
const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="rounded-xl overflow-hidden shadow-lg">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-56 object-cover"
    />
    <div className="p-3 bg-white">
      <h3 className="text-md font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.date}</p>
    </div>
  </div>
);

// Composant principal
const EventProfile: React.FC = () => {
  // Données simulées (à récupérer dynamiquement)
  const currentEvent: Event = {
    title: "Conférence Tech Africa",
    date: "15 Février 2025",
    image: "/event-current.jpg",
    description:
      "Une conférence sur les innovations technologiques en Afrique.",
  };

  const pastEvents: Event[] = [
    {
      id: 1,
      title: "Hackathon Kigali",
      date: "10 Janvier 2025",
      image: "/event1.jpg",
    },
    {
      id: 2,
      title: "Forum Startups Nairobi",
      date: "20 Décembre 2024",
      image: "/event2.jpg",
    },
    {
      id: 3,
      title: "Web3 Summit Lagos",
      date: "5 Novembre 2024",
      image: "/event3.jpg",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center p-6  bg-gray-50">
      <div className="w-full px-6">
        {/* Événement en cours */}
        <CurrentEvent event={currentEvent} />

        {/* Événements passés */}
        <div className="w-full">
          <Heading text={`Événements passés`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventProfile;
