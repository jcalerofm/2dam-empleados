import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-componentes-agrupacion-c',
  templateUrl: './componentes-agrupacion-c.component.html',
  styleUrls: ['./componentes-agrupacion-c.component.css']
})
export class ComponentesAgrupacionCComponent implements OnInit {


  @Output() componenteAgrupacion = new EventEmitter<string>();

  miInput: string;
  constructor() { }

  ngOnInit(): void {
  }

  agregarComponente(value: string) {
    this.componenteAgrupacion.emit(value);
    //make input botoncomponente empty again
    this.miInput = "";
  }

}
