import React from "react";

interface EventModalProps {
  event: { title: string; start: Date; end: Date };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-600">
          📅 {event.start.toLocaleDateString()} -{" "}
          {event.end.toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          ⏰ {event.start.toLocaleTimeString()} -{" "}
          {event.end.toLocaleTimeString()}
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default EventModal;
