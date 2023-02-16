import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agrupacion } from '../agrupacion.model';

@Component({
  selector: 'app-cozas-component',
  templateUrl: './cozas-component.component.html',
  styleUrls: ['./cozas-component.component.css']
})
export class CozasComponentComponent implements OnInit {

  title = 'Lista de Agrupaciones históricas del Carnaval de Cadiz';

  agrupaciones: Agrupacion[] = [
    new Agrupacion("Calabaza", "Comparsa", "Martinez Ares", 1991),
    new Agrupacion("Tres notas musicales", "Cuarteto", "Peña y masa", 1991),
    new Agrupacion("Cadi City", "Chirigota", "JC Aragon", 1997),
    new Agrupacion("Inocente, Inocente", "Coro", "Nandi Migueles", 1994)

  ];


  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  agregarAgrupacion() {
    let laAgrupacion = new Agrupacion(this.cuadroNombre, this.cuadroTipo, this.cuadroAutor, this.cuadroAnyo);
    this.agrupaciones.push(laAgrupacion);

    this.cuadroNombre = "";
    this.cuadroTipo = "";
    this.cuadroAutor = "";
    this.cuadroAnyo = 0;
    //redirect to home page
    this.router.navigate(['']);

  }

  irHome(){
    this.router.navigate(['']);
  }


  cuadroNombre: string = "";
  cuadroTipo: string = "";
  cuadroAutor: string = "";
  cuadroAnyo: number = 0;

}
