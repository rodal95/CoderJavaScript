class Producto {
    constructor(id, nombre, importe){
        this.id = id
        this.nombre = nombre
        this.importe = importe

    }
    preciofinal(){
        return parseInt(this.importe)*parseFloat(IVA)
    }
}