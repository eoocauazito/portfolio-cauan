/* =================================
   SELEÇÃO DOS CARTÕES DE SERVIÇOS
================================= */

const cards = document.querySelectorAll(".card-servico");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("selecionado");

    });

});


/* =================================
   FUNÇÕES DE APRENDIZAGEM
================================= */

function mostrarMensagem() {

    alert("Você está conhecendo meu portfólio!");

}


function apresentarServico(servico) {

    alert("Conheça nosso serviço de " + servico + "!");

}


function calcularPreco(preco, quantidade) {

    return preco * quantidade;

}


const nome = "Cauan";

function apresentar() {

    const profissao = "Desenvolvedor Web";

    console.log(nome);
    console.log(profissao);

}


const mostrarPortfolio = () => {

    alert("Bem-vindo ao meu portfólio!");

};


const servicos = [
    "Criação de Sites",
    "Design",
    "Manutenção"
];


for (let i = 0; i < servicos.length; i++) {

    console.log(servicos[i]);

}


servicos.forEach(function(servico) {

    console.log(servico);

});


/* =================================
   FORMULÁRIO DE CONTATO
================================= */

const formularioContato = document.getElementById("formulario-contato");

if (formularioContato) {

    formularioContato.addEventListener("submit", function(event) {

        event.preventDefault();

        const nomeContato = document.getElementById("nome-contato");
        const emailContato = document.getElementById("email-contato");
        const mensagemContato = document.getElementById("mensagem-contato");

        const nome = nomeContato.value.trim();
        const email = emailContato.value.trim();
        const mensagem = mensagemContato.value.trim();

        // VALIDAR CAMPOS

        if (!nome || !email || !mensagem) {

            alert("Preencha todos os campos!");

            return;

        }

        // VALIDAR E-MAIL

        if (!emailContato.checkValidity()) {

            alert("Digite um e-mail válido!");

            return;

        }

        // NÚMERO DO WHATSAPP

        const numeroWhatsApp = "5545999811467";

        // MONTAR MENSAGEM

        const texto = 
            "Olá, Cauan! Meu nome é " + nome +
            ".\nMeu e-mail: " + email +
            ".\n\nMinha mensagem:\n" + mensagem;

        // CRIAR LINK DO WHATSAPP

        const linkWhatsApp =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(texto);

        // ABRIR WHATSAPP

        const novaAba = window.open(linkWhatsApp, "_blank");

        if (novaAba) {

            novaAba.opener = null;

            formularioContato.reset();

        } else {

            alert("Permita a abertura de novas abas para acessar o WhatsApp.");

        }

    });

}