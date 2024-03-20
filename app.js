let botonEncriptar = document.querySelector(".boton-encriptar");
let botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
let contenedorPatapon = document.querySelector(".contenedor-patapon");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".resultado-texto");
let prueba = document.querySelector(".contenedor-resultado");

function ocultarElementos(elemento) {
    elemento.classList.add("ocultar");
}

function mostrarElementos(elemento){
    elemento.classList.remove("ocultar");
}

function encriptar(){
    let cajaTexto = document.querySelector(".caja-texto").value;
    let resultadoEncriptado = compruebaEn(cajaTexto);
    resultado.textContent = resultadoEncriptado;
}

function compruebaEn(elemento){
    if(elemento == "" || elemento == " "){
        console.log("No hay nada");
        mostrarElementos(contenedorPatapon);
        mostrarElementos(contenedor);
        ocultarElementos(prueba);
        /*alert("Ingrese texto antes");*/
    }
    else{
        ocultarElementos(contenedorPatapon);
        ocultarElementos(contenedor);
        mostrarElementos(prueba);

        let textoEncriptado = "";

        for (let i = 0; i < elemento.length; i++) {
            if(elemento[i] == 'a'){
                textoEncriptado = textoEncriptado + "ai";
            }
            else if(elemento[i] == 'e'){
                textoEncriptado = textoEncriptado + "enter";
            }
            else if(elemento[i] == 'i'){
                textoEncriptado = textoEncriptado + "imes";
            }
            else if(elemento[i] == 'o'){
                textoEncriptado = textoEncriptado + "ober";
            }
            else if(elemento[i] == 'u'){
                textoEncriptado = textoEncriptado + "ufat";
            }
            else{
                textoEncriptado = textoEncriptado + elemento[i];
            }
        }

        return textoEncriptado;
    }
}

function desencriptar(){
    let cajaTexto = document.querySelector(".caja-texto").value;
    let resultadoDesencriptado = compruebaDes(cajaTexto);
    resultado.textContent = resultadoDesencriptado;
}


function compruebaDes(elemento){
    if(elemento == "" || elemento == " "){
        console.log("No hay nada");
        mostrarElementos(contenedorPatapon);
        mostrarElementos(contenedor);
        ocultarElementos(prueba);
        /*alert("Ingrese texto antes");*/
    }
    else{
        ocultarElementos(contenedorPatapon);
        ocultarElementos(contenedor);
        mostrarElementos(prueba);

        let textoDesencriptado = elemento.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

        return textoDesencriptado;
    }
}

function copiarTexto(){
    let contenido = document.querySelector(".resultado-texto").textContent;
    navigator.clipboard.writeText(contenido);
}

botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiarTexto);