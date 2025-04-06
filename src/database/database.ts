import { IclientTruck } from "../interfaces/interfaces.truck";

export const dataBaseClient: IclientTruck[] = []
let id = 0
export const generateId = ()=>{
    id++
    return id
 
}