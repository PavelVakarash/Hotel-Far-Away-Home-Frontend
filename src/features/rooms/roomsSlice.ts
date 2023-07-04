import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RoomsState from './types/RoomsState';
import * as api from './api';
import RoomCredentials from './types/RoomCredentials';

const initialState: RoomsState = {
    rooms: [],
    error: undefined,
    currentRoom: undefined,
};
// eslint-disable-next-line import/prefer-default-export
export const loadRooms = createAsyncThunk('rooms/loadRooms', () =>
    api.getRooms()
);
export const deleteRoom = createAsyncThunk('rooms/deleteRoom', (id: number) =>
    api.deleteRoom(id)
);
export const getRoom = createAsyncThunk('rooms/getRoom', (id: number) =>
    api.getRoom(id)
);
export const createRoom = createAsyncThunk('rooms/createRoom', (credentials: RoomCredentials) =>
    api.createRoom(credentials)
);
const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRooms.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(loadRooms.fulfilled, (state, action) => {
                state.rooms = action.payload.data;
            })
            .addCase(deleteRoom.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.rooms = state.rooms.filter((el) => el.id !== action.payload.id);
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.rooms.push(action.payload);
            })
            .addCase(getRoom.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(getRoom.fulfilled, (state, action) => {
                state.currentRoom = action.payload;
            });
    },
});

export const { resetError } = roomsSlice.actions;

export default roomsSlice.reducer;
