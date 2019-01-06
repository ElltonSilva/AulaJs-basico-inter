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