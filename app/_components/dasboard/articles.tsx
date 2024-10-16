/** @format */

import React from "react";
import { events } from "@/app/_utils/constast";
import EventTile from "./event/EventTile";

const Articles = () => {
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

export default Articles;
