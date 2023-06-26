import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookingsState from './types/BookingsState';
import * as api from './api';
import BookingCredentials from './types/BookingCredentials';

const initialState: BookingsState = {
    bookings: [],
    error: undefined,
};

// eslint-disable-next-line import/prefer-default-export
export const loadBookings = createAsyncThunk('bookings/loadBookings', () =>
    api.getBookings()
);

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', (id: number) =>
    api.deleteBooking(id)
);
export const createBooking = createAsyncThunk('bookings/createBooking', (credentials:BookingCredentials) =>
    api.createBooking(credentials)
);
const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBookings.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(loadBookings.fulfilled, (state, action) => {
                state.bookings = action.payload.bookings;
            })
            .addCase(deleteBooking.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter((el) => el.id !== action.payload.id);
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings.push(action.payload);
            });
    },
});

export const { resetError } = bookingsSlice.actions;

export default bookingsSlice.reducer;
