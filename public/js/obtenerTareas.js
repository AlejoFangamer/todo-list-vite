import { crearTarea } from "./crearTarea.js";

const lista = document.querySelector("#lista");

export async function obtenerTareas(rango1, rango2) {
  try {
    const respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/todos/`
    );
    const data = await respuesta.json();
    for (let i = rango1 - 1; i <= rango2 - 1; i++) {
      crearTarea(lista, data[i].title, data[i].completed);
    }
  } catch (e) {
    console.log(e);
  }
}
