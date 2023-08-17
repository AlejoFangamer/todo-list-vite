import { checarTareas } from "./checarTareas.js";

export function quitarTarea(elemento) {
  elemento.remove();
  checarTareas();
}