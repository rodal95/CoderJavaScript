const usuario = document.getElementById('usuario');
const pass = document.getElementById('pass');

const usuario1 = document.getElementById('usuario1');
const pass1 = document.getElementById('pass1');


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
    debugger
    if(localStorage.getItem("registro") === null) {
        usuarios.push(obj)
        localStorage.setItem("registro", JSON.stringify(usuarios))
    }else{
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        datosLocales.push(obj)
        usuarios = datosLocales
        localStorage.setItem("registro", JSON.stringify(usuarios))
    }
}

const verSiHayCosas = ()=>{
    if(localStorage.getItem("registro") !== null){
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        usuarios = datosLocales
    }
}

const login = (usuarioEntrante, contraEntrante)=>{
    userlogeado = usuarios.find(usuario => usuario.nombre === usuarioEntrante && usuario.contra === contraEntrante)
    if(userlogeado === undefined){
        alert("No existe o clave mal ingresada");
    }else{
        alert("Buenos dias")
        location.replace('http://127.0.0.1:5500/index.html')

    }
}

document.addEventListener("DOMContentLoaded", verSiHayCosas)
