import { Injectable } from '@angular/core';
import { Agrupacion } from './agrupacion.model';
import { ServicioAgrupacionService } from './ServicioAgrupacionService';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private serviAgruEmer:ServicioAgrupacionService, private guarAgru:DataService) { }

  setAgrupaciones(misAgrupaciones:Agrupacion[]){
    this.agrupaciones = misAgrupaciones;
  }

  obtenerAgrupaciones(){
    return this.guarAgru.cargaAgrupaciones();
  }

  agrupaciones: Agrupacion[] = [
    new Agrupacion("Calabaza", "Comparsa", "Martinez Ares", 1991),
    new Agrupacion("Tres notas musicales", "Cuarteto", "Peña y masa", 1991),
    new Agrupacion("Cadi City", "Chirigota", "JC Aragon", 1997),
    new Agrupacion("Inocente, Inocente", "Coro", "Nandi Migueles", 1994)

  ];

  agregarAgrupacionServicio(agrupacion:Agrupacion) {
    this.serviAgruEmer.muestraMensaje("Agrupacion añadida");
    this.agrupaciones.push(agrupacion);
    this.guarAgru.guardaAgrupaciones(this.agrupaciones);

  }


}
