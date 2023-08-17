import { checarTareas } from "./checarTareas.js";
import { completarTarea } from "./completarTarea.js";
import { quitarTarea } from "./quitarTarea.js";

//? Esta funcion crea una nueva tarea y agrega funcionalidades a varios botones
//! Esta funcion hace uso de templates para crear los debidos elementos y agregarlos a lista

export function crearTarea(lista, texto,completado) {
  const clon = document.querySelector("#lista-template"); //Selecciona la template
  const listaTemplate = document.importNode(clon.content, true); //Importa cada uno de los elementos de la template
  const elemento = listaTemplate.querySelector(".elemento"); //Selecciona el elemento del template

  lista.append(elemento); //Pone el elemento seleccionado a la lista

  //? Selecciona los elementos del template
  const elementoBotonHecho = elemento.querySelector(".hecho"); //Seleccionar el boton de "hecho"
  const elementoTexto = elemento.querySelector(".elemento-lista"); //Seleccionar el texto de la lista 
  elementoTexto.textContent = texto; //Cambia el texto de la lista
  const borrar = elemento.querySelector(".borrar"); //Selecciona el boton de borrar

  //? Crea una animacion de estallido de pequeños circulos(Haciendo uso de la libreria mo.js) 
  //! Crea un estallido para cada elemento de la lista, para reproducirlo despues en la misma etiqueta
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

  //? Si le das click al texto de la lista
  elementoTexto.addEventListener("click", () => {
    completarTarea(elementoTexto, elementoBotonHecho); //Da la tarea por hecha
    burst.generate().replay(); //Reproduce el estallido creado anteriormente
  });

  //? Si le das click al boton de "hecho" de la lista
  elementoBotonHecho.addEventListener("click", (e) => {
    completarTarea(elementoTexto, elementoBotonHecho);
    burst.generate().replay();
  });

  //? Si le das click al icono de basura , elimine la tarea
  borrar.addEventListener("click", () => {
    quitarTarea(elemento);
  });

  //? Si la tarea estaba completada con anterioridad , completarla automaticamente (Uso de api)
  if (completado) {
    completarTarea(elementoTexto, elementoBotonHecho);
  }

  //? Actualizar el contador de tareas
  checarTareas();
}
