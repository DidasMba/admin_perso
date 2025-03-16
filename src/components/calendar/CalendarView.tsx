import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, isBefore, isAfter } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fr } from "date-fns/locale/fr";
import EventModal from "./EventModal";
import Heading from "../common/Heading";

interface Event {
  id: number;
  startingDate: string;
  endDate: string;
  title: string;
  location: string;
  time: string;
}

// Localisation for dates
const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarView: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events: Event[] = [
    {
      id: 1,
      startingDate: "2025-10-01",
      endDate: "2025-10-02",
      title: "Conference on AI",
      location: "San Francisco, CA",
      time: "09:00 AM",
    },
    {
      id: 2,
      startingDate: "2025-11-15",
      endDate: "2025-11-17",
      title: "Web Development Workshop",
      location: "New York, NY",
      time: "10:00 AM",
    },
    {
      id: 3,
      startingDate: "2025-12-05",
      endDate: "2025-12-06",
      title: "Data Science Summit",
      location: "Chicago, IL",
      time: "08:30 AM",
    },
    {
      id: 4,
      startingDate: "2025-01-10",
      endDate: "2025-01-12",
      title: "Tech Innovation Expo",
      location: "Austin, TX",
      time: "11:00 AM",
    },
    {
      id: 5,
      startingDate: "2025-02-20",
      endDate: "2025-02-21",
      title: "Cloud Computing Conference",
      location: "Seattle, WA",
      time: "09:30 AM",
    },
    {
      id: 6,
      startingDate: "2025-03-15",
      endDate: "2025-03-17",
      title: "Mobile App Development Bootcamp",
      location: "Boston, MA",
      time: "10:00 AM",
    },
    {
      id: 7,
      startingDate: "2025-04-05",
      endDate: "2025-04-06",
      title: "Cybersecurity Symposium",
      location: "Washington, DC",
      time: "08:00 AM",
    },
    {
      id: 8,
      startingDate: "2025-05-22",
      endDate: "2025-05-24",
      title: "Blockchain and Crypto Conference",
      location: "Miami, FL",
      time: "12:00 PM",
    },
    {
      id: 9,
      startingDate: "2025-06-10",
      endDate: "2025-06-11",
      title: "UI/UX Design Workshop",
      location: "Los Angeles, CA",
      time: "09:00 AM",
    },
    {
      id: 10,
      startingDate: "2025-07-18",
      endDate: "2025-07-19",
      title: "DevOps and Agile Summit",
      location: "Denver, CO",
      time: "10:30 AM",
    },
  ];

  
  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: new Date(event.startingDate),
    end: new Date(event.endDate),
    location: event.location,
    time: event.time,
  }));

  
  const eventPropGetter = (event: any) => {
    const now = new Date();
    const isPastEvent = isBefore(event.end, now); 
    const isFutureEvent = isAfter(event.start, now);

    const style = {
      backgroundColor: isPastEvent ? "#172554" : isFutureEvent ? "#90EE90" : "#FFD700", 
      color: "#000", 
      borderRadius: "4px",
      border: "none",
    };

    return { style };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <Heading text="Mes Événements" />

      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", width: "100%" }}
        onSelectEvent={(event) => setSelectedEvent(event)}
        eventPropGetter={eventPropGetter} 
      />

      {selectedEvent && (
        <EventModal
          event={{
            id: selectedEvent.id,
            startingDate: selectedEvent.start, 
            endDate: selectedEvent.end, 
            title: selectedEvent.title,
            location: selectedEvent.location,
            time: selectedEvent.time,
          }}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default CalendarView;
