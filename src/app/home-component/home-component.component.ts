import { Component, OnInit } from '@angular/core';
import { Agrupacion } from '../agrupacion.model';
import { ServicioAgrupacionService } from '../ServicioAgrupacionService';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title = 'Lista de Agrupaciones históricas del Carnaval de Cadiz';

  agrupaciones: Agrupacion[] = [
  ];

  constructor(private miServicio:ServicioAgrupacionService, private agruService:EmpleadosService) { }

  ngOnInit(): void {
    //this.agrupaciones = this.agruService.agrupaciones;
    console.log(this.agruService.obtenerAgrupaciones());
    this.agruService.obtenerAgrupaciones().subscribe(
      misAgrupaciones => {
        console.log(misAgrupaciones);
        this.agrupaciones = Object.values(misAgrupaciones);
        this.agruService.setAgrupaciones(this.agrupaciones);
      }
    );
  }

  agregarAgrupacion() {
    let laAgrupacion = new Agrupacion(this.cuadroNombre, this.cuadroTipo, this.cuadroAutor, this.cuadroAnyo);
    //this.agrupaciones.push(laAgrupacion);
    this.agruService.agregarAgrupacionServicio(laAgrupacion);
    this.cuadroNombre = "";
    this.cuadroTipo = "";
    this.cuadroAutor = "";
    this.cuadroAnyo = 0;
  }

  cuadroNombre: string = "";
  cuadroTipo: string = "";
  cuadroAutor: string = "";
  cuadroAnyo: number = 0;

}
