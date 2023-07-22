import Event from './types/Event';
import EventCredentials from './types/EventCredentials';

// eslint-disable-next-line import/prefer-default-export
export async function getEvents(): Promise<{ events: Event[] }> {
    const result = await fetch('/api/events');
    return result.json();
}
// return object!!! Natalia
export async function deleteEvent(id: number): Promise<Event> {
    const res = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}
export async function getEvent(id: number): Promise<Event> {
    const res = await fetch(`/api/event/${id}`);
    return res.json();
}

export async function createEvent(credentials: EventCredentials): Promise<Event> {
    const res = await fetch('/api/events', {
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
