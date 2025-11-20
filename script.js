/*function calcularSalarioEmpleado() {
  if (isNaN(valorHora) || isNaN(cantidadHoras)) {
    console.log("Debe ingresar los valores en numeros");
  } else {
    console.log("El salario es: " + valorHora + cantidadHoras);
  }
}
function definirHoraExtra() {
  console.log("Cantidad de horas extra: " + (cantidadHoras - 44));
}
let valorHora = prompt("Ingrese el valor de la hora: ");
let cantidadHoras = prompt("Ingrese la cantidad de las horas: ");
calcularSalarioEmpleado(valorHora, cantidadHoras);
definirHoraExtra();*/

/* - El programa debe permitir finalizar el calculo cuando el usuario lo indique
- El programa debe validar que un empleado no puede trabajar menos de 24 horas
- La cantidad de horas ordinarias se define siempre al iniciar el dia
- Se debe calcular el salario neto del empleado
- Se debe calcular el salario bruto del empleado
- Se debe calcular el valor por horas extras del empleado
- Se debe calcular el auxilio de transporte del empleado
- Se debe calcular el valor por deducciones (Salud y pension) del empleado
- Se debe mostrar el salario completo del empleado discriminado como colilla de pago */

function iniciarSistemaNominaEmpleado() {
  const VALOR_HORA = prompt("Ingrese el valor de horas: ");
  const LIMITE_HORAS = prompt("Ingrese el limite de horas ordinarias");
  let cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas: ");
  if (isNaN(VALOR_HORA) || isNaN(LIMITE_HORAS) || isNaN(cantidadHoras)) {
    console.log("Debe ingresar solo valores numericos");
  } else {
    let repetir = true;
    while (repetir) {
      let cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas");
      if (isNaN(cantidadHoras)) {
        console.log("La cantidad de horas debe ser en numeros");
      } else if (cantidadHoras < 24) {
        console.log("El empleado no puede trabajar menos de 24 horas");
      }
      let opcion = prompt(
        "Seleccione:\n1 - Calcular un salario \n2 - Finalizar sistema",
      );

      if (opcion == 2) {
        repetir == false;
      }else {

        calcularSalarioBrutoEmpleado();

      }
    }
  }
}
function calcularSalarioNetoEmpleado() {}
function calcularSalarioBrutoEmpleado() {}
function calcularValorHorasExtra() {}
function calcularAuxilioDeTransporte() {}
function calcularValorDeducciones() {}

function mostrarColillaPagoEmpleado() {}
iniciarSistemaNominaEmpleado();
