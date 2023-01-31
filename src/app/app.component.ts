import { Component } from '@angular/core';
import { Agrupacion } from './agrupacion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Agrupaciones del Carnaval 2023';

  agrupaciones:Agrupacion[] = [
   new Agrupacion("Calabaza", "Comparsa", "Martinez Ares", 1991)
  ];
}
