const IVA = 1.21
const paises =["argentina", "uruguay", "chile", "colombia", "venezuela", "mexico"]

const carrito = []

function recorrerpaises(){
    debugger
    for (let i = 0; i <= paises.length; i++){
        console.log(paises[i])
    }
}

function agregarpais(){
    debugger
    let nuevopais = prompt("ingrese el nuevo pais")
    paises.push(nuevopais)
    console.log(paises)
}
/* function quitarpais(){
    debugger
    let indice = prompt("ingrese el indice del pais a quitar")
    paises.splice(indice,1)
    console.table(paises)
} */
function quitarpais(){
    debugger
    let pais = prompt("indique el pais a quitar del array")
    let indice = paises.indexOf(pais)
    paises.splice(indice,1)
    console.table(paises)
}
 function buscarpais(){
     let pais = prompt("ingrese el pais a buscar").toLowerCase()
     paises.find( paises.toLowerCase() == pais)
 }


