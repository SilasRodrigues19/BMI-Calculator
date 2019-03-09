



var btnCalc = document.getElementById("calcula-imcs");
btnCalc.addEventListener("click", function () {

	var trsPacientes = document.getElementsByClassName("paciente"); // Array de TRs

	percorreArray(trsPacientes, function(pacienteTr) {


	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {nome : tdNome.textContent, 
		                 peso : tdPeso.textContent, 
		                 altura: tdAltura.textContent,
		                 pegaImc: function() {
		                 	if(this.altura != 0) {

							var imc = this.peso / (this.altura * this.altura);
							return imc;
		

							} else {

							console.log("Não posso dividir por zero");

							}

		               	}};


	var imc = pacienteAtual.pegaImc(); /* Chamando a função para calcular */

	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	tdImc.textContent = imc;

	console.log(imc);

	});	
});
btnCalc.addEventListener("click", function() {
	alert('IMC\u0027s calculados com sucesso\n\nPressione OK para continuar');
});



	



	
