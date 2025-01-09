document.body.onload = addElement;

function addElement(){
    let div = document.createElement("div")

    document.body.appendChild(div)
    
    div.onmousemove = function(e){
        mover(e)
    }

    function mover(e) {
        let x = e.clientX;
        let y = e.clientY;
        let coor = "Cordenadas: (" + x + "," + y + ")";
        document.getElementById("demo").innerHTML = coor;
      }

}