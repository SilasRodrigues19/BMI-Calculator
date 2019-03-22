/*

Futuras validações que faltaram implementar

*/

function valida() {
	var nome = document.getElementById('campo-nome');
	var peso = document.getElementById('campo-peso');
	var altura = document.getElementById('campo-altura');

	if (nome.value == "" || peso.value == "" || altura.value == "") {
		alert("Preencha todos os campos !");
		window.location.reload(true);
	}
}