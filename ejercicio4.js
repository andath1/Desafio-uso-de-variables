//solicitud de ingreso de numeros
let candias = prompt("ingresar cantidad de dias: ");

//convercion de dato ingresado
let cantan = Math.floor(candias / 365)
let cantan1 = candias % 365

let cantsema = Math.floor(cantan1 / 7)
let cantidaddias = cantan1 % 7

/* alert("los dias ingresados corresponden a los siguientes años: " + cantan)
alert("los dias ingresados corresponden a las siguientes semanas : " + cantsema)
alert("los dias ingresados corresponden a los siguientes dias: " + cantidaddias) */


//mostrar resultado
document.write("los dias ingresados corresponden a los siguientes años: " + cantan)
document.write("los dias ingresados corresponden a las siguientes semanas : " + cantsema)
document.write("los dias ingresados corresponden a los siguientes dias: " + cantidaddias)

console.log(
    `los dias ingresados corresponden a :
    años:${cantan}
    semanas:${cantsema}
    dias:${cantidaddias}
    `)