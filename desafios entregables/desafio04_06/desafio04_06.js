debugger
let altura = parseInt(prompt("Ingrese su altura(m):"))
let peso =  parseInt(prompt("Ingrese el peso(kg):"))
let imc
if(altura == "" || peso == "" || isNaN(altura) && isNaN(peso)){
    alert("esta ingresando datos incorrectos");
}else{
function calcularIMC(altura, peso){
    imc = parseFloat(peso / ((altura)^2));
}
    calcularIMC(altura, peso)

    if (imc < 18.5) {
        alert("Su peso es de " + peso + " kg y usted esta bajo de peso.");
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert("Su peso es de " + peso + " kg y usted esta en su peso ideal.");
    }
    else if(imc >= 25 && imc <= 29.9){
        alert("Su peso es de " + peso + " kg y usted esta con sobrepeso.");
    }
    else if(imc >= 30 && imc <= 39.9){
        alert("Su peso es de " + peso + " kg y usted esta con obesidad.");
    }
    else if(imc >= 40){
        alert("Su peso es de " + peso + " kg y usted esta con obesidad morbida.");
    }
}

