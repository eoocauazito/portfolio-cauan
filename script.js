const cards = document.querySelectorAll(".card-servico");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("selecionado");
    });
});

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

const formularioContato = document.getElementById("formulario-contato");

const nomeContato = document.getElementById("nome-contato");

const emailContato = document.getElementById("email-contato");

const mensagemContato = document.getElementById("mensagem-contato");


formularioContato.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = nomeContato.value.trim();
    const email = emailContato.value.trim();
    const mensagem = mensagemContato.value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!emailContato.checkValidity()) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert(
        "Mensagem recebida!\n" +
        "Nome: " + nome +
        "\nE-mail: " + email +
        "\nMensagem: " + mensagem
    );

    formularioContato.reset();

});