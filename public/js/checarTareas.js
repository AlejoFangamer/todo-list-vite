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
