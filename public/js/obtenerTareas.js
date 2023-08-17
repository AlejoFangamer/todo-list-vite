import { crearTarea } from "./crearTarea.js";

const lista = document.querySelector("#lista");

export async function obtenerTareas(rango1, rango2) {
  try {
    for (let i = rango1; i <= rango2; i++) {
      const respuesta = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${i}`
      );
      const data = await respuesta.json();
      crearTarea(lista, data.title, data.completed);
    }
  } catch (e) {
    console.log(e);
  }
}
