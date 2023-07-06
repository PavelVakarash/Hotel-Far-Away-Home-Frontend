import Booking from './types/Booking';
import BookingCredentials from './types/BookingCredentials';
import IBooking from './types/IBooking';

// eslint-disable-next-line import/prefer-default-export
export async function getBookings(): Promise<{ bookings: Booking[] }> {
    const result = await fetch('/api/bookings');
    return result.json();
}
export async function getMyBookings(): Promise<IBooking[]> {
    const result = await fetch('api/bookings/by-user');
    return result.json();
}
// return object!!! Natalia
export async function deleteBooking(id: number): Promise<Booking> {
    const res = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}

export async function createBooking(credentials: BookingCredentials): Promise<Booking> {
    const res = await fetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.status >= 400) {
        const { message } = await res.json();
        throw Error(message);
    }
    return res.json();
}
