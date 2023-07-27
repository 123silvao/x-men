//passo 1
const personagens = document.querySelectorAll('.personagem');


//passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        //passo 3

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //objetivo 2 quando passar o mause por cima do personagem na lista trocar a imagem o nome e a descriçao
       // passo 1 pegar o elemento do perssonagem grande
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        //passo 2 - alterar o elemento do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //passo 4 - alterar a descriçao do perssonagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        
    })
})