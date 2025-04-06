import { Router } from "express";
import { ControllersWashTruck } from "../controllers/controllers.truck";
export const routerTruck = Router();
const washTruckController = new ControllersWashTruck();
//routes api
routerTruck.get("/", washTruckController.getClientsTruck);
routerTruck.post("/", washTruckController.createClientsTruck);
routerTruck.get("/:id", washTruckController.getClientId);
routerTruck.patch("/:id", washTruckController.updateClientTruck);
routerTruck.delete("/:id", washTruckController.deleteClientTruck);