//solicitud de ingreso de numeros
let num1 = prompt("ingresar numero 1: ");
let num2 = prompt("ingresar numero 2: ");
let num3 = prompt("ingresar numero 3: ");
let num4 = prompt("ingresar numero 4: ");
let num5 = prompt("ingresar numero 5: ");

//operaciones matematicas
let sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
let prom = sum / 5

/* alert("la suma de los numeros es: " + sum)
alert("el promedio de los numeros es : " + prom) */


//mostrar resultados
document.write("la suma de los numeros es: " + sum)
document.write("el promedio de los numeros es : " + prom)



console.log(
    `los resultados son :
    suma:${sum}
    promedio:${prom}
    `)