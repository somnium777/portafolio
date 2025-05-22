
window.onload = function() {
    document.getElementById("multiplicar").onclick = multiplicar;
};
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // evita que el formulario se envíe
    multiplicar(); // tu función de cálculo
});
function multiplicar() {
var horas = document.getElementById("estacionamiento").value;
var tarifa = document.getElementById("transporte").value;
var resultado = parseFloat(horas) * parseFloat(tarifa);
 document.getElementById("resultado").innerHTML = "Total: $" + resultado.toFixed(2);
}

