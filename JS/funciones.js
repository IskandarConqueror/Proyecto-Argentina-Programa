window.onload = function (){
    document.getElementById('boton').onclick = function() {
    console.log("Hicimos Click");
    document.getElementById("email").innerHTML="darrell.carroll@example.com";
} 
document.getElementById('boton2').onclick = function(){
    document.getElementById("email").hidden="True";
}
}
/**Al revisar esta zona, note que solo funcionaba en una sola instancia, probe haciendolo con un while y do while pero genero un bucle infinito. */