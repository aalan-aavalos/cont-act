import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { GestionarComponent } from './components/gestionar/gestionar.component';
import { RegisComponent } from './components/regis/regis.component';
import { PrihomeComponent } from './components/prihome/prihome.component';

const routes: Routes = [
  {path:'', component:PrihomeComponent},
  {path:'prihome', component:PrihomeComponent},
  {path:'home', component:HomeComponent},
  {path:'gestionar', component:GestionarComponent},
  {path:'estadisticas', component:EstadisticasComponent},
  {path: 'regis', component:RegisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
