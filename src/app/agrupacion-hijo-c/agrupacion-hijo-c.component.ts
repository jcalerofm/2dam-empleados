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
  ngOnInit(): void {
  }

}
