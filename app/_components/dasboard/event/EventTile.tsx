/** @format */

import { EventTitleType, ProgramTitleType } from "@/types/program";
import Image from "next/image";
import React from "react";
import Button from "../../common/Button";

const EventTile: React.FC<EventTitleType> = ({
    title,
    event_date,
    price,
    imageUrl,
    location,
    time_range,
}) => {
    const StrongTitle = ({ text }: { text: string }) => (
        <span className='font-semibold text-primary text-xs lg:text-sm'>
            {text}
        </span>
    );
    return (
        <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2'>
            <div className='flex flex-col md:flex-row items-center gap-4 col-span-1 md:col-span-2 lg:col-span-2'>
                <div className='md:max-w-[107px]  md:h-[94px] h-[150px] bg-grayish w-full rounded-md'>
                    <Image
                        src={imageUrl}
                        className='h-full w-full object-cover rounded-md'
                        alt={title}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <h5 className='text-sm font-bold md:text-base'>{title}</h5>
                    <div className='flex  space-x-8'>
                        <p className='text-xs'>
                            <StrongTitle text='Date' />: {event_date}
                        </p>
                        <p className='text-xs'>
                            <StrongTitle text='Time' />: {time_range}
                        </p>
                    </div>
                    <p className='text-xs'>
                        <StrongTitle text='Price' />: ${price}
                    </p>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='col-span-1 md:col-span-1 text-xs'>
                    <StrongTitle text='Location' />: {location}
                </p>
            </div>
            <div className='col-span-1 md:col-span-1 flex items-center'>
                <div className='flex gap-4'>
                    <Button text='Continue' />
                </div>
            </div>
        </div>
    );
};

export default EventTile;
