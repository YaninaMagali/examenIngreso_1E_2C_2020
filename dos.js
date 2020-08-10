/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

  let respuesta = 's';
  let marca;
  let precio;
  let peso;
  let tipo;

  let acumuladorPeso = 0;

  let precioMasCaro = 0;
  let marcaMasCaro = "No hay liquidos ingresados";
  let FlagMasCaro = 0;

  let FlagMasBarato = 0;
  let marcaMasBarato = "No hay solidos ingresados";
  let precioMasBarato = 0;

  
  do
  {
    marca = prompt("Ingrese marca del producto");

    //Validar precio
    do
    {
      precio = parseFloat(prompt("Ingrese precio del producto"));
    }
    while(precio <= 0){}

    //Validar peso
    do
    {
      peso = parseFloat(prompt("Ingrese peso del producto en kg"));
    }
    while(peso == 0){}

    //Validar tipo
    do
    {
      tipo = prompt("Ingrese tipo del producto: liquido o solido").toLowerCase(tipo);
    }
    while(!(tipo == "solido" || tipo == "sólido" || tipo == "líquido" || tipo == "liquido")){}


    respuesta = prompt("Ingresa otro? s/n").toLowerCase(respuesta);

    acumuladorPeso = acumuladorPeso + peso;

    switch(tipo)
    {
      case "liquido":
      case "liquido":
        if(FlagMasCaro == 0 || precio > precioMasCaro)
        {
          precioMasCaro = precio;
          marcaMasCaro = marca;
          FlagMasCaro = 1;
        }
        break;
      case "solido":
      case "sólido":
        if(FlagMasBarato == 0 || precio < precioMasBarato)
        {
          precioMasBarato = precio;
          marcaMasBarato = marca;
          FlagMasBarato = 1;
        }
        break;
      default:
        console.log("Tipo no contemplado");
        break;

    }


  }// FIN DO
  while(respuesta == 's'){}

  console.log("El peso total de la compra es igual a: " + acumuladorPeso + "kilos");
  console.log("La marca del liquido mas caro es: " + marcaMasCaro);
  console.log("La marca del solido mas barato es: " + marcaMasBarato);
}//FIN

