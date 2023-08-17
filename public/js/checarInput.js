export function checarInput(input, boton) {
  if (input.value.trim().length !== 0 && !input.classList.contains("puedes")) {
    boton.classList.add("puedes");
  } else {
    boton.classList.remove("puedes");
  }
}
