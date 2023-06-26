import Room from './Room';

export default interface RoomsState {
  rooms: Room[];
  error?: string | undefined;
}
