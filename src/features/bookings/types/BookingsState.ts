import Booking from './Booking';
import IBooking from './IBooking';

export default interface BookingsState {
  bookings: Booking[];
  error?: string | undefined;
  usersBookings: IBooking[];
}
