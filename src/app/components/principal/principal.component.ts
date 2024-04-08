import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoClass } from '../../clases/proyecto-class';
import { ProyectoService } from '../../servicios/proyecto.service';
import { LoginService } from 'src/app/servicios/login.service';
import { TareaClass } from 'src/app/clases/tarea-class';
import { TareaService } from 'src/app/servicios/tarea-service';
import { StorageLocalService } from 'src/app/servicios/storage-local.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  proyecto: ProyectoClass = new ProyectoClass()
  misProyectos: ProyectoClass[];
  otrosProyectos: ProyectoClass[];
  tareas: TareaClass[];

  constructor(
    private loginService: LoginService,
    private proyectoServicio: ProyectoService,
    private tareaServicio: TareaService,
    private storageLocalService: StorageLocalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.estaAutenticado()) {
      this.router.navigate(["/login"])
    } else {
      var usuarioId = this.loginService.getUsuarioId()
      this.obtenerMisProyectos(usuarioId);
      this.obtenerOtrosProyectos(usuarioId);
      this.obtenerTareas(usuarioId)
    }

  }

  cargarProyectoVacio(){
    this.proyecto = new ProyectoClass()
  }

  cargarProyecto(pro: ProyectoClass){
    this.proyecto = pro
  }

  private obtenerMisProyectos(id: number) {
    this.proyectoServicio.obtenerListaMisProyectos(id).subscribe(dato =>
      this.misProyectos = dato)
  }

  private obtenerOtrosProyectos(id: number) {
    this.proyectoServicio.obtenerListaOtrosProyectos(id).subscribe(dato =>
      this.otrosProyectos = dato)
  }

  private obtenerTareas(id: number) {
    this.tareaServicio.obtenerListaTareas(id).subscribe(dato =>
      this.tareas = dato)
  }

  refresh() {
    window.location.reload();
  }

  updateProyectos(id: number) {
    this.router.navigate(['actualizar-proyectos', id])
  }


  deleteProyectos(id: number) {
    this.proyectoServicio.deleteProyecto(id).subscribe(dato => {
      console.log(dato)
      this.refresh();
    });
    this.proyectoServicio.obtenerListaMisProyectos(id).subscribe(dato =>
      this.misProyectos = dato)
  }


}
