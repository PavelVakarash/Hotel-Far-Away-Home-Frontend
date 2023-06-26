export default interface Booking {
    id: number;
    craeted_at: Date;
    user_id: number;
    room_id: number;
    check_in: Date;
    check_out: Date;
    total_price: number;
}
