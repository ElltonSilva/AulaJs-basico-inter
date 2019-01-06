function trocarDiv(nome, idade){
	var trocar = document.getElementById("trocar");
	var texto = prompt("Qual seu sobrenome?");

	trocar.innerHTML = nome+" "+texto+" tem "+idade+" anos " ;
}

function addIng(){
	var ing = document.getElementById("ingre").value;

	var listaHTML = document.getElementById("lista").innerHTML;

	listaHTML = listaHTML + "<li>"+ing+"</li>";

	document.getElementById("lista").innerHTML = listaHTML;
}


function somar(){
	var campo1 = parseInt (document.getElementById ("campo1").value);
	var campo2 = parseInt (document.getElementById ("campo2").value);

	soma = campo1 + campo2;

	alert (soma);

}