/** @format */

import { ButtonType } from "@/types/program";
import React, { FC } from "react";

const Button: FC<ButtonType> = ({
    type = "button",
    onClick,
    text,
    variant = "primary",
    isLoading = false,
}) => {
    return (
        <button
            className={`${
                variant === "primary"
                    ? "bg-primary hover:bg-lightBlue text-white"
                    : "bg-grayish hover:bg-slate-100 text-primary"
            } py-2 px-6 lg:px-8 rounded-3xl text-sm font-semibold duration-300`}
            onClick={onClick}
            type={type}
        >
            {isLoading ? (
                <span className='loading loading-spinner loading-sm'></span>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
