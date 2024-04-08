import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { LoginClass } from 'src/app/clases/login-class';
import { StorageLocalService } from 'src/app/servicios/storage-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginObj: LoginClass = new LoginClass()
  correo: string;
  clave: string;

  constructor(private loginService: LoginService, private storageLocalService: StorageLocalService, private router: Router) { } // Inyecta Router en el constructor

  ngOnInit() {
    if(this.loginService.estaAutenticado()){
      this.router.navigate(["/principal"])
    }
  }

  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.loginObj.correo = this.correo
      this.loginObj.clave = this.clave
      this.loginService.iniciarSesion(this.loginObj).subscribe(
        obj => {
          console.log(obj)
          this.storageLocalService.store("usuarioId", obj.usuarioId)
          this.storageLocalService.store("nombre", obj.nombre)
          this.storageLocalService.store("apellido", obj.apellido)
          this.storageLocalService.store("correo", obj.correo)
          this.refresh()
          this.router.navigate(['/principal']); // Redirige al usuario a la página de tareas
        }
      )
    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      alert('Por favor, ingresa el usuario y la contraseña.');
    }
  }

  refresh() {
    window.location.reload();
  }

}
