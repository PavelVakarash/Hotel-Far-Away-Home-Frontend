import Booking from './Booking';

export default interface BookingsState {
  bookings: Booking[];
  error?: string | undefined;
}
