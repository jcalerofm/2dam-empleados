import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgrupacionHijoCComponent } from './agrupacion-hijo-c/agrupacion-hijo-c.component';
import { ComponentesAgrupacionCComponent } from './componentes-agrupacion-c/componentes-agrupacion-c.component';

@NgModule({
  declarations: [
    AppComponent,
    AgrupacionHijoCComponent,
    ComponentesAgrupacionCComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
