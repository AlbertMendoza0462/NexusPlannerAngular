import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioClass } from '../clases/usuario-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  //Este metodo nos sirve para actualizar los usuarios
  updateUsuario(usuario: UsuarioClass): Observable<object> {
    return this.httpClient.post(`${environment.baseUrl}/Usuarios`, usuario)
  }


  //Este metodo nos sirve para registrar los usuarios
  guadarUsuario(usuario: UsuarioClass): Observable<Object> {
    return this.httpClient.post(`${environment.baseUrl}/Usuarios`, usuario);

  }

  //Este metodo nos sirve para buscar los usuarios by id
  obtenerUsuarioPorId(id: number): Observable<UsuarioClass> {
    return this.httpClient.get<UsuarioClass>(`${environment.baseUrl}/Usuarios/${id}`)
  }

  //Este metodo nos sirve para buscar los usuarios by NombreApellidoCorreo
  buscarPorNombreApellidoCorreo(texto: string): Observable<UsuarioClass[]> {
    return this.httpClient.get<UsuarioClass[]>(`${environment.baseUrl}/Usuarios/PorNombreApellidoCorreo/${texto}`)
  }

  //Este metodo nos sirve para buscar los usuarios by ProyectoId
  buscarPorProyectoId(texto: string): Observable<UsuarioClass[]> {
    return this.httpClient.get<UsuarioClass[]>(`${environment.baseUrl}/Usuarios/PorProyectoId/${texto}`)
  }


  //Este metodo nos sirve para eliminar los usuarios
  deleteUsuario(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.baseUrl}/Usuarios/delete/${id}`);
  }

}
