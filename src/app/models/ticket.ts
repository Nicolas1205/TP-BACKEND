import { Espectador } from "./espectador";
import { Categoria } from "./categoria";

export class Ticket {
  _id!:string
  precioTicket!: number;
  categoriaEspectador!: string;
  fechaCompra!: string;
  espectador!:Espectador;
  tipoCategoria!: number;
  categoria!: string;
}
