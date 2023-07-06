import Booking from './types/Booking';
import { RootState } from '../../store';
import IBooking from './types/IBooking';

export const selectBookings = (state: RootState): Booking[] => state.bookings.bookings;
export const selectMyBookings = (state: RootState): IBooking[] => state.bookings.usersBookings;
export const selectError = (state: RootState): string | undefined =>
  state.bookings.error;
