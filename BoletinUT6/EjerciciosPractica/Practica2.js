window.addEventListener("load", inicializar, false); 

function inicializar(){
    document.getElementById("codigo").addEventListener('input', comprobar, false);

};


function comprobar(){
    let codigo = document.getElementById("codigo").value;
    let expReg = /^[A-Z]{3}-\d{2}$/;
    let resultado = document.getElementById("resultado");
    if(expReg.test(codigo)){
        resultado.innerText = "El código es correcto";
        resultado.style.display = "flex";

        document.getElementById("Enviar").addEventListener('click', enviar, false);
    }else{
        resultado.innerText = "El código es incorrecto";
        resultado.style.display = "flex";
    }

    function enviar(){
        localStorage.setItem("codigo", codigo);
        console.log(localStorage.getItem("codigo"));
    }
}