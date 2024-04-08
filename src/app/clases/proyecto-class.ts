import { TareaClass } from "./tarea-class";
import { UsuarioClass } from "./usuario-class";

export class ProyectoClass {
  proyectoId: number;
  usuarioId: number;
  nombre: string;
  descripcion: string;
  fechaFinal: string;
  fechaCreacion: string;
  estado: number;
  usuario: UsuarioClass = new UsuarioClass();
  colaboradores: UsuarioClass[] = [];
  tareas: TareaClass[] = [];
}
