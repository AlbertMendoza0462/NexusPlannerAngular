import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioClass } from '../clases/usuario-class';
import { LoginClass } from '../clases/login-class';
import { StorageLocalService } from './storage-local.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient, private storageLocalService: StorageLocalService) { }

  //Este metodo nos sirve para obtener los Logins
  iniciarSesion(loginObj: LoginClass):Observable<UsuarioClass>{
    return this.httpClient.post<UsuarioClass>(environment.baseUrl + "/Usuarios/Login", loginObj);
  }

  cerrarSesion():Observable<UsuarioClass>{
    return this.httpClient.post<UsuarioClass>(environment.baseUrl + "/Usuarios/Logout", null);
  }

  estaAutenticado(): boolean {
    return this.storageLocalService.retrieve("usuarioId") != null
  }

  getUsuarioId(): number {
    return parseInt(this.storageLocalService.retrieve("usuarioId"))
  }

  getNombre(): String {
    return this.storageLocalService.retrieve("nombre") + this.storageLocalService.retrieve("apellido")
  }

  getCorreo(): String {
    return this.storageLocalService.retrieve("correo")
  }

}
