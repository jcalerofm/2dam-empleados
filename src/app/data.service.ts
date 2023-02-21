import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agrupacion } from './agrupacion.model';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  guardaAgrupaciones(Agrupaciones:Agrupacion[]){
    this.httpClient.put('https://agrupaciones-9bd08-default-rtdb.europe-west1.firebasedatabase.app/datos.json', Agrupaciones).subscribe(
      response => console.log("Agrupaciones guardadas: " + response),
      error => console.log("error al guardar las agrupaciones: " + error)
    );
  }

  cargaAgrupaciones(){
    return this.httpClient.get('https://agrupaciones-9bd08-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }
}
