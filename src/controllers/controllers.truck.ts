import { Request, Response } from "express";
import { dataBaseClient } from "../database/database";
import { IclientTruck } from "../interfaces/interfaces.truck";
import { ServicesTruck } from "../services/services.truck";

export class ControllersWashTruck {

    getClientsTruck(req: Request, res: Response) {
        const servicesTruck = new ServicesTruck()
        const response = servicesTruck.getClientsTruck()
        res.status(200).json(response)
    }
    getClientId(req: Request, res: Response) {
    
        const servicesTruck = new ServicesTruck()
        const response = servicesTruck.getClientId(req.params.id)
        res.status(200).json(response)
    }

    createClientsTruck(req: Request, res: Response) {

        const servicesTruck = new ServicesTruck()
        const response = servicesTruck.createClientsTruck(req.body.driverName, req.body.driverEmail, req.body.phoneNumber, req.body.truckType)
        res.status(201).json(response)
    }
    updateClientTruck(req: Request, res: Response) {

        const servicesTruck = new ServicesTruck()
        const response = servicesTruck.updateClientTruck(req.params.id, req.body.driverName, req.body.driverEmail, req.body.phoneNumber, req.body.truckType)
        res.status(200).json(response)
    }
    deleteClientTruck(req: Request, res: Response) {
        const servicesTruck = new ServicesTruck()
        const response = servicesTruck.deleteClientTruck(req.params.id,)
        res.status(204).json(response)

    }

}

