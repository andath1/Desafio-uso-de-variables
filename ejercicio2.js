//solicitud de ingreso de numeros
let numero_1 = prompt("ingresar un primer numero mayor a 0 : ");
let numero_2 = prompt("ingresar un segundo numero mayor a 0 y distinto al primer numero ingresado : ");
//conversion de strign numeros
let resultsum = parseInt(numero_1) + parseInt(numero_2);
let resultres = parseInt(numero_1) - parseInt(numero_2);
let resultmul = parseInt(numero_1) * parseInt(numero_2);
let resultdiv = parseInt(numero_1) / parseInt(numero_2);
let resultmod = parseInt(numero_1) % parseInt(numero_2);
/* alert(numero_1 + numero_2); */
/* alert("el resultado de la suma es: " + resultsum) */
/* alert("el resultado de la resta es: " + resultres)
alert("el resultado de la multiplicacion es: " + resultmul)
alert("el resultado de la division es: " + resultdiv)
alert("el resultado del modulo es: " + resultmod) */


//mostrar resultados
document.write("el resultado de la suma es: " + resultsum);
document.write("el resultado de la resta es: " + resultres);
document.write("el resultado de la multiplicacion es: " + resultmul);
document.write("el resultado de la division es: " + resultdiv);
document.write("el resultado del modulo es: " + resultmod);


console.log(
    `el resultado es:
    suma:${parseInt(numero_1) + parseInt(numero_2)}
    resta:${parseInt(numero_1) - parseInt(numero_2)}
    multiplicacion:${parseInt(numero_1) * parseInt(numero_2)}
    division:${parseInt(numero_1) / parseInt(numero_2)}
    modulo:${parseInt(numero_1) % parseInt(numero_2)}
    `)