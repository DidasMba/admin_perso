import React from "react";

interface EventModalProps {
  event: {
    id: number;
    startingDate: Date; 
    endDate: Date; 
    title: string;
    location: string;
    time: string;
  };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  
  const startDate = event.startingDate; 
  const endDate = event.endDate; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
        {/* Close Button (Cross Icon) */}
        <button
  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors text-3xl p-2"
  onClick={onClose}
>
  ×
</button>


        <h2 className="text-2xl font-bold mb-4 text-gray-800">{event.title}</h2>

        {/* Date Section */}
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">📅</span>
          <p className="text-gray-700">
            {startDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })} -{" "}
            {endDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Time Section */}
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">⏰</span>
          <p className="text-gray-700">{event.time}</p>
        </div>

        {/* Location Section */}
        <div className="flex items-center mb-6">
          <span className="text-gray-600 mr-2">📍</span>
          <p className="text-gray-700">{event.location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
