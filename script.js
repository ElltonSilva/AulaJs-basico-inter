/*function trocarDiv(nome, idade){
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

function testeVerificacao(){
	var x = prompt("Digite um número: ");

	if (x > 10) {
		alert("É maior "+x);
	}else{
		alert("É menor "+x);
	}
}*/

/*var x = 0;

document.write("Inicio do loop..");

while(x <= 10) {
  document.write("número:"+x+"<br/>");

  x++;
}

document.write("Fim do loop.");*/

/*for (i = 0; i <= 10; i++){
	document.write(i);
}

function calcular(){

        var valor1 = document.getElementById("valor1").value;
        var valor2 = document.getElementById("valor2").value;
        var sinal = document.getElementById("sinal").value;
        var resultado;

        if(sinal=="+") resultado = parseInt(valor1) + parseInt(valor2);
        if(sinal=="-") resultado = parseInt(valor1) - parseInt(valor2);
        if(sinal=="*") resultado = parseInt(valor1) * parseInt(valor2);
        if(sinal=="/") resultado = parseInt(valor1) / parseInt(valor2);

        document.getElementById("resultado").innerHTML = resultado;
}*/

function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	bola.setAttribute("style", "left:"+p1+"px:top:"+p2+"px;");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);
}

function estourar(elemento){
	document.body.removeChild(elemento);
}

function iniciar(){
	setInterval(addBola, 1000);
}

function validar(){
	var valor = document.getElementById("numero").value;

	if (valor.length > 2){
		alert("Digite apenas 2 algarismo:");
		return false;
	} else{
		return true;
	}
}