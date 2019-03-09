
/* document.querySelectorAll("table"); Retorna um array */


var btnAdd = document.querySelector("#adicionar-paciente"); /* # para identificar que é um ID*/

btnAdd.addEventListener("click", function(event) {

	event.preventDefault(); /* Impede comportamento padrão */

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");



	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+ campoNome.value+"</td>"+
						"<td class='info-peso'>"+ campoPeso.value+"</td>"+
						"<td class='info-altura'>"+ campoAltura.value+"</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";

	var tabela = document.querySelector("table"); /* Retorna o primeiro elemento */
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";

});



