let saldo = 0

const botondepo = document.getElementById("dep")

botondepo.addEventListener("click",()=> {
    debugger
    saldo += parseInt(deposito())
})

function deposito(){
    let monto = prompt("ingrese el monto a depositar")
    return monto


}

