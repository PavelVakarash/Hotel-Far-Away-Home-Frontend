export default interface IBooking {
    id: number,
    cheCkIn: string,
    checkOut: string,
    roomIds: [
        number
    ],
    userId: any
}
