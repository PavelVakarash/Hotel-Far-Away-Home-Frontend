import Room from './Room';

export default interface RoomsState {
  rooms: Room[];
  currentRoom?: Room;
  availableRooms:Room[];
  error?: string | undefined;
  cheCkIn: string;
  checkOut: string;
}
