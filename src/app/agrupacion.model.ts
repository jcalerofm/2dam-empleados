export class Agrupacion {
  nombre:string="";
  tipo:string="";
  autor:string="";
  anyo:number=0;

  constructor(nombre:string, tipo:string, autor:string, anyo:number) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.autor = autor;
    this.anyo = anyo;
  }
}
