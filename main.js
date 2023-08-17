//*Importar estilos css
import "./style.css";

//*Importar funciones de archivos javascript externos
import { checarInput } from "./public/js/checarInput.js";
import { checarTareas } from "./public/js/checarTareas.js";
import { obtenerTareas } from "./public/js/obtenerTareas.js";
import { crearTarea } from "/public/js/crearTarea.js";

//* Seleccionar etiquetas especificas
const lista = document.querySelector("#lista"); //? Seleccionar la lista a la que agregar elementos (ul)
const input = document.querySelector("#input-tarea"); //? Seleccionar la caja de input
const inputBoton = document.querySelector("#summit-tarea"); //? Seleccionar el boton para agregar tareas

//! Verifica si el dom se ha cargado de forma correcta para continuar
window.addEventListener("DOMContentLoaded", () => {
  function crearNuevaTarea() {
    crearTarea(lista, input.value);
    input.value = "";
    checarInput(input, inputBoton);
  }
  
  //obtenerTareas(3, 5); //* Obtiene tareas todo de JsonPlaceholder para poner en la lista

  checarTareas(); //* Verificar si al inicio de la pagina si hay o no tareas completadas
  checarInput(input, inputBoton); //* Verificar si al inicio de la pagina hay algo en el input

  //? Cada que se escriba algo en el input , realizar una verficacion de lo que hay adentro del input
  input.addEventListener("input", () => {
    checarInput(input, inputBoton);
  });

  //? Si se hace click en el boton de crear tarea:
  //* -Crea una tarea en base a lo que colocó el usuario
  //* -Vacia el input
  //* -Vuelve a verificar si algo en el input
  inputBoton.addEventListener("click", () => {
    crearNuevaTarea();
  });

  //? Si se presiona alguna tecla cuando se selecciona el input:
  //* -Verifica si la tecla presionada es enter
  //* -Verifica de que en el input no hayan espacios vacios (Misma verificacion del checarInput())
  //* -en caso de que todo lo anterior es valido realizar la misma acción que cuando presionas el boton de agregar tarea
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      if (input.value.trim().length !== 0) {
        crearNuevaTarea();
      }
    }
  });
});
