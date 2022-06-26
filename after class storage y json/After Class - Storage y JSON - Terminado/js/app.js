btnCargar.addEventListener("click", ()=> {
    // servicios.push(inputServicio.value)
    // console.log("Se agregó un servicio nuevo.")
    // btnCancelar.click()
    // inputServicio.focus()
    // localStorage.setItem("servicios", JSON.stringify(servicios))
    
    //armar un objeto literal base
    const obj = {
        servicio: inputServicio.value,
        importe: inputImporte.value
    }
    listadoServ.push(obj)
    console.log("Se agregó un servicio nuevo.")
    btnCancelar.click()
    inputServicio.focus()
    localStorage.setItem("ListadoServ", JSON.stringify(listadoServ))    
})

function recuperoLS() {
    //recuperar de LocalStorage los Arrays que tenga previamente guardados
    servicios = JSON.parse(localStorage.getItem("servicios"))
    listadoServ = JSON.parse(localStorage.getItem("ListadoServ"))
    //Así puedo seguir agregándoles contenido.
}
recuperoLS()

btnCancelar.addEventListener("click", ()=> {
    inputServicio.value = ""
    inputImporte.value = ""
})

btnVer.addEventListener("click", ()=> {
    location.href = "servicios.html"
})

/*
CLAVE - VALOR
CLAVE: nombre amigable
VALOR: al dato que almaceno (del tipo STRING)
.setItem(KEY, VALUE)
.getItem()
.removeItem()
.clear()

JSON
.stringify() //convertir un objeto JS en cadena de text

*/