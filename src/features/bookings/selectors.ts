import Booking from './types/Booking';
import { RootState } from '../../store';

export const selectBookings = (state: RootState): Booking[] => state.bookings.bookings;
export const selectError = (state: RootState): string | undefined =>
  state.bookings.error;
