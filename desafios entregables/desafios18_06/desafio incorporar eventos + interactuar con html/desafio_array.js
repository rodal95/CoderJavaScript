const celulares = ['motorolla','iphone','nokia','samsung'];
debugger
function recorrercelus(){
    debugger
    for (let i = 0; i <= celulares.length; i++){
        console.log(celulares[i])
    }
}

function agregarcelus() {
    let nuevoscelus = prompt("agrega el celular que queres")
    celulares.push(nuevoscelus)
    console.table(celulares)
}

agregarcelus()

function eliminarcelu() {
    let cel = prompt("que celular desea eliminar")
    let indice = parseInt(celulares.indexOf(cel))
    celulares.splice(indice, 1)
    console.table(celulares)
}
 
eliminarcelu()