import User from './types/User';
import UserCredentials from './types/UserCredentials';

// eslint-disable-next-line import/prefer-default-export
export async function getUsers(): Promise<{ users: User[] }> {
    const result = await fetch('/api/users');
    return result.json();
}
export async function deleteUser(id: number): Promise<User> {
    const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}
export async function createUser(credentials: UserCredentials): Promise<User> {
    const res = await fetch('/api/users', {
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
