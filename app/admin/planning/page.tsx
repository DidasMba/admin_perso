"use client";

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { AiOutlineCalendar } from 'react-icons/ai'; // Icône de calendrier
import { BiFilter } from 'react-icons/bi'; // Icône de filtre

const EventFilters = ({ onFilterChange }) => {
  const [eventType, setEventType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ eventType, dateFrom, dateTo });
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Filtrer les Événements</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <BiFilter className="text-xl text-gray-600" />
          <select
            onChange={(e) => setEventType(e.target.value)}
            value={eventType}
            className="border border-gray-300 rounded p-2"
          >
            <option value=''>Tous les types</option>
            <option value='ATELIER'>Atelier</option>
            <option value='HACKATHON'>Hackathon</option>
            <option value='CONFERENCE'>Conférence</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineCalendar className="text-xl text-gray-600" />
          <input
            type='date'
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <span>à</span>
        <div className="flex items-center space-x-2">
          <AiOutlineCalendar className="text-xl text-gray-600" />
          <input
            type='date'
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          onClick={handleFilterChange}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Appliquer
        </button>
      </div>
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
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-6">Planning des Événements</h1> */}
      <EventFilters onFilterChange={handleFilterChange} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        events={events.map((event) => ({
          title: event.theme,
          date: event.start_date, // Assure-toi que la date est au bon format
        }))}
        className="mt-4"
      />
    </div>
  );
};

export default Planning;
