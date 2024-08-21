//Calorias diarias
let valorm 
let valorh 
let genero 
genero = parseInt(prompt("bienvenido a calculadora de calorias,para saber las calorias que debe de consumir por dia,ingrese:\n 1 si es mujer \n 2 si es hombre")) 
   {
        if (genero === 1){
            valorm = 447.6 
        console.log(valorm)  
        } else if(genero === 2){
            valorh = 88.36
        console.log(valorh)
        }
    }
let resultadopesom = 0
let resultadopesoh = 0
let peso = parseInt(prompt("ingrese su peso en kg"))
    { 
        if(genero=== 1){
            function multiplicar(peso,a=9.2){
                return peso*a
            }
            resultadopesom = multiplicar (peso)
            console.log(resultadopesom)
        }else if(genero === 2){
            function multiplicar(peso,b=13.4){
                return peso*b
            }
                resultadopesoh = multiplicar (peso)
            console.log(resultadopesoh)
        }
    }
let resultadoalturam = 0
let resultadoalturah = 0
let altura = parseInt(prompt("ingrese su altura en cm"))
    { 
        if(genero=== 1){
            function multiplicar(altura,c=3.1){
                return altura*c
            }
                resultadoalturam = multiplicar (altura)
            console.log(resultadoalturam)
        } else if(genero === 2){
            function multiplicar(altura,d=4.8){
                return altura*d
            }
                resultadoalturah = multiplicar (altura)
            console.log(resultadoalturah)
        }
    }
let resultadoedadm = 0
let resultadoedadh
let edad = parseInt(prompt("ingrese su edad"))
    { 
        if(genero=== 1){
            function multiplicar(edad,e=4.3){
                return edad*e
            }
                resultadoedadm = multiplicar (edad)
            console.log(resultadoedadm)
        } else if(genero === 2){
            function multiplicar(edad,f=5.7){
                return edad*f
            }
                resultadoedadh = multiplicar (edad)
            console.log(resultadoedadh)
        }
    }

//tasa metabolica basal
let tmbm
let tmbh 
if (genero === 1){
     if(valorm !== undefined, resultadopesom !== undefined, resultadoalturam !== undefined, resultadoedadm !== undefined){
        tmbm = (valorm + resultadopesom + resultadoalturam) - resultadoedadm
    console.log(tmbm)
} }
else if (genero === 2){
    if (valorh !== undefined){
        if(valorh !== undefined, resultadopesoh !== undefined, resultadoalturah !== undefined, resultadoedadh !== undefined){
                tmbh = (valorh + resultadopesoh + resultadoalturah) - resultadoedadh
            console.log(tmbh)
    }
    }
} 


let niveldeactividad = parseInt(prompt("ingresa tu nivel de actividad fisica: \n 1 para sedentario (poco o ningún ejercicio) \n 2 para ligera actividad (ejercicio ligero 1-3 días a la semana) \n 3 para actividad moderada (ejercicio moderado 3-5 días a la semana) \n 4 para actividad intensa (ejercicio intenso 6-7 días a la semana)"))
switch(niveldeactividad){
    case 1:
        if(genero === 1){
            if(tmbm !== undefined) {
                let sedentariom = 1.2 * tmbm
                alert("tus calorias diarias son "+ sedentariom)
            }}else if (genero === 2){
                if(tmbh !== undefined) {
                let sedentarioh = 1.2 * tmbh
                alert("tus calorias diarias son "+ sedentarioh)
            }}
        break

    case 2:
        if(genero ===1){
            if(tmbm !== undefined){
                let ligeraactividadm = 1.375 * tmbm
                alert("tus calorias diarias son "+ ligeraactividadm)
            }}else if (genero ===2){
                if(tmbh !== undefined){
                let ligeraactividadh = 1.375 * tmbh
                alert("tus calorias diarias son "+ ligeraactividadh)  
            }}
        break

    case 3:
        if(genero ===1){
            if (tmbm !== undefined){
                let actividadmoderadam = 1.55 * tmbm
                alert("tus calorias diarias son "+ actividadmoderadam)
            }}else if (genero ===2){
                if (tmbh !== undefined){
                let actividadmoderadah = 1.55 * tmbh
                alert("tus calorias diarias son "+ actividadmoderadah)
            }}
            break

    case 4:
        if(genero ===1){
            if (tmbm !== undefined){
                let actividadintensam = 1.725*tmbm
                alert("tus calorias diarias son "+ actividadintensam)
            }}else if (genero ===2){
                if (tmbh !== undefined){
                let actividadintensah = 1.725*tmbh
                alert("tus calorias diarias son "+ actividadintensah)
            }}
            break
}

// seguimiento de calorias

let final1 = parseInt(prompt("¿Cuál es tu límite de calorías diarias?"))
let dia = 1

let caloriasdiarias = final1
let totalcaloriasConsumidas = 0

for (let i = 1; i <= dia; i++) {
    let caloriasconsumidas = parseInt(prompt("¿Cuántas calorías consumiste en el día?"))
    if (caloriasconsumidas <= caloriasdiarias){
        console.log("felicidades,sigue asi")
    }else{
        console.log("sera despues")
    }
}
 