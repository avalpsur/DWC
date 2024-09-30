/*Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción. 
El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.*/ 

let euros, dolares, libras, yenes, francos, coronas;
let salir=false
let opcion

while(!salir){
    euros = prompt("Introduzca el importe en Euros a cambiar. Si desea terminar, escriba salir");
    if (euros!="salir"){
        opcion=parseInt(prompt("Introduzca 1:dólares 2:libras 3:yenes 4:francos 5:coronas"));
        
        switch (opcion){
        case 1:
            dolares = euros * 1.12;
            alert(euros+ " euros son "+dolares+" dólares");
            break;
        
        case 2:
            libras = euros * 0.83;
            alert(euros+ " euros son "+libras+" libras");
            break;

        case 3:
            yenes = euros * 160.89;
            alert(euros+ " euros son "+yenes+" yenes");
            break;

        case 4:
            francos = euros * 0.94;
            alert(euros+ " euros son "+francos+" francos");
            break;

        case 5:
            coronas = euros * 11.78;
            alert(euros+ " euros son "+coronas+" coronas");
            break;

        default:
            alert("Opción incorrecta");
            break;
        }

    }else{
        salir=true;
    }
}