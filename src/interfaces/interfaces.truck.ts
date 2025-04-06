export interface IclientTruck {
    id: number;
    driverName: string;
    driverEmail: string;
    phoneNumber: string;
    truckType: string;
}
export type TclientTruck = Pick<IclientTruck, "driverName" | "driverEmail" | "phoneNumber" | "truckType">