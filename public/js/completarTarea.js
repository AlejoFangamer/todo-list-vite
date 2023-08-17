import { checarTareas } from "./checarTareas.js";

export function completarTarea(elemento, boton) {
  elemento.classList.toggle("completado");
  boton.classList.toggle("hecho-boton");
  boton.setAttribute("color", "#fff");
  checarTareas();
}
