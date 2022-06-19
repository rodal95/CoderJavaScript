const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")


const inputs = document.querySelectorAll("input")



btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "haga clic para enviar el pedido"
})


function focoencampos (){
    for(campo of inputs){
        if(campo.type != "submit"){
            campo.addEventListener("focus", ()=> inputNombre.className ="fondo-imputs")
            campo.addEventListener("blur", ()=> inputNombre.className ="")
        }
    }
}


focoencampos()


inputNombre.addEventListener("input", ()=> {
    console.clear()
    console.log(inputNombre.value)
})

btnSubmit.addEventListener("submit", validarform)

function validarform(e){
    e.preventDefault()
    console.log("detuvimos el evento submit")
}
