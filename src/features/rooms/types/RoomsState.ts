import Room from './Room';

export default interface RoomsState {
  rooms: Room[];
  currentRoom?: Room;
  error?: string | undefined;
}
