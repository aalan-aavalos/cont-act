import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { GestionarComponent } from './components/gestionar/gestionar.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:' ',component:HomeComponent},
  {path:'gestionar',component:GestionarComponent},
  {path:'estadisticas',component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
