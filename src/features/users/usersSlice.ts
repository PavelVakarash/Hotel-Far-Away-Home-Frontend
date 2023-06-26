import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import UserCredentials from './types/UserCredentials';
import UsersState from './types/UsersState';

const initialState: UsersState = {
    users: [],
    error: undefined,
};

// eslint-disable-next-line import/prefer-default-export
export const loadUsers = createAsyncThunk('users/loadUsers', () =>
    api.getUsers()
);

export const deleteUser = createAsyncThunk('users/deleteUser', (id: number) =>
    api.deleteUser(id)
);
export const createUser = createAsyncThunk('users/createUser', (credentials: UserCredentials) =>
    api.createUser(credentials)
);
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload.users;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((el: { id: number; }) =>
                el.id !== action.payload.id);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            });
    },
});

export const { resetError } = usersSlice.actions;

export default usersSlice.reducer;
