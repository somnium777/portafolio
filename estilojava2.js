function leer() 
{
	//REFERENCIA POR PSEUDOCLASE
	var nombre=document.forms["formulario"].elements[0].value;
	//REFERENCIA POR ID
	var clave=document.getElementById("pass").value;
	//REFERENCIA POR TAGNAME
	var car=document.getElementsByTagName("select")[0].value;
	//Referencia por name
	var gen=document.getElementsByName("genero");

	for (var i = 0; i <gen.length; i++)
	{
		if (gen[i].checked) 
		{
			var g=gen[i].value;
		}
	}
	//Referencvia por ID
	var p=document.getElementById("privacidad").checked;
	//Mostración de datos
	document.getElementById("Datos").innerHTML="\<br/>Nombre: "+nombre+"\<br/>Password:  "+clave+
	"\<br/>Tu carrera es: "+car+"\<br>Genero es: "+g+"\<br>Acepto el acuerdo:"+p;

}