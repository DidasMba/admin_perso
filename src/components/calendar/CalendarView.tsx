import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import fr from "date-fns/locale/fr";
import { userEvents } from "./eventData";
import EventModal from "./EventModal";
import Heading from "../common/Heading";

// Localisation pour les dates
const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarView: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="p-6 bg-white rounded-lg shadow ">
      <Heading text="Mes Événements" />

      <Calendar
        localizer={localizer}
        events={userEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", width: "100%" }} // Hauteur et largeur ajustées
        onSelectEvent={(event) => setSelectedEvent(event)}
      />

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default CalendarView;
