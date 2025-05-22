function sumar()
{
	var n1=document.getElementById("num1").value; //Aguardar el valor (var)
	var n2=document.getElementById("num2").value;
	var res=parseFloat(n1)+parseFloat(n2);
	document.getElementById("resultado").innerHTML=res;//contenido de ventana(innerHTML)
}
function restar()
{
	var n1=document.getElementById("num1").value; //Aguardar el valor (var)
	var n2=document.getElementById("num2").value;
	var res=parseFloat(n1)-parseFloat(n2);
	document.getElementById("resultado").innerHTML=res;//contenido de ventana(innerHTML)
}
function dividir()
{
	var n1=document.getElementById("num1").value; //Aguardar el valor (var)
	var n2=document.getElementById("num2").value;
	var res=parseFloat(n1)/parseFloat(n2);
	document.getElementById("resultado").innerHTML=res;//contenido de ventana(innerHTML)
}
function multiplicar()
{
	var n1=document.getElementById("num1").value; //Aguardar el valor (var)
	var n2=document.getElementById("num2").value;
	var res=parseFloat(n1)*parseFloat(n2);
	document.getElementById("resultado").innerHTML=res;//contenido de ventana(innerHTML)
}