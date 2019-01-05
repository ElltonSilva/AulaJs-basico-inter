function trocarDiv(nome, idade){
	var trocar = document.getElementById("trocar");
	var texto = prompt("Qual seu sobrenome?");

	trocar.innerHTML = nome+" "+texto+" tem "+idade+" anos " ;
}