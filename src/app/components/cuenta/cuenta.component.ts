import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioClass } from '../../clases/usuario-class';
import { UsuarioService } from '../../servicios/usuario.service';
import { LoginService } from 'src/app/servicios/login.service';
import { StorageLocalService } from 'src/app/servicios/storage-local.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  usuario: UsuarioClass = new UsuarioClass();

  constructor(
    private loginService: LoginService,
    private storageLocalService: StorageLocalService,
    private usuarioServicio: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.estaAutenticado()) {
      this.router.navigate(["/login"])
    } else {
      var usuarioId = this.loginService.getUsuarioId()
      this.obtenerUsuario(usuarioId)
    }
  }

  private obtenerUsuario(id: number) {
    this.usuarioServicio.obtenerUsuarioPorId(id).subscribe(dato => {
      console.log(dato);
      this.usuario = dato
    })
  }


  updateUsuario() {
    this.usuarioServicio.updateUsuario(this.usuario).subscribe(obj => console.log(obj))
  }

  cerrarSesion() {
    this.loginService.cerrarSesion()
    this.storageLocalService.remove("usuarioId")
    this.storageLocalService.remove("nombre")
    this.storageLocalService.remove("apellido")
    this.storageLocalService.remove("correo")
    this.router.navigate(['/login']); // Redirige al usuario a la página de tareas
  }

  refresh() {
    window.location.reload();
  }

}
