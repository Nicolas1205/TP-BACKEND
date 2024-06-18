import { ObjectId } from "mongodb";

interface Ticket {
    precioTicket: number,
    categoriaExpectador:string, 
    fechaCompra: string, 
    espectador: ObjectId,
}