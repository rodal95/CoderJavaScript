let usuarios = []
const botonLog = document.getElementById('btn1');
const boton = document.getElementById('btn');
let userlogeado = {}

boton.addEventListener("click", ()=>{
    guardarRegistro()
})


botonLog.addEventListener("click", ()=>{
    login(usuario1.value, pass1.value)
})


const guardarRegistro = () => {
    const user = {
        nombre: usuario.value,
        contra: pass.value,
        plata: 0
    }
    

    guardarEnLocal(user)
}

const guardarEnLocal = (obj) => {
    if(localStorage.getItem("registro") === null) {
        usuarios.push(obj)
        localStorage.setItem("registro", JSON.stringify(usuarios))
    }else{
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        datosLocales.push(obj)
        usuarios = datosLocales//TA MAL
        localStorage.setItem("registro", JSON.stringify(usuarios))
    }
}

const verSiHayCosas = ()=>{
    if(localStorage.getItem("registro") !== null){
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        usuarios = datosLocales//TA MAL  
    }
}

const login = (usuarioEntrante, contraEntrante)=>{
    userlogeado = usuarios.find(usuario => usuario.nombre === usuarioEntrante && usuario.contra === contraEntrante)
    if(userlogeado === undefined){
        alert("No existe o clave mal ingresada");
    }else{
        alert("Buenos dias")

    }
}

const deposito = (valor) => {
    userlogeado.plata += valor
    const index = usuarios.findIndex(usuario => usuario.nombre === userlogeado.nombre)
    const datosLocales = JSON.parse(localStorage.getItem("registro"))
    datosLocales[index] = userlogeado
    localStorage.setItem("registro", JSON.stringify(datosLocales))
    verSiHayCosas()//Actualizar 
    console.log(usuarios)
}

document.addEventListener("DOMContentLoaded", verSiHayCosas)


