import Event from './Event';

export default interface EventsState {
  events: Event[];
  currentEvent?: Event;
  error?: string | undefined;
}
