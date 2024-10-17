/** @format */

import React from "react";
import { programsData } from "@/app/_utils/constast";
import ProgramTile from "../programme/ProgramTile";

const Program = () => {
    return (
        <div className='flex flex-col gap-4'>
            {programsData.map((item, i) => (
                <ProgramTile key={`${item.name}-${i}`} {...item} />
            ))}
        </div>
    );
};

export default Program;
