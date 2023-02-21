import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgrupacionHijoCComponent } from './agrupacion-hijo-c/agrupacion-hijo-c.component';
import { ComponentesAgrupacionCComponent } from './componentes-agrupacion-c/componentes-agrupacion-c.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CozasComponentComponent } from './cozas-component/cozas-component.component';
import { QuieneComponentComponent } from './quiene-component/quiene-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicioAgrupacionService } from './ServicioAgrupacionService';
import { EmpleadosService } from './empleados.service';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'cozas', component: CozasComponentComponent },
  { path: 'quienes', component: QuieneComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgrupacionHijoCComponent,
    ComponentesAgrupacionCComponent,
    HomeComponentComponent,
    CozasComponentComponent,
    QuieneComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ServicioAgrupacionService, EmpleadosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
