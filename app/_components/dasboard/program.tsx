import React from 'react';
import Image from 'next/image';

const Program = () => {
  const programs = [
    {
      id: 1,
      title: 'Programme A',
      description: 'Description du programme A...',
      imageUrl: '/blog-1.png',
    },
    {
      id: 2,
      title: 'Programme B',
      description: 'Description du programme B...',
      imageUrl: '/bien3.jpg',
    },
    {
      id: 3,
      title: 'Programme C',
      description: 'Description du programme C...',
      imageUrl: '/bien5.JPG',
    },
  ];

  return (
    <main className='mt-4'>
      <h4 className='text-lg font-semibold mb-4'>Programmes Passés</h4>
      <div className='space-y-4'>
        {programs.map(({ id, title, description, imageUrl }) => (
          <div key={id} className='bg-white p-4 rounded-lg shadow-md flex items-start space-x-4 transition hover:shadow-lg'>
            <Image 
              src={imageUrl} 
              alt={title} 
              width={128} 
              height={128} 
              className='w-32 h-32 rounded-lg object-cover' 
            />
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

export default Program;

