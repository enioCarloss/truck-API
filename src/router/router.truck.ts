import { Router } from "express";
export const routerTruck = Router();
//routes api
routerTruck.get("/");
routerTruck.post("/")
routerTruck.get("/:id");
routerTruck.patch("/:id")
routerTruck.delete("/:id")