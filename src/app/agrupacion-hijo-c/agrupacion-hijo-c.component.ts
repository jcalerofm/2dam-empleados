import { Component, Input, OnInit } from '@angular/core';
import { Agrupacion } from '../agrupacion.model';

@Component({
  selector: 'app-agrupacion-hijo-c',
  templateUrl: './agrupacion-hijo-c.component.html',
  styleUrls: ['./agrupacion-hijo-c.component.css']
})
export class AgrupacionHijoCComponent implements OnInit {

  constructor() { }
  @Input() listaAgrupaciones: Agrupacion;
  @Input() indice: number;

  arrayComponente = [''];

  agregarComponente(nuevoComponente: string) {
    this.arrayComponente.push(nuevoComponente);
  }



  ngOnInit(): void {
  }

}
