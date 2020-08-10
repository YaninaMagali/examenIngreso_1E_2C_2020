/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let i = 0;
	let cantidadPersonas = 5;
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let sumaEdades = 0;
	let promedioEdades;
	let mayorPesoM = 0;
	let FlagMayorPesoM = 0;
	let nombreMasPesado = "No ingresaron hombres";


	for (i; i < cantidadPersonas; i++) {
		nombre = prompt("Ingrese nombre");

		//Validar peso != 0
		do {
			peso = parseFloat(prompt("Ingrese peso"));
		}

		while (peso == 0 || isNaN(peso) == true) { }

		//Validar sexo f o m
		do {
			sexo = prompt("Ingrese sexo: f/m").toLowerCase(sexo);
		}
		while (!(sexo == 'f' || sexo == 'm'))

		do {
			edad = parseInt(prompt("Ingrese edad"));
		}
		while (isNaN(edad) == true) { }

		switch (sexo) {
			case 'f':
				contadorMujeres++;
				break;
			case 'm':
				if (FlagMayorPesoM == 0 || peso > mayorPesoM) {
					mayorPesoM = peso;
					FlagMayorPesoM = 1;
					nombreMasPesado = nombre;
				}
				break;
			default:
				console.log("No aplica");
				break;


		}




	}// FIN FOR
	sumaEdades = sumaEdades + edad;
	promedioEdades = sumaEdades / cantidadPersonas;


	console.log("La cantidad de mujeres es igual a: " + contadorMujeres);
	console.log("El promedio es igual a: " + promedioEdades);
	console.log("El mayor peso masculino es: " + mayorPesoM + "y su nombre es " + nombreMasPesado);
}//FIN
