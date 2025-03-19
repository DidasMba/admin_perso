import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../lib/features/slice/eventsSlice";

const AddEventForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleAddEvent = () => {
    if (!title || !start || !end) return;

    dispatch(
      addEvent({
        id: Math.random(),
        title,
        start: new Date(start),
        end: new Date(end),
      })
    );

    setTitle("");
    setStart("");
    setEnd("");
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Add New Event</h3>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleAddEvent} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Event
      </button>
    </div>
  );
};

export default AddEventForm;
