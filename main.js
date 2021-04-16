function Calcular() {
    var numero1 = document.getElementById("valor1").value;
    var numero2 = document.getElementById("valor2").value;
    console.log(document.getElementById("Operacao").value);
    console.log(numero1 + " + " + numero2 + " = " + (parseInt(numero1) + parseInt(numero2)));
    document.getElementById("resultado").innerHtml = numero2;
}