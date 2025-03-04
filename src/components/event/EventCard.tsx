import React from "react";

interface Event {
  id?: number;
  title: string;
  date: string;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-500">{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
