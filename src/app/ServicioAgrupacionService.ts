import { Injectable } from "@angular/core";
import { Agrupacion } from "./agrupacion.model";

@Injectable({
  providedIn: "root"
})
export class ServicioAgrupacionService {
  constructor() {}

  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }
}
