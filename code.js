$('#carouselMaterialStyle').carousel();

function zoomIn(x){
    x.style.height="300px";

}
function zoomOut(x){
    x.style.height="200px"
}

document.getElementById("btnContact").addEventListener("click", playSound);
let audio1=document.getElementById("sound");
function playSound(){
    audio1.play();
}
