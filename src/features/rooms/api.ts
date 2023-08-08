import Room from './types/Room';

import RoomCredentials from './types/RoomCredentials';

// eslint-disable-next-line import/prefer-default-export
export async function getRooms(): Promise<{ data: Room[] }> {
    const result = await fetch('/api/rooms');
    return result.json();
}
export async function getAvailableRooms(cheCkIn:string, checkOut:string):Promise<{ data: Room[] }> {
    const result = await fetch(`api/rooms/available?checkInDate=${cheCkIn}&checkOutDate=${checkOut}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'accept: application/json',
        }
    });
    return result.json();
}
export async function deleteRoom(id: number): Promise<Room> {
    const res = await fetch(`/api/rooms/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}
export async function getRoom(id: number): Promise<Room> {
    const res = await fetch(`/api/rooms/${id}`);
    return res.json();
}

export async function createRoom(credentials: RoomCredentials): Promise<Room> {
    const res = await fetch('/api/rooms', {
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
