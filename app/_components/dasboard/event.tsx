/** @format */

import { events } from "@/app/_utils/constast";
import React from "react";
import EventTile from "./event/EventTile";

const Event = () => {
    return (
        <div className='flex flex-col gap-4'>
            {events.map((item, i) => (
                <EventTile
                    key={`${item.name}-${i}`}
                    time_range={item.time}
                    event_date={item.date}
                    imageUrl=''
                    location={item.location}
                    price={item.price}
                    title={item.name}
                />
            ))}
        </div>
    );
};

export default Event;
