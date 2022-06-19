class ServiciosJuridicos {
    constructor(codigo, descripcion, precio){
    this.codigo = codigo
    this.descripcion = descripcion
    this.precio = precio
    }
}
const servicios = []
const cotizar = document.getElementById("cotizar")

class EspecialidadJuridica{
    constructor(codigo, descripcion, abogados,precio){
        this.codigo = codigo
        this.descripcion = descripcion
        this.abogados = abogados
        this.precio = precio
    }
}
const especialidades = []
const servjur = document.getElementsByClassName("servjur")[0]



function cargarServicios(){
    servicios.push(new ServiciosJuridicos(100,"REPRESENTACION LEGAL", "$"+5000))
    servicios.push(new ServiciosJuridicos(101,"CONSULTA", "$"+8000))
    servicios.push(new ServiciosJuridicos(102,"MEDIACION", "$"+2000))
    servicios.push(new ServiciosJuridicos(103,"ESCRIBANIA", "$"+3000))
    for(elemento of servicios){
        
        const service = document.createElement("li")
        service.innerText= `${elemento.descripcion}`
        servjur.append(service)
    }
}
cargarServicios()


function cargarEspecialidad(){
    especialidades.push(new EspecialidadJuridica(1,"Civil y Comercial", 3, "$"+2500))
    especialidades.push(new EspecialidadJuridica(2,"Penal", 1,"$"+3000))
    especialidades.push(new EspecialidadJuridica(3,"Familia", 2,"$"+ 3500))
    especialidades.push(new EspecialidadJuridica(4,"Federal", 1, "$"+4000))
}
cargarEspecialidad()

function elegirServicio(){
    debugger
    let eleccion = prompt("Por favor eliga su servicio: 1: Representacion Legal; 2: Consulta; 3:Mediacion; 4:Escribania")
    switch(eleccion){
        case "1":
            console.log("Eligio Representacion legal")
            let monto1 = 5000
            elegirEspecialidad(monto1)
            
            break;
        case "2":
            console.log("Eligio Consulta")
            let monto2 = parseInt(8000)
            elegirEspecialidad(monto2)
            
            break;
        case "3":
            console.log("Eligio Mediacion")
            let monto3 = parseInt(2000)
            elegirEspecialidad(monto3)
            
            break;
        case "4":
            console.log("Eligio Escribania")
            let monto4 = parseInt(3000)
            elegirEspecialidad(monto4)
        
            break; 
        default: 
            alert("eligio una opcion incorrecta.")
    }
}
cotizar.addEventListener("click", ()=> elegirServicio())

function elegirEspecialidad(parametro1){
    let especial = prompt("elija la especialidad: 1: Civil y Comercial; 2: Penal; 3:Familia; 4:Federal")
    switch(especial){
        case "1":
            console.log("Civil y Comercial")
            let pagar1 = parseInt(parametro1+2500)
            console.log("el monto a pagar es",pagar1)
            mediosdepago(pagar1)
            break;
        case "2":
            console.log("Eligio Penal")
            let pagar2 = parseInt(parametro1+3000)
            mediosdepago(pagar2)
            break;
        case "3":
            console.log("Eligio Familia")
            let pagar3 = parseInt(parametro1+3500)
            mediosdepago(pagar3)
            break;
        case "4":
            console.log("Eligio Federal")
            let pagar4 = parseInt(parametro1+4500)
            mediosdepago(pagar4)
            break; 
        default: 
            alert("eligio una opcion incorrecta.")
        }
        
}

function mediosdepago(parametro){
    let opcion = prompt("elija su medio de pago:1: Efectivo con Descuento; 2: Pe3 cuotas con 10%; 3:6 cuotas con 15%; 4:12 cuotas con 20%")
    switch(opcion){
        case "1":
            console.log("Eligio en Efectivo")
            let saldo1 = parseInt(parametro -0.15*parametro)
            console.log("el monto a pagar es ",saldo1)
            break;
        case "2":
            console.log("Eligio 3 cuotas con 10% de interes")
            let saldo2 = parseInt(parametro +0.10*parametro)
            console.log("el monto a pagar es ",saldo2,"el 3 cuotas de ",saldo2/3)
            break;
        case "3":
            console.log("Eligio 6 cuotas con 15 % de interes")
            let saldo3 = parseInt(parametro +0.15*parametro)
            console.log("el monto a pagar es ",saldo3,"el 3 cuotas de ",saldo3/6)
            break;
        case "4":
            console.log("Eligio 12 cuotas  con 20% de interes")
            let saldo4 = parseInt(parametro +0.20*parametro)
            console.log("el monto a pagar es ",saldo4,"el 3 cuotas de ",saldo4/12)
            break; 
        default: 
            alert("eligio una opcion incorrecta.")
    }
}


function filtrarServicios() {
    const aBuscar = prompt("ingrese el servicio que necesitas:")
    const respuesta = servicios.filter( servi => servi.descripcion.includes(aBuscar.toUpperCase()))
      if (respuesta != undefined){
          console.table(respuesta)
      }
      else{
        console.warn("no se encuentra el servicio")
      }

}

function listarservicios(){
    console.table(servicios)
}
listarservicios()
