function calculadora (){
    let primernum = prompt("ingrese el primero numero")
    let segundonum = prompt("ingrese el segundo numero")
    let operador = prompt("selecione una operacion (+,-,*,/)")
    
    let resultado = realizarcalc(primernum , segundonum, operador)
    console.log(resultado)
}


function realizarcalc(parametro1,parametro2,parametro3){
    switch(parametro3){
         case "+":
             return(parseInt(parametro1)+ parseInt(parametro2))
             break
         case "-":
            return(parseInt(parametro1)- parseInt(parametro2))
            break
         case "*":
            return(parseInt(parametro1)* parseInt(parametro2))
            break
         case "/":
            return(parseInt(parametro1)/ parseInt(parametro2))
            break
         default:
             return "error en el operador aritmetico"
             break


    }
}
debugger
calculadora()







