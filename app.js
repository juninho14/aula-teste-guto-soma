function salario(horas, valor) {

   
    resultado = parseFloat(horas) + parseFloat(valor)



    document.querySelector("#resultado").innerHTML = resultado
}

let bt = document.getElementById("botao")
bt.addEventListener("click", function () {
    salario(document.getElementById("horas").value, document.getElementById("valor").value)
})

