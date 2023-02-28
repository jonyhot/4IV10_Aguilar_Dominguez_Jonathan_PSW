/*1)*/
function ints(){
    var valor = document.getElementById("cantidad").value;
    var meses = document.getElementById("meses").value;
    var int_meses = parseInt(meses);
    var int_valor = parseInt(valor);
    var interes = int_valor * 0.082 * int_meses;
    var total = int_valor + interes;
    document.getElementById("cantidadi").value = "$ " + total;
}

/*2)*/
function sueld(){
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var numero_ventas = parseInt(document.getElementById("ventas").value);
    var monto_ventas = parseInt(document.getElementById("monto_ventas").value);
    var comision = 0;
    
    if(numero_ventas >= 5){
        comision = monto_ventas * 0.35;
    }

    var total = (sueldo + comision) * 0.88;
    document.getElementById("comision_total").value = "$ " + comision;
    document.getElementById("sueldo_total").value = "$ " + total;

}

/*3)*/
function product(){
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var tipo = document.getElementById("tipo").value;
    var precio = parseInt(document.getElementById("precio").value);
    preciof = 0

    if(tipo == "Papas" || "papas" || "PAPAS"){
        descuento = (precio  * 0.02);
        preciof = precio - descuento;
    }

    if(tipo == "Pastelito" || "pastelito" || "PASTELITO"){
        descuento = (precio  * 0.10);
        preciof = precio - descuento;
    }

    if(tipo == "Lacteo" || "lacteo" || "LACTEO"){
        descuento = (precio  * 0.075);
        preciof = precio - descuento;
    }

    document.getElementById("total").value = "$ " + preciof;

}



/*4)*/
function califi(){
    var p1 = parseInt(document.getElementById("parcial1").value);
    var p2 = parseInt(document.getElementById("parcial2").value);
    var p3 = parseInt(document.getElementById("parcial3").value);
    var exam = parseInt(document.getElementById("examenfinal").value);
    var trabajo = parseInt(document.getElementById("trabajofinal").value);

	var calif_final = ((p1 + p2 + p3) / 3.0) * 0.55;
	calif_final = calif_final + (exam * 0.3);
	calif_final = calif_final + (trabajo * 0.15);
	
    document.getElementById("calif_final").value = calif_final;
}


/*5)*/
function fporc(){
    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);

    var porcentaje_hombres = 100 * hombres / (hombres + mujeres);
    var porcentaje_mujeres = 100 * mujeres / (hombres + mujeres);

    document.getElementById("por_hombre").value = porcentaje_hombres + "%";
    document.getElementById("por_mujer").value = porcentaje_mujeres + "%";


}


/*6)*/
function tedad(){
    var nacimiento = new Date(document.getElementById("nacimiento").value + "T00:00");
    var actual = new Date();

    var edad = Math.trunc((actual - nacimiento) / (1000 * 60 * 60 * 24 * 365));

    document.getElementById("edad").value = edad + " años";

}


/*1)*/
function dnum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = 0;

    if(num1 == num2){
    resultado = num1 * num2;
    }
    if(num1 > num2){
    resultado = num1 ** num2;
    }
    if(num1 < num2 && num2 != 0){
    resultado = num1 / num2;
    }

    document.getElementById("resultado").value = resultado;

}


/*2)*/
function tnumeros(){

    const tres = [];
    tres[0] = parseInt(document.getElementById("numero1").value);
	tres[1] = parseInt(document.getElementById("numero2").value);
	tres[2] = parseInt(document.getElementById("numero3").value);
	
    document.getElementById("mayor").value = Math.max.apply(null, tres);

}


/*3)*/
function horaExtra(){

    var horas_totales = parseInt(document.getElementById("horas_totales").value);
    var costo_hora = parseInt(document.getElementById("costo_hora").value);
	var horas41_48 = 0;
	var horas49_mas = 0;
	
	if (horas_totales > 40 ) { 
		horas41_48 = horas_totales -40;
		
		if (horas41_48 > 8) {
			horas49_mas = horas41_48 - 8;
			horas41_48 = 8;
		}
	}
	
	tot_extra = (horas41_48 * 2 * costo_hora) + (horas49_mas * 3 * costo_hora) ;
	
    document.getElementById("monto_extra").value = tot_extra;

}


