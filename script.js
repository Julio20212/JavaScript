function mostrarBoasVindas() {
    const nome = document.getElementById('nome').value;
    alert ("Seja bem-vindo: " + nome);
}

function calcular(){

    const valor1 = document.getElementById('vl1').value;
    const valor2 = document.getElementById('vl2').value;

    let soma = parseInt(valor1) + parseInt(valor2);
    let sub = parseInt(valor1) - parseInt(valor2); 
    let multi = parseInt(valor1) * parseInt(valor2); 
    let div = parseInt(valor1) / parseInt(valor2); 


    alert("A soma é: "+ soma);
    alert("A subtração é: "+ sub);
    alert("A multiplicação é: "+ multi);
    alert("A divisão é: "+ div);

}

function converterTemperatura() {
    const celsius = document.getElementById('celsius').value;
    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    
    alert("A temperatura em Fahrenheit é: " + fahrenheit);
}
