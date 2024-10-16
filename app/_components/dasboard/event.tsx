import React from 'react';
import Image from 'next/image';



const Event = () => {
  const events = [
    {
      id: 1,
      title: 'Événement A',
      description: 'Description de l\'événement A...',
      imageUrl: '/event-1.png',
    },
    {
      id: 2,
      title: 'Événement B',
      description: 'Description de l\'événement B...',
      imageUrl: '/event-2.jpg',
    },
    {
      id: 3,
      title: 'Événement C',
      description: 'Description de l\'événement C...',
      imageUrl: '/event-3.JPG',
    },
  ];

  return (
    <main className='mt-4'>
      <h4 className='text-lg font-semibold mb-4'>Événements Passés</h4>
      <div className='space-y-4'>
        {events.map(({ id, title, description, imageUrl }) => (
          <div key={id} className='bg-white p-4 rounded-lg shadow-md flex items-start space-x-4 transition hover:shadow-lg'>
            

               <div className='max-w-[279px] w-full h-[300px] bg-grayish shadow-sm rounded-md flex items-center justify-center'>
                    <Image
                        src={ThumbEvent}
                        alt='events'
                        className='w-full h-full object-cover rounded-md'
                    />
                </div>
            <div className='flex-1 flex justify-between items-center'>
              <div>
                <h3 className='text-xl font-semibold mb-1'>{title}</h3>
                <p className='text-gray-700'>{description}</p>
              </div>
              <button className='bg-primary text-white px-4 py-1 rounded-2xl hover:bg-customHoverBlue'>
                Continuer
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Event;
