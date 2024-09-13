let bandera = false;
let contenidoVacio = document.getElementById('contenido-vacio');
let textoResultado = document.querySelector('.texto-resultado'); 
let contenedorPadre = document.getElementById('contenedor-padre');



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
    if (texto.length > 1) {
        contenidoVacio.style.display = 'none';
        textoResultado.style.display = 'flex'
        textoResultado.textContent = encriptar(texto);
    }else{
            contenidoVacio.style.display = 'flex';
            textoResultado.style.display = 'none'
            
    }
}
function retornar1 (){
    let texto = document.getElementById('textArea').value;
    if (texto.length > 1) {
        textoResultado.textContent = desencriptar(texto);
        contenidoVacio.style.display = 'none';
        textoResultado.style.display = 'flex'

    }else{
        contenidoVacio.style.display = 'flex';
        textoResultado.style.display = 'none'

    }
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
    

    function copiarTexto(){
        let texto = document.getElementById('texto-a-copiar').textContent;
        navigator.clipboard.writeText(texto).then(function(){
            Swal.fire({
                title: 'Notificación!',
                text: 'Texto copiado en el portapapeles',
                icon: 'success',
                timer: 3000,  // Se cierra automáticamente después de 3 segundos
                showConfirmButton: false
              });
       
        }).catch(function(err){
            console.error( 'Error al copiar texto ', err);
        });
    }

  