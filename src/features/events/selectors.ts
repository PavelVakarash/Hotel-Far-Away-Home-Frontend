import Event from './types/Event';
import { RootState } from '../../store';

export const selectEvents = (state: RootState): Event[] => state.events.events;
export const selectError = (state: RootState): string | undefined =>
  state.events.error;
  