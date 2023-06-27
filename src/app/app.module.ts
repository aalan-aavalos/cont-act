import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { GestionarComponent } from './components/gestionar/gestionar.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { PrihomeComponent } from './components/prihome/prihome.component';
import { RegisComponent } from './components/regis/regis.component';

import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LateralComponent,
    GestionarComponent,
    EstadisticasComponent,
    InstitucionalComponent,
    PrihomeComponent,
    RegisComponent,
    CalendarioComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
