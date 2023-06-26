import User from './types/User';
import { RootState } from '../../store';

export const selectUsers = (state: RootState): User[] => state.users.users;
export const selectError = (state: RootState): string | undefined =>
  state.users.error;
