import { checarTareas } from "./checarTareas.js";
import { completarTarea } from "./completarTarea.js";
import { quitarTarea } from "./quitarTarea.js";

export function crearTarea(lista, texto,completado) {

  const clon = document.querySelector("#lista-template");
  const listaTemplate = document.importNode(clon.content, true);
  const elemento = listaTemplate.querySelector(".elemento");

  const elementoTexto = elemento.querySelector(".elemento-lista");
  elementoTexto.textContent = texto;

  elementoTexto.addEventListener("click", () => {
    completarTarea(elementoTexto, elementoBotonHecho);
    burst.generate().replay();
  });

  const elementoBotonHecho = elemento.querySelector(".hecho");

  elementoBotonHecho.addEventListener("click", (e) => {
    completarTarea(elementoTexto, elementoBotonHecho);
    burst.generate().replay();
  });

  const borrar = elemento.querySelector(".borrar");
  borrar.addEventListener("click", () => {
    quitarTarea(elemento);
  });

  lista.append(elemento);
  const burst = new mojs.Burst({
    parent: elementoBotonHecho,
    radius: { 0: 50 },
    count: 8,
    rotate: { 0: 90 },
    children: {
      shape: "circle",
      radius: 6,
      strokeWidth: 5,
      duration: "rand(1000,5000)",
      fill: "rgb(252, 70, 100)",
      easing: "expo.out",
    },
  });

  if (completado) {
    completarTarea(elementoTexto, elementoBotonHecho);
  }

  checarTareas();
}
