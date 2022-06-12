const servicios = []
class Service {
    constructor(cod, desc , precio){
        this.codigo = cod
        this.desc = desc
        this.precio = precio
    }
}

function cargoservicios(){
    servicios.push("redaccion de articulos")
    servicios.push("cordinacion de diplomaturas tech")
    servicios.push("profe javas")
    servicios.push("profe backend")
    servicios.push("profe bbdd")
    servicios.push("profe java advance")
    servicios.push("profe vue js")

} 
/* cargoservicios() */


function cargoarrayobj() {
    servicios.push(new Service(103,"redaccion de articulos",100))
    servicios.push(new Service(104,"cordinacion de diplomaturas tech",200))
    servicios.push(new Service(105,"profe javas",250))
    servicios.push(new Service(106,"profe backend",300))
    servicios.push(new Service(107,"profe bbdd",360))
    servicios.push(new Service(108,"profe java advance",150))
    servicios.push(new Service(109,"profe vue js",500))
}

cargoarrayobj()


const carrito1 = [{codigo:101,descripcion:"portaretrato", precio: 500},{codigo:102,descripcion:"portatabvla", precio: 700},{codigo:103,descripcion:"tratera", precio: 800}]

const carrito2 = [{codigo:101,descripcion:"portaretrato",unidades:3, precio: 500},{codigo:102,descripcion:"portatabvla",unidades:5, precio: 700},{codigo:103,descripcion:"tratera",unidades:7, precio: 800}]


function calculartotal(){
    debugger
    const total = carrito1.reduce((acc, producto) => acc + producto.precio,0)
    console.log("total del carrito", total)
}
function calculartotal2(){
    debugger
    const total = carrito2.reduce((acc, producto) => acc + (producto.precio*producto.unidades),0)
    console.log("total del carrito", total)
}