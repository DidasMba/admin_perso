import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import { EventType } from "@/types/event";

interface Event {
  id: number;
  title: string;
  theme: string; // New: theme of the event
  date: string;
  image: string;
  start: Date;
  end: Date;
}

interface EventsState {
  savedEvent: Event | null;
  pastEvents: Event[];
}

const initialState: EventsState = {
  savedEvent: null,
  pastEvents: [],
};

const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserEvent: builder.query<
      { status: string; message: string; data: Array<EventType> },
      void
    >({
      query: () => "/event/user",
    }),
  }),
});

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.pastEvents.push(action.payload);
    },
    setSavedEvent: (state, action: PayloadAction<Event>) => {
      state.savedEvent = action.payload;
    },
  },
});

export const { useGetUserEventQuery } = eventApi;

export const { addEvent, setSavedEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
