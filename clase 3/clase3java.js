/* let nombrecompleto = "rodrigo alday"
 */
/* let respuesta = (1 == 1) */


/* let username = prompt("ingrese su nombre")
if (username == "CoderHouse") {
    console.log("bienvenido", username)
} else{
    console.warn("ingreso un dato erroneo")
} */

/* let mioferta = parseInt(prompt("ingrese su oferta"))

if(mioferta < 20){
    console.error("ni por cerca")
} else if(mioferta < 40){
    console.warn("estirate un poco mas")
} else if(mioferta < 50){
    console.warn("ya casi")
} else if(mioferta < 80){
    console.log("tu oferta nos interesa")
}
 */



/* let respuesta = confirm("esta seguro de formatear")

if(respuesta == true){
    console.warn("el disco esta formateando")   
}else {
    console.log("sus archivos siguen inctactos")
} */

/* debugger

let username = prompt("ingrese su nombre de usuario")
let password = prompt("ingrese su clave")

if(username == "CoderHouse" && password == "123456") {
    console.log("bienvenido a bankapp",username)

}else {
    console.warn("no se reconoce el usuario ingresado")
}

 */
/* ciclos por conteo------------------------------------------------ */


/* for(let i = 0; i<10; i++){
    alert(i)
}
 */

/* let limite = prompt("ingrese un numero")
for(let i = 0; i<limite; i++){
    console.log("conteo",i)
} */
/* break ------------------------------------------------------------- */
/* let limite = prompt("ingrese un numero")
for(let i = 0; i<limite; i++){
    if(i === 30){
        break
    }
    console.log("conteo",i)
} */

/* let limite = prompt("ingrese un numero")
for (let i =0; i< limite; i++){
    if( i === 7){
    continue
    }
    console.log("conteo", i)
} */
/* debugger

let seguimos = true
let suma = 0
let numero = 0
while(seguimos){
    suma=suma+numero
    console.log("nueva iteracion",suma)
    seguimos = confirm("desea seguir?")
    numero = parseInt(prompt("ingrese un numero"))
} */

/* debugger

let seguimos = "abc"
let suma = ""
let texto = prompt("ingrese un texto")
while(seguimos != "ESC"){
    suma=suma+texto
    console.log("nueva iteracion",suma)
    texto = prompt("ingrese mas texto")
    seguimos = prompt("quiere continuar")
    if(seguimos === "ESC"){
        break
    }
}

 */



