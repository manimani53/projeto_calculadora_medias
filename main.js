const form = document.getElementById('form-atividade');
const imgAprovado = `<img src = "./images/aprovado.png" alt="Emoji festejando" />`
const imgReprovado = `<img src = "./images/reprovado.png" alt="Emoji decepcionado" />`
const atividades = []
const notas = []
const spanAprovado = `<span class ='resultado aprovado'> Aprovado </span>`
const spanReprovado = `<span class = 'resultado reprovado'>Reprovado</span>`
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const nomeDaAtividade = document.getElementById('nome-atividade');
    const notaDaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(nomeDaAtividade.value)){
        alert (`A atividade: ${nomeDaAtividade.value} já foi inserida`)
    } else {
        atividades.push(nomeDaAtividade.value)
    notas.push(parseFloat(notaDaAtividade.value))

    let linha = `<tr>`
    linha += `<td>${nomeDaAtividade.value}</td>`
    linha += `<td>${notaDaAtividade.value}</td>`
    linha += `<td>${notaDaAtividade.value >= notaMinima ? imgAprovado :imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha
    }

    nomeDaAtividade.value = ''
    notaDaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas [i]
    }

    return somaDasNotas / notas.length 
}