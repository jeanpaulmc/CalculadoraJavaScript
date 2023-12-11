// Esto agrega a la pantalla el valor de la calulcadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta accion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = "";
}

// Esta accion calcula el resultado de la operacion
function calcular(){
    var resultado = eval(document.getElementById('pantalla').value);
    document.getElementById('pantalla').value = resultado;
}
