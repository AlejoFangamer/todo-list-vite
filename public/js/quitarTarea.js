import { checarTareas } from "./checarTareas.js";

//?Esta funcion simplemente quita una tarea y actualiza el contador de tareas
export function quitarTarea(elemento) {
  elemento.remove();
  checarTareas();
}