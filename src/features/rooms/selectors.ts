import { RootState } from '../../store';
import Room from './types/Room';

export const selectRooms = (state: RootState): Room[] => state.rooms.rooms;
export const selectRoom = (state: RootState): Room | undefined => state.rooms.currentRoom;
export const selectError = (state: RootState): string | undefined =>
  state.rooms.error;
