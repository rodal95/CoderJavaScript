class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva
        this.preciofinal = function () {
            return this.precio * this.iva

        }
        this.descuentostock = function (uni) {
            this.stock = this.stock - uni
        }
    }
}
