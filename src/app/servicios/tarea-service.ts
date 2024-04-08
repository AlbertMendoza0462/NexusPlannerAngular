import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaClass } from '../clases/tarea-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener las tareas
  obtenerListaTareas(id: number):Observable<TareaClass[]>{
    return this.httpClient.get<TareaClass[]>(`${environment.baseUrl}/Tareas/PorUsuario/${id}`);
  }


   //Este metodo nos sirve para actualizar los tareas
  updateTarea(id: number, tarea:TareaClass):Observable<Object>
  {
    return this.httpClient.post(`${environment.baseUrl}/Tareas/${id}`,tarea)
  }


  //Este metodo nos sirve para registrar los tareas
  guadarTarea( tarea:TareaClass) : Observable<Object>
  {
    return this.httpClient.post(`${environment.baseUrl}/Tareas`, tarea);

  }

  //Este metodo nos sirve para buscar los tareas by id
  obtenerListaTareasId(id:number):Observable<TareaClass>{
    return this.httpClient.get<TareaClass>(`${environment.baseUrl}/Tareas/${id}`);
  }


   //Este metodo nos sirve para eliminar los tareas
   deleteTarea(id: number):Observable<Object>
   {
    return this.httpClient.delete(`${environment.baseUrl}/Tareas/delete/${id}`);
   }

}
