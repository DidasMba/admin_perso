import React from 'react';
import Image from 'next/image';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Article A',
      description: 'Description de l\'article A...',
      imageUrl: '/article-1.png',
    },
    {
      id: 2,
      title: 'Article B',
      description: 'Description de l\'article B...',
      imageUrl: '/article-2.jpg',
    },
    {
      id: 3,
      title: 'Article C',
      description: 'Description de l\'article C...',
      imageUrl: '/article-3.JPG',
    },
  ];

  return (
    <main className='mt-4'>
      
      <h4 className='text-lg font-semibold mb-4'>Articles Récents</h4>
      <div className='space-y-4'>
        {articles.map(({ id, title, description, imageUrl }) => (
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
                Lire Plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Articles;
