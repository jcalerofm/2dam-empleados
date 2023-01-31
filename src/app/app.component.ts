import { Component } from '@angular/core';
import { Agrupacion } from './agrupacion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Agrupaciones historicas del Carnaval de Cadiz';

  agrupaciones:Agrupacion[] = [
    new Agrupacion("Calabaza", "Comparsa", "Martinez Ares", 1991),
    new Agrupacion("Tres notas musicales", "Cuarteto", "Peña y masa", 1991),
    new Agrupacion("Cadi City", "Chirigota", "JC Aragon", 1997),
    new Agrupacion("Inocente, Inocente", "Coro", "Nandi Migueles", 1994)

  ];
}
