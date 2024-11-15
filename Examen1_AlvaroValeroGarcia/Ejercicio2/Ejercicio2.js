let Pepe = new Integrante("28374651Q","Pepe","García");
let Maria = new Integrante("12365477L","María","López");

let Sara = new Integrante("23423423S","Sara","Varas");
let Nuria = new Integrante("98765432U","Nuria","Pérez");

let integrantesChungos = [];
integrantesChungos.push(Pepe);
integrantesChungos.push(Maria);

let integrantesReb = [];
integrantesReb.push(Sara);
integrantesReb.push(Nuria);

let chungos = new Banda("Los Chungos","2014",integrantesChungos,"654789622","Rock")
let rebujitas = new Banda("Las rebujitas","2012",integrantesReb,"631734538","Flamenco")

const bandas = []
bandas.push(chungos);
bandas.push(rebujitas);


imprimirListadoBandas();

console.log(buscarBandaPorNombre("Los Chungos"));
ordenarPorAño();

imprimirListadoBandas();

function imprimirListadoBandas(){
    return bandas.forEach((elemento) => elemento.mostrarBanda()+elemento.mostrarIntegrantes());
}

function buscarBandaPorNombre(nombre){
    return bandas.find((elemento) => elemento.nombre === nombre)
}

function ordenarPorAño(){
    //Ordeno en sentido ascendente
    bandas.sort((a,b)=>(a.año-b.año))
}