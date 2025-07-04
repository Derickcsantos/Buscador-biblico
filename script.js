const BtnPesquisa = document.getElementById('BtnPesquisa');
const BackBtn = document.getElementById('BackBtn');
const NextBtn = document.getElementById('NextBtn');

async function PesquisarDados(livro, capitulo, verso) {

    const containerInformacoes = document.getElementById('containerInformacoes');

    let url = await fetch(`https://bible-api.com/${livro}+${capitulo}:${verso}?translation=almeida`);
    let dados = await url.json();


    if (dados.error){
        dados = {
            reference: "Sem referência",
            text: "Sem dados",
            translation_name: "Sem dados"
        };
    }

console.log(dados);
console.log(dados.reference);
console.log(dados.text);
console.log(dados.translation_name);

document.getElementById('referencia').innerText = dados.reference;
document.getElementById('texto').innerText = dados.text;
document.getElementById('versao').innerText = dados.translation_name;
containerInformacoes.style.display = "flex";
}

BackBtn.addEventListener('click', (e) => {
    let livro = document.getElementById('livroNome').value;
    let capitulo = document.getElementById('capituloNumero').value;
    let verso = document.getElementById('versoNumero').value;
    let valor;

    valor = Number(verso);

    verso = valor - 1

    PesquisarDados(livro, capitulo, verso)
});

NextBtn.addEventListener('click', (e) => {
    let livro = document.getElementById('livroNome').value;
    let capitulo = document.getElementById('capituloNumero').value;
    let verso = document.getElementById('versoNumero').value;
    let valor;

    valor = Number(verso);

    verso = valor + 1

    PesquisarDados(livro, capitulo, verso)
});

BtnPesquisa.addEventListener('click', (e) => {
    const livro = document.getElementById('livroNome').value;
    const capitulo = document.getElementById('capituloNumero').value;
    const verso = document.getElementById('versoNumero').value;

    PesquisarDados(livro, capitulo, verso)
});

const btnfecharModal = document.getElementById('fecharModal');

btnfecharModal.addEventListener('click', (e) =>{
    const containerInformacoes = document.getElementById('containerInformacoes');
    containerInformacoes.style.display = "none";
})

console.log("funcionou")
