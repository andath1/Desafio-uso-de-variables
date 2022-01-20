//solicitud de ingreso de numeros
let gradocel = prompt("ingresar temperatura en grados celsius: ");

//convercion de dato ingresado
let gradok = parseInt(gradocel) + 273.15
let gradof = (parseInt(gradocel) * 9 / 5) + 32

/* alert("el equivalente en grados kelvin: " + gradok)
alert("el equivalente en grados fahrenheit: " + gradof) */


//mostrar resultado
document.write("el equivalente en grados kelvin: " + gradok)
document.write("el equivalente en grados fahrenheit: " + gradof)

console.log(
    `la temperatura equivalente es:
    kelvin:${parseInt(gradocel) + 273.15}
    fahrenheit:${(parseInt(gradocel) *9/5)+32}
    `)