
function desencriptar(texto){
    let textoDesencriptado = texto
    .replace(/ai/g,"a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    return textoDesencriptado;
    }

function retornar (){
    let texto = document.getElementById('textArea').value;
    console.log(`El texto normal es: ${texto} y como resultado es : ${encriptar(texto)}` );
}
function retornar1 (){
    let texto = document.getElementById('textArea').value;
    console.log(desencriptar(texto));
}

function encriptar(texto){
    let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return textoEncriptado;
    }
    