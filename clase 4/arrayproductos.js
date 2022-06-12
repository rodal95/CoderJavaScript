function creoID(){
    return parseInt(Math.random()*10000)
}

function agregarprod(){
    let nombre = prompt("ingrese el nombre de producto")
    let importe = prompt("ingrese el precio")
    productos.push(new Producto(creoID(), nombre, importe))
}
function buscarprod(){
    debugger
    let prod = prompt("ingrese el nombre del producto")
        if(prod !== ""){
            let resultado = productos.find( p => p.nombre === prod.toUpperCase )
            console.table(resultado)

        }else {
            console.error("ingrese un dato valido")
        }
}

function filtrarprod(){
    debugger
    let nomb = prompt("ingrese el nombre de los productos  a filtrar")
    let resultado = productos.filter(p => p.nombre.includes(nomb.toUpperCase()))
    console.table(resultado)

}

const productos = []

function generadorAutomatico() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))//productos.push(new Producto(7890, "IPAD MINI 7.9", 189900))
}

function recorrerarrayprod(){
    debugger
    for (const elemento of productos){
        console.table(elemento)
    }
}


function iterararray(){
    productos.forEach(p =>{console.table(p)})
}
function existeprod(){
    let cod = parseInt(prompt("ingrese el codigo"))
    let existe = productos.some( p => p.id === cod)
    if(existe){
        console.log("existe el cod de prod")
    }else{
        console.warn("no se encontro el codigo ingresado")
    }
}
function proyectarIncremento(porc){
    let proyeccion = productos.map( p => {
        return{
            id: p.id,
            nombre:p.nombre,
            importe:p.importe,
            proyeccion:(p.importe*porc)
        }
    })
    console.clear()
    console.log("proyeccion incrementa de", porc/10,"%")
    console.table(proyeccion)
}
function generarCarrito(){
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345,"MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456,"LENOVO IDEAPAD 13", 199949))
}

function calcularcarrito(){
    console.log("total del carrito")
    let total = carrito.reduce( (totalizar, c) => totalizar + c.importe, 0)
    console.table(total)
}

generadorAutomatico()
