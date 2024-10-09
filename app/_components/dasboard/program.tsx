import React from 'react';
// import { CiDeliveryTruck } from 'react-icons/ci'; // Exemple d'icône, tu peux en ajouter d'autres ou remplacer
import Image from 'next/image'; // Si tu utilises Next.js, sinon utilise la balise <img>

const Program = () => {
  // Exemple de programmes passés avec une image, un titre, et une description
  const programs = [
    {
      id: 1,
      title: 'Programme A',
      description: 'Description du programme A...',
      imageUrl: '/path-to-your-image-1.jpg',
    },
    {
      id: 2,
      title: 'Programme B',
      description: 'Description du programme B...',
      imageUrl: '/path-to-your-image-2.jpg',
    },
    {
      id: 3,
      title: 'Programme C',
      description: 'Description du programme C...',
      imageUrl: '/path-to-your-image-3.jpg',
    },
  ];

  return (
    <main className='mt-4'>
      <h4 className='text-lg font-semibold mb-4'>Programmes Passés</h4>
      <div className='space-y-6'>
        {programs.map(program => (
          <div key={program.id} className='bg-white p-4 rounded-md shadow-md flex items-start space-x-4'>
            {/* Image de programme */}
            <div className='w-32 h-32 flex-shrink-0'>
              <Image 
                src={program.imageUrl} 
                alt={program.title} 
                width={128} 
                height={128} 
                className='rounded-md object-cover' 
              />
            </div>

            {/* Détails du programme */}
            <div className='flex-1'>
              <h3 className='text-xl font-bold mb-2'>{program.title}</h3>
              <p className='text-gray-600 mb-4'>{program.description}</p>
              
              {/* Bouton Continuer */}
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md ml-auto'>
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
