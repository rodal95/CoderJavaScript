function listarservicios(){
    console.clear()
    console.table(servicios)
}

function agregarservicios(){
    debugger
    let ns = prompt("ingresa el nuevo servicio")
    
    if(ns != undefined && ns!= null && ns.trim() !== ""){
    servicios.push(ns)
    listarservicios()
    }
}


function quitarservicio(){
    let qs = prompt("ingresa el servicio a quitar")
    let indice = servicios.indexOf(qs.toLowerCase())
    servicios.splice(indice , 1)
}


/* funciones de orden sup
find
filter
some
reduce
sort
map */

function buscarservicio(){
    debugger
    const abuscar = prompt("ingrese el codigo de servicio a buscar")
    const respuesta = servicios.find( servicio => servicio.codigo === parseInt(abuscar))
    if(respuesta != undefined){
        console.table(respuesta)
    }else{
        console.warn("no se encuentra el codigo")
    }
}
    
function filtrarservicio(){
    debugger
    const abuscar = prompt("ingrese el filtro")
    const respuesta = servicios.filter( servicio => servicio.desc.includes(abuscar))
    if(respuesta != undefined){
        console.table(respuesta)
    }else{
        console.warn("no se encuentra el codigo")
    }
}

function minusculas(){
    debugger
    let resultado = servicios.map( servicio => {
        return{
            codigo: servicio.codigo,
            desc: servicio.desc.toUpperCase(),
            precio: servicio.precio
        }
    })
    console.table(resultado)
}

function existeserv(){
    debugger
    const abuscar = prompt("ingrese el servicio a buscar")
    const respuesta = servicios.some( servicio => servicio.codigo === parseInt(abuscar))
    
        console.table(respuesta)
    

}


function ordenarservicios(){
    debugger
    servicios.sort((a,b)=> {
        if(a.desc > b.desc){
            return 1
        }
        if(a.desc < b.desc){
            return -1
        }
        return 0
    })
    console.table(servicios)
}