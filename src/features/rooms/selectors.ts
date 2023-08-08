import { RootState } from '../../store';
import Room from './types/Room';

export const selectAvailableRooms = (state: RootState): Room[] =>
state.rooms.availableRooms;
export const selectRooms = (state: RootState): Room[] => state.rooms.rooms;
export const selectcheCkIn = (state: RootState): string => state.rooms.cheCkIn;
export const selectcheckOut = (state: RootState): string => state.rooms.checkOut;
export const selectRoom = (state: RootState): Room | undefined => state.rooms.currentRoom;
export const selectError = (state: RootState): string | undefined =>
  state.rooms.error;
