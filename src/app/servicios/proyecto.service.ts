import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoClass } from '../clases/proyecto-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener los proyectos propios
  obtenerListaMisProyectos(id: number):Observable<ProyectoClass[]>{
    return this.httpClient.get<ProyectoClass[]>(`${environment.baseUrl}/Proyectos/MisProyectos/${id}`);
  }

  //Este metodo nos sirve para obtener los proyectos en los que participa
  obtenerListaOtrosProyectos(id: number):Observable<ProyectoClass[]>{
    return this.httpClient.get<ProyectoClass[]>(`${environment.baseUrl}/Proyectos/OtrosProyectos/${id}`);
  }

   //Este metodo nos sirve para actualizar los proyectos
  updateProyecto(id: number, proyecto:ProyectoClass):Observable<Object>
  {
    return this.httpClient.post(`${environment.baseUrl}/Proyectos/${id}`,proyecto)
  }


  //Este metodo nos sirve para registrar los proyectos
  guadarProyecto( proyecto:ProyectoClass) : Observable<Object>
  {
    return this.httpClient.post(`${environment.baseUrl}/Proyectos`, proyecto);
  }

  //Este metodo nos sirve para buscar los proyectos by id
  buscarProyectoPorId(id:number):Observable<ProyectoClass>{
    return this.httpClient.get<ProyectoClass>(`${environment.baseUrl}/Proyectos/${id}`);
  }


   //Este metodo nos sirve para eliminar los proyectos
   deleteProyecto(id: number):Observable<Object>
   {
    return this.httpClient.delete(`${environment.baseUrl}/Proyectos/delete/${id}`);
   }

}
