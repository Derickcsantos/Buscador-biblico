async function PesquisarDados() {
    const livro = document.getElementById('livroNome').value;
    const capitulo = document.getElementById('capituloNumero').value;
    const verso = document.getElementById('versoNumero').value;
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

const btnfecharModal = document.getElementById('fecharModal');

btnfecharModal.addEventListener('click', (e) =>{
    const containerInformacoes = document.getElementById('containerInformacoes');
    containerInformacoes.style.display = "none";
})

console.log("funcionou")