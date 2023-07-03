import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EventsState from './types/EventsState';
import * as api from './api';
import EventCredentials from './types/EventCredentials';

const initialState: EventsState = {
    events: [],
    error: undefined,
};
// eslint-disable-next-line import/prefer-default-export
export const loadEvents = createAsyncThunk('events/loadEvents', () =>
    api.getEvents()
);
export const deleteEvent = createAsyncThunk('events/deleteEvent', (id: number) =>
    api.deleteEvent(id)
);
export const createEvent = createAsyncThunk('events/createEvent', (credentials: EventCredentials) =>
    api.createEvent(credentials)
);
const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadEvents.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(loadEvents.fulfilled, (state, action) => {
                state.events = action.payload.events;
            })
            .addCase(deleteEvent.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.events = state.events.filter((el) => el.id !== action.payload.id);
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.events.push(action.payload);
            });
    },
});

export const { resetError } = eventsSlice.actions;

export default eventsSlice.reducer;
