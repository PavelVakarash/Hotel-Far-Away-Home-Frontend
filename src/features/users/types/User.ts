export default interface User {
    id: number;
    created_at: Date;
    firstName: string;
    lasName: string;
    email: string;
    phone: string;
    role: string;
    hash_pasword: string
}
