import { dataBaseClient, generateId } from "../database/database"
import { IclientTruck } from "../interfaces/interfaces.truck"

export class ServicesTruck {

    // Add your methods here
    getClientsTruck() {
        return dataBaseClient
    }
    getClientId(idTruck: string) {

        const foundClient = dataBaseClient.find((client) => client.id === Number(idTruck))
        if (!foundClient) {
            return { message: "Client not found" }
        }

        return foundClient
    }

    createClientsTruck(driverName: string, driverEmail: string, phoneNumber: string, truckType: string) {
        const newClient: IclientTruck = {
            id: generateId(),
            driverName: driverName,
            driverEmail: driverEmail,
            phoneNumber: phoneNumber,
            truckType: truckType
        }
        dataBaseClient.push(newClient)
        return newClient
    }
    updateClientTruck(id: string, driverName: string, driverEmail: string, phoneNumber: string, truckType: string) {

        const indexClient = dataBaseClient.findIndex((iten) => iten.id === Number(id))
        if (indexClient === -1) {
            return { message: "Client not found" }

        }
        const updatedClient: IclientTruck = {
            id: Number(id),
            driverName: driverName,
            driverEmail: driverEmail,
            phoneNumber: phoneNumber,
            truckType: truckType
        }
        dataBaseClient[indexClient] = updatedClient
        return updatedClient

    }
    deleteClientTruck(idTruck: string) {
        const indexClient = dataBaseClient.findIndex((iten) => iten.id === Number(idTruck))
        if (indexClient === -1) {
            return { message: "Client not found" }
        }
        dataBaseClient.splice(indexClient, 1)
        return { message: "Client deleted successfully" }

    }
}