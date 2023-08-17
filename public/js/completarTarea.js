import { checarTareas } from "./checarTareas.js";

//? Esta funcion da por hecha una tarea seleccionada
//* Selecciona tanto el elemento de la lista y le boton de hecho para activar ambos
//* Despues de esto hace un rechequeo de tareas para actualizar el contador de tareas hechas

export function completarTarea(elemento, boton) {
  elemento.classList.toggle("completado");
  boton.classList.toggle("hecho-boton");
  boton.setAttribute("color", "#fff");
  checarTareas();
}
