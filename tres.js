/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let respuesta = 's';
	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonasViajan = 0;

	let contadorLugarMasElegido;
	
	let contadorPasajerosF = 0;
	let contadorPasajerosM = 0;

	let sexoMasPasajeros;

	let cantidadPersonasInvierno = 0;
	let contadorInvierno = 0;
	let promedioInvierno = 0;

	let contadorCataratas = 0;
	let contadorBari = 0;
	let contadorSalta = 0;


	do {

		// Validar sexo f o m
		do {
			sexo = prompt("Ingrese sexo: f/m").toLowerCase(sexo);
		}
		while (!(sexo == 'f' || sexo == 'm'))

		// Validar lugar
		do
		{
			lugar = prompt("Ingrese lugar: bariloche, cataratas o salta").toLowerCase(lugar);
		}
		while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){}

		// Validar temporada
		do
		{
			temporada = prompt("Ingrese temporada: invierno, otoño, primavera, verano").toLowerCase(temporada);
		}
		while(!(temporada == "invierno" || temporada == "otoño" || temporada == "primavera"
		|| temporada == "verano")){}

		//Personas Viajan
		do
		{
		cantidadPersonasViajan = parseInt(prompt("Ingrese cantidad de personas que viajan"));
		}
		while(isNaN(cantidadPersonasViajan) == true || cantidadPersonasViajan <= 0);
	

		switch(lugar)
		{
			case "bariloche":
				contadorBari++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
			default:
				console.log("No contemplado");
		}// FIn switch

		if(sexo=='f')
		{
			contadorPasajerosF = contadorPasajerosF + cantidadPersonasViajan;
		}
		else
		{
			contadorPasajerosM = contadorPasajerosM + cantidadPersonasViajan;
		}
	

			//el promedio de personas por viaje,  que viajan en invierno
		if(temporada=="invierno")
		{
			contadorInvierno++;
			cantidadPersonasInvierno = cantidadPersonasInvierno + cantidadPersonasViajan;
		}



	respuesta = prompt("Ingresa otro? s/n");
	} // FIN DO
	while (respuesta == 's') { }


	if(contadorSalta > contadorBari && contadorSalta > contadorCataratas)
		{
			contadorLugarMasElegido = "Salta";
		}
	else if(contadorCataratas > contadorBari && contadorCataratas > contadorSalta)
	{
		contadorLugarMasElegido = "Cataratas";
	}
	else if(contadorBari > contadorCataratas && contadorBari > contadorSalta)
	{
		contadorLugarMasElegido = "Bariloche";
	}

	//sexoMasPasajeros
	if(contadorPasajerosF > contadorPasajerosM)
	{
		sexoMasPasajeros = "Femenino";
	}
	else
	{
		sexoMasPasajeros = "Masculino";	
	}


	promedioInvierno = cantidadPersonasInvierno / contadorInvierno;


	console.log("EL lugar  mas elegido es: " + contadorLugarMasElegido);
	console.log("El sexo de titular que lleva más pasajeros es: " + sexoMasPasajeros);
	console.log("El promedio de personas por viaje,  que viajan en invierno es: " + promedioInvierno);
}// FIN
