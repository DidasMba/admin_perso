import { events } from '@/app/_utils/constast';
import React from 'react';
import ProgramTile from '../programme/ProgramTile';



const Event = () => {
  

  return (
    <div className='mt-4'>
     {
      events.map((item,i) => (<ProgramTile key={`${item.name}-${i}`} time_range={item.time}
        event_date={item.date}
        imageUrl=''
        location={item.location}
        price={item.price}
        title={item.name} />))

     }
    </div>
  );
};

export default Event;
