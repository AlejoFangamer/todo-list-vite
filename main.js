import './style.css'
import { checarInput } from "./public/js/checarInput.js";
import { checarTareas } from "./public/js/checarTareas.js";
import { obtenerTareas } from "./public/js/obtenerTareas.js";
import { crearTarea } from "/public/js/crearTarea.js";

const lista = document.querySelector("#lista");
const input = document.querySelector("#input-tarea");
const inputBoton = document.querySelector("#summit-tarea");

checarInput(input, inputBoton);

window.addEventListener("DOMContentLoaded", () => {
  obtenerTareas(3, 5);
  checarTareas();
  input.addEventListener("input", () => {
    checarInput(input, inputBoton);
  });

  inputBoton.addEventListener("click", () => {
    crearTarea(lista, input.value);
    input.value = "";
    checarInput(input, inputBoton);
  });

  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      if (input.value.trim().length !== 0) {
        crearTarea(lista, input.value);
        input.value = "";
        checarInput(input, inputBoton);
      }
    }
  });
});

