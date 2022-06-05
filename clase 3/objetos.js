class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva
    }
        preciofinal() {
            return this.precio * this.iva
        }

        descuentoStock(uni) {
            this.stock = this.stock - uni
        }
    }


function Producto(nombre, stock, precio, iva){
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
    this.iva = iva

    this.preciofinal = function () {
        return this.precio * this.iva
    }
    
    this.descuentoStock = function(uni) {
        this.stock = this.stock - uni
    }
}


