"use client";

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

const EventFilters = ({ onFilterChange }) => {
  const [eventType, setEventType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ eventType, dateFrom, dateTo });
  };

  return (
    <div>
      <select onChange={(e) => setEventType(e.target.value)} value={eventType}>
        <option value=''>Tous les types</option>
        <option value='ATELIER'>Atelier</option>
        <option value='HACKATHON'>Hackathon</option>
        <option value='CONFERENCE'>Conférence</option>
      </select>
      <input
        type='date'
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />
      <input
        type='date'
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />
      <button onClick={handleFilterChange}>Filtrer</button>
    </div>
  );
};

const Planning = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events'); // Remplace par l'URL de ton API
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleFilterChange = async (filters) => {
    const { eventType, dateFrom, dateTo } = filters;
    try {
      const response = await axios.get('/api/events', {
        params: { eventType, dateFrom, dateTo },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching filtered events:', error);
    }
  };

  return (
    <div>
      <h1>Planning page ok</h1>
      <EventFilters onFilterChange={handleFilterChange} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={events.map((event) => ({
          title: event.theme,
          date: event.start_date, // Assure-toi que la date est au bon format
        }))}
      />
    </div>
  );
};

export default Planning;

