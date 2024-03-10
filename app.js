// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt("qual o maior número possível?"));
let numeroSecreto = escolherNumeroSecreto();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "UK English Male", {rate: 1.2});

}

function escolherNumeroSecreto() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    if (listaNumerosSorteados.length === numeroMaximo) {
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroSorteado)) {
        return escolherNumeroSecreto();
     } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
        
    }
    
    
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

subtitulo = "Escolha um número entre 1 e " + numeroMaximo + "!";

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", subtitulo);

function verificarChute() {
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let textoTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns! Você acertou o números secreto em ${tentativas} ${textoTentativas}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        ;
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
    } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }

    function reiniciarJogo() {
        numeroMaximo = parseInt(prompt("qual o maior número possível?"));
        tentativas = 1;
        numeroSecreto = escolherNumeroSecreto();
        document.querySelector("input").value = "";
        document.getElementById("reiniciar").setAttribute("disabled", true);
        exibirTextoNaTela("h1", "Jogo do número secreto");
        subtitulo = "Escolha um número entre 1 e " + numeroMaximo + "!";
        exibirTextoNaTela("p", subtitulo);

    }
    // console.log(numeroSecreto == chute);
    // console.log(numeroSecreto);