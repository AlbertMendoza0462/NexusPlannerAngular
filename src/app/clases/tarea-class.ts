import { UsuarioClass } from "./usuario-class";

export class TareaClass {
  tareaId: number;
  proyectoId: number;
  usuarioId: number;
  nombre: string;
  descripcion: string;
  fechaFinal: string;
  fechaCreacion: string;
  estado: number = 1;
  usuario: UsuarioClass
}
