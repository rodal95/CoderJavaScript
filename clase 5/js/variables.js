const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango', 'tutifruto']
const carrito = []



const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const listadofrutas = document.getElementById("listadoFrutas")
/* const lista = document.getElementsByClassName("orange-text")
const div = document.getElementsByTagName("div") */
const listadoCarrito = document.querySelector("#listadoCarrito")

titulo.innerText = "Manda fruta"

slogan.innerText = "tu comercio favorito de frutas"


/* function cargarproductos(){
    listadofrutas.innerHTML=""
    for(elemento of productos){
        
        listadofrutas.innerHTML += "<li class='orange-text'>"+ elemento+"</li>"
    }

}
 */
function cargarproductos(){
    listadofrutas.innerHTML=""
    for(elemento of productos){
        const listprod = document.createElement("li")
        listprod.id = "2022" + elemento
        listprod.innerText = elemento
        listprod.className = "orange-text collection-item"
        listprod.addEventListener("click", ()=> {
            agregarAlcarrito(`${listprod.id}`)
        })
        listadofrutas.append(listprod)
    }

}
cargarproductos()


function agregarAlcarrito(prod){
    
    const elemento = document.getElementById(prod)
    if(prod != ""){
        const liscarrito = document.createElement("li")
                liscarrito.className = "collection-item italica-carrito"
                liscarrito.innerText = elemento.innerText
                liscarrito.id = `${prod}Encarrito`
                liscarrito.ondblclick = ()=> {
                    eliminardelcarrito(liscarrito.id)
                }
                 listadoCarrito.append(liscarrito)
    }
}


function eliminardelcarrito(prodID){
    const confirmar = confirm("desea elimininar el producto?")
    if(confirmar){
        const itemAeliminar = document.getElementById(prodID)
        itemAeliminar.remove()
    }
}



