import { ReactNode } from "react";

export default interface IBooking {
    checkIn: ReactNode;
    id: number,
    cheCkIn: string,
    checkOut: string,
    roomIds: [
        number
    ],
    userId: any
}
