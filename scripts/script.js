let comida = null
let bebida = null
let sobremesa = null
let precoComida = null
let precoBebida = null
let precoSobremesa = null
let precoTotal = null

function escolherComida(opcaoComida) {
    const contorno = document.querySelector(".comidas .pedido__borda")
    if (contorno != null) {
        contorno.classList.remove("pedido__borda")
    }

    document.getElementById("icon-1f").classList.add("esconde")
    document.getElementById("icon-1h").classList.add("esconde")
    document.getElementById("icon-1b").classList.add("esconde")
    document.getElementById("icon-1x").classList.add("esconde")

    
    const escolha = document.querySelector(opcaoComida)
    const icon = document.querySelector(opcaoComida + " ion-icon")
    escolha.classList.add("pedido__borda")
    icon.classList.remove("esconde")

    let texto = document.getElementById("comida__nome")
    let preco = document.getElementById("comida__preco")
    texto.innerHTML = document.querySelector(opcaoComida + " p:first-of-type").innerHTML
    preco.innerHTML = document.querySelector(opcaoComida + " p:last-of-type").innerHTML

    precoComida = parseFloat(preco.innerHTML.replace("R$ ", "").replace(",", "."))
    preco__total()

    comida += 1
    mostrarBotaoVerde()
}

function escolherBebida(opcaoBebida) {
    const contorno = document.querySelector(".bebidas .pedido__borda")
    if (contorno != null) {
        contorno.classList.remove("pedido__borda")
    }

    document.getElementById("icon-2c").classList.add("esconde")
    document.getElementById("icon-2g").classList.add("esconde")
    document.getElementById("icon-2m").classList.add("esconde")
    document.getElementById("icon-2x").classList.add("esconde")

    
    const escolha = document.querySelector(opcaoBebida)
    const icon = document.querySelector(opcaoBebida + " ion-icon")
    escolha.classList.add("pedido__borda")
    icon.classList.remove("esconde")

    let texto = document.getElementById("bebida__nome")
    let preco = document.getElementById("bebida__preco")
    texto.innerHTML = document.querySelector(opcaoBebida + " p:first-of-type").innerHTML
    preco.innerHTML = document.querySelector(opcaoBebida + " p:last-of-type").innerHTML

    precoBebida = parseFloat(preco.innerHTML.replace("R$ ", "").replace(",", "."))
    preco__total()

    bebida += 1
    mostrarBotaoVerde()
}

function escolherSobremesa(opcaoSobremesa) {
    const contorno = document.querySelector(".sobremesas .pedido__borda")
    if (contorno != null) {
        contorno.classList.remove("pedido__borda")
    }

    document.getElementById("icon-3p").classList.add("esconde")
    document.getElementById("icon-3s").classList.add("esconde")
    document.getElementById("icon-3k").classList.add("esconde")
    document.getElementById("icon-3x").classList.add("esconde")

    
    const escolha = document.querySelector(opcaoSobremesa)
    const icon = document.querySelector(opcaoSobremesa + " ion-icon")
    escolha.classList.add("pedido__borda")
    icon.classList.remove("esconde")

    let texto = document.getElementById("sobremesa__nome")
    let preco = document.getElementById("sobremesa__preco")
    texto.innerHTML = document.querySelector(opcaoSobremesa + " p:first-of-type").innerHTML
    preco.innerHTML = document.querySelector(opcaoSobremesa + " p:last-of-type").innerHTML

    precoSobremesa = parseFloat(preco.innerHTML.replace("R$ ", "").replace(",", "."))
    preco__total()

    sobremesa += 1
    mostrarBotaoVerde()
}

function preco__total() {
    precoTotal = precoComida + precoBebida + precoSobremesa
    document.getElementById("preco__total").innerHTML = ("R$ " + String(precoTotal.toFixed(2)).replace(".", ","))
}

function mostrarBotaoVerde() {
    if (comida == 1 && bebida == 1 && sobremesa == 1) {
        document.getElementById("botao__cinza").classList.toggle("esconde")
        document.getElementById("botao__verde").classList.toggle("esconde")
    }
}

function mostrarConfirme() {
    const elemento = document.querySelector(".confirme__total")
    elemento.classList.toggle("esconde")
}
