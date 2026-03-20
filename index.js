//EJERCICIO 1
import {Interpolar, Concatenar} from "./src/modules/ej1.js";
let texto1 = "Hola ";
let texto2 = "Mundo!";
console.log(Interpolar(texto1, texto2));
console.log(Concatenar(texto1, texto2));

//EJERCICIO2
import {Sumar, Restar, Multiplicar, Dividir, pi} from "./src/modules/matematica.js";
console.log(Sumar(5, 3));
console.log(Restar(5, 3));
console.log(Multiplicar(5, 3));
console.log(Dividir(5, 3));
console.log(pi);

//EJERCICIO3
import {alumno} from "./src/models/alumno.js";
const alumno1 = new alumno("pedroomw", "49552421");
const alumno2 = new alumno("aguus.aiello", "48801549");
console.log(alumno1.username + " " + alumno1.DNI);
console.log(alumno2.username + " " + alumno2.DNI);

//EJERCICIO4
import {copiarArchivo} from "./src/modules/ej4.js"
copiarArchivo("./archivo.txt", "./archivo_nuevo.txt");

//EJERCICIO5/6
import {parsearUrl} from "./src/modules/ej5y6.js"
let objeto = parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2342788/tp-2-primera-practica-en-node");
console.log(objeto)
objeto = parsearUrl("Esto no es una url")
console.log(objeto)

//EJERCICIO7
import { obtenerMoneda } from "./src/modules/ej7.js";
let moneda = obtenerMoneda("AR");
console.log(moneda);