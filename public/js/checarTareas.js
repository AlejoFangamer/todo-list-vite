//? Esta funcion verifica cuantas tareas hay completadas o no

//* Primer if:
//? En caso de que hayan tareas, Deslizar el contador de tareas 
//? En caso de que no, Ocultar el contador de tareas

//* Segundo if:
//? En caso de que se hayan completado todas las tareas, Cambiar el texto del contador de tareas y ponerle una pequeña animacion
//? En caso de que no, Seguir con el contador quitandole la animacion si es que la tenia

export function checarTareas() {
  const contenedor = document.querySelector("#contenedor");
  const marcador = document.querySelector("#marcador");
  const marcador_contenedor = document.querySelector("#marcador-contenedor");
  const tareas_completadas = document.querySelectorAll(".completado");
  const tareas = document.querySelectorAll(".elemento-lista");

  if (tareas.length <= 0) {
    marcador_contenedor.style.top = `-${
      marcador_contenedor.clientHeight
    }px`;
    contenedor.style.top = `${marcador_contenedor.clientHeight/2}px`;
  } else {
    marcador_contenedor.style.top = "0px";
    contenedor.style.top = "0px";
  }

  if ((tareas_completadas.length >= tareas.length) & (tareas.length != 0)) {
    marcador.textContent = "Has completado todas las tareas!";
    marcador.classList.add("todo");
    marcador_contenedor.classList.add("todo");
  } else {
    marcador.textContent = `${tareas_completadas.length}/${tareas.length}`;
    marcador.classList.remove("todo");
    marcador_contenedor.classList.remove("todo");
  }
}
