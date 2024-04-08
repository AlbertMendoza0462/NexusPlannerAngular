import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoClass } from '../../clases/proyecto-class';
import { ProyectoService } from '../../servicios/proyecto.service';
import { LoginService } from 'src/app/servicios/login.service';
import { StorageLocalService } from 'src/app/servicios/storage-local.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UsuarioClass } from 'src/app/clases/usuario-class';
import { TareaClass } from 'src/app/clases/tarea-class';
import { TareaService } from 'src/app/servicios/tarea-service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() project: ProyectoClass
  
  proyecto: ProyectoClass = new ProyectoClass();
  tarea: TareaClass = new TareaClass()
  encontrados: UsuarioClass[] = []
  textoColaborador: string = ""


  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private proyectoServicio: ProyectoService,
    private tareaService: TareaService,
    private storageLocalService: StorageLocalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.loginService.estaAutenticado()) {
      this.router.navigate(["/login"])
    } else {
      var proyectoId = this.loginService.getUsuarioId()
      if(this.project != null){
        this.proyecto = this.project
      }
    }
  }

  cargarProyecto(pro: ProyectoClass){
    let p = this.storageLocalService.retrieve("proyectoId")
    if (p != null){
      this.proyecto = p
    } else {
      this.proyecto = new ProyectoClass()
    }
  }
  

  buscarColaboradores() {
    this.encontrados = []
    this.usuarioService.buscarPorNombreApellidoCorreo(this.textoColaborador).subscribe(dato => {
      console.log(dato);
      this.encontrados = dato
    })
  }

  buscarUsuariosPorProyecto() {
    this.encontrados = []
    this.usuarioService.buscarPorNombreApellidoCorreo(this.textoColaborador).subscribe(dato => {
      console.log(dato);
      this.encontrados = dato
    })
  }

  agregarColaborador(colaborador: UsuarioClass) {
    colaborador.clave = "1234"
    console.log(this.proyecto.colaboradores);
    this.proyecto.colaboradores.push(colaborador)
    console.log(this.proyecto.colaboradores);
    this.encontrados = []
  }

  agregarTarea() {
    let us = this.proyecto.colaboradores.find(u => u.usuarioId == this.tarea.usuarioId)
    if (us != null){
      us.clave = "1234"
      this.tarea.usuario = us
    }
    this.proyecto.tareas.push(this.tarea)
    this.tarea = new TareaClass()
  }

  eliminarColaborador(colaborador: UsuarioClass) {
    this.proyecto.colaboradores = this.proyecto.colaboradores.filter(c => c != colaborador)
  }

  eliminarTarea(tarea: TareaClass) {
    this.proyecto.tareas = this.proyecto.tareas.filter(t => t != tarea)
  }

  private obtenerProyecto(id: number) {
    this.proyectoServicio.buscarProyectoPorId(id).subscribe(dato => {
      console.log(dato);
      this.proyecto = dato
    })
  }

  guardarProyecto() {
    console.log(this.proyecto);
    this.proyectoServicio.guadarProyecto(this.proyecto).subscribe(obj => console.log(obj))
  }

  refresh() {
    window.location.reload();
  }

}
