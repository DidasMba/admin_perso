/** @format */

export type EventTitleType = {
    title: string;
    event_date: string;
    price: number;
    imageUrl: string;
    location: string;
    time_range: string;
    isEditable?: boolean;
};

export type ProgramTitleType = {
    name: string;
    startedIn: string;
    duration: string;
    courses: number;
    progress: string;
    imageUrl: string;
};

export type ButtonType = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    text: string;
    variant?: "primary" | "cancel";
    isLoading?: boolean;
};
