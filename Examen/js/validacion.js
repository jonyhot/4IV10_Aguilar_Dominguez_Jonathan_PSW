function validarn(e){
  var teclado = (document.all)? e.keyCode : e.which;
  if(teclado == 8) return true;
  var patron =/[0-9\d .]/;
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function redondeo(n) {    
  return Math.round(n*100)/100;
}

function borra_tabla() {
var x = document.getElementById("tableData").rows.length; 
for (let i = 1; i < x; i++) {
  document.getElementById("tableData").deleteRow(-1);
}
}

function f_interes(){

  var prestamo = document.getElementById("prestamo").value;
  var interes  = document.getElementById("interes").value;
var plazo    = document.getElementById("plazo").value;

  var p = parseInt(prestamo);
  var i = parseInt(interes)/100;
  var n = parseInt(plazo);
var m = 12;

  var cuota = [p*(i/m)*(1 + i/m)**(n*m)] / [(1 + i/m)**(n*m) - 1];

var table = document.getElementById("tableData");
var rowCount  = 0;
saldo_inicial = p;
borra_tabla();

for (let j = 1; j <= n*m; j++) {
  
  m_interes     = saldo_inicial * i/m;
  abono_capital = cuota - m_interes;
  saldo_final   = saldo_inicial - abono_capital;
  
  rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.insertCell(0).innerHTML = j;
  row.insertCell(1).innerHTML = "$ "+ redondeo(cuota);
  row.insertCell(2).innerHTML = "$ "+ redondeo(m_interes);
  row.insertCell(3).innerHTML = "$ "+ redondeo(abono_capital);
  row.insertCell(4).innerHTML = "$ "+ redondeo(saldo_inicial);
  row.insertCell(5).innerHTML = "$ "+ redondeo(saldo_final);

  saldo_inicial = saldo_final;
}
}


function validar(index){

  var patron =/[0-9\d .]/;
  var prestamo= index.prestamo.value;
  var todoesvalido= true;
  
  for(var i=0; i<prestamo.length; i++){
      var numeros=prestamo.charAt(i);
      for(var j=0; j<patron.length;j++){
          if(numeros== patron.charAt(j)){
              break;
          }
      }
      if(j==patron.length){
          todoesvalido=false;
          break;
      }
  }
  
  if(!todoesvalido){
      alert("Ingresa solo numeros en el campo de interes");
      index.prestamo.focus();
      return false;
  }
  
  var prestamo =parseInt(index.prestamo.value);
  if((prestamo<0) || (prestamo>=3000000)){
      alert("Favor de ingresar un prestamo valido entre 01 y 3,000,000");
      index.prestamo.focus();
      return false;
  }
  
  
  var patron =/[0-9\d .]/;
  var interes = index.interes.value;
  var todoesvalido= true;
  
  for(var i=0; i<interes.length; i++){
      var numeros=interes.charAt(i);
      for(var j=0; j<patron.length;j++){
          if(numeros== patron.charAt(j)){
              break;
          }
      }
      if(j==patron.length){
          todoesvalido=false;
          break;
      }
  }
  
  if(!todoesvalido){
      alert("Ingresa solo números en el campo de interes");
      index.interes.focus();
      return false;
  }
  
  var plazo =parseInt(index.interes.value);
  if((interes<1) || ( interes>=60)){
      alert("Ingresa solo un interes valido de entre 1 y 60");
      index.interes.focus();
      return false;
  }
  

  var patron =/[0-9\d .]/;
  var plazo = index.plazo.value;
  var todoesvalido= true;
  
  for(var i=0; i<plazo.length; i++){
      var numeros=plazo.charAt(i);
      for(var j=0; j<patron.length;j++){
          if(numeros== patron.charAt(j)){
              break;
          }
      }
      if(j==patron.length){
          todoesvalido=false;
          break;
      }
  }
  
  if(!todoesvalido){
      alert("Ingresa solo números en el campo del plazo de años");
      index.plazo.focus();
      return false;
  }
  
  var plazo =parseInt(index.plazo.value);
  if((plazo<0) || ( plazo>=20)){
      alert("ingresa solo un plazo valido de entre 1 y 20");
      index.plazo.focus();
      return false;
  }
  
  }


function borrard(){

  document.getElementById("tabdelete").reset();
borra_tabla();
  
}