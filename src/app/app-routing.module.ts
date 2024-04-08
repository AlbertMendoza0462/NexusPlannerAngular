import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponentComponent } from './components/tarea-component/tarea-component.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

//Rutas
const routes: Routes = [
  //Rutas de Registros
  {path : 'login', component:LoginComponent},
  {path : 'principal', component:SidebarComponent},
  {path : 'tarea', component:TareaComponentComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
