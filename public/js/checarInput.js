//? Esta función verifica si hay algo puesto en el input

//? Si hay algo puesto en el input activa el boton para agregar una nueva tarea
//! Si se colocan espacios al principio de la tarea , no se activará el boton

export function checarInput(input, boton) {
  if (input.value.trim().length !== 0 && !input.classList.contains("puedes")) {
    boton.classList.add("puedes");
  } else {
    boton.classList.remove("puedes");
  }
}
