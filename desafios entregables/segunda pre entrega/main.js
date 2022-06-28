let saldo = 0
let transfRealizadas =[]
const botondepo = document.getElementById("dep")
const botoncons = document.getElementById("saldo")
const botontrans = document.getElementById("trans")
botondepo.addEventListener("click",()=> {
    
    saldo += parseInt(deposito())
})



function deposito(){
    let monto = prompt("ingrese el monto a depositar")
    return monto


}

botoncons.addEventListener("click", ()=> {
    alert(`su saldo es ${saldo}`)
})


botontrans.addEventListener("click", ()=>{
    let historia = transferencias()

})
const lista = document.getElementById("historiales")

botonhisto= document.getElementById("histo")
botonhisto.addEventListener("click", ()=> {
    datosobtenidos =JSON.parse( localStorage.getItem("transferencias")  )
    console.log(datosobtenidos)
    for(element of datosobtenidos){
        const tras = document.createElement("li")
        tras.innerHTML += `<li>el monto $${element.monto} se envio al cbu ${element.codigo}</li>`
        lista.append(tras)
    }

})

function transferencias(){
   const montotrans = prompt("ingrese el monto a transferir")
   const cbu = prompt("ingrese el cbu a  transferir")
   const data = {
    monto: montotrans,
    codigo: cbu
   }
    transfRealizadas.push(data)
    saldo -= data.monto
    console.log(transfRealizadas)
    localStorage.setItem("transferencias",JSON.stringify(transfRealizadas))
} 