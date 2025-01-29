// Aqui estão os seus certificados (imagens e descrições)
const certificados = [
    {
        imgSrc: "images/certificado1.jpg",  // Caminho da primeira imagem
        descricao: "Descrição sobre o Certificado 1"
    },
    {
        imgSrc: "images/certificado2.jpg",  // Caminho da segunda imagem
        descricao: "Descrição sobre o Certificado 2"
    },
    {
        imgSrc: "images/certificado3.jpg",  // Caminho da terceira imagem
        descricao: "Descrição sobre o Certificado 3"
    },
    {
        imgSrc: "images/certificado4.jpg",  // Caminho da quarta imagem
        descricao: "Descrição sobre o Certificado 4"
    },
    {
        imgSrc: "images/certificado5.jpg",  // Caminho da quinta imagem
        descricao: "Descrição sobre o Certificado 5"
    }
];

// Índice atual para controlar qual certificado está sendo exibido
let indiceAtual = 0;

// Selecionando os elementos de imagem e descrição
const certificadoImg = document.getElementById("certificado-img");
const certificadoDescricao = document.getElementById("certificado-descricao");

// Função para mudar o certificado
function mudarCertificado(direcao) {
    // Atualizando o índice (se for 1, avança, se for -1, volta)
    indiceAtual += direcao;

    // Se o índice passar do último certificado, volta para o primeiro
    if (indiceAtual >= certificados.length) {
        indiceAtual = 0; // Volta ao primeiro
    } else if (indiceAtual < 0) {
        indiceAtual = certificados.length - 1; // Volta ao último
    }

    // Atualiza a imagem e a descrição
    certificadoImg.src = certificados[indiceAtual].imgSrc;
    certificadoDescricao.textContent = certificados[indiceAtual].descricao;
}
