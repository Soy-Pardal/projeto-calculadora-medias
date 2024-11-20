const form = document.getElementById('form-atividade')
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))
const imageAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">'
const imageReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const atividades = []
const notas = []

let linhas = ''

function adicionaLinha(inputNomeAtividade, inputNotaAtividade){
    
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
        return
    }
    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imageAprovado: imageReprovado}</td>`
    linha += '</tr>'

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
  
    const mediaNotas = calculaMedia()

    document.getElementById('media-final-valor').innerHTML = mediaNotas
    if (mediaNotas >= notaMinima){  }
    document.getElementById('media-final-resultado').innerHTML = mediaNotas >= notaMinima ? spanAprovado : spanReprovado



}

function calculaMedia(){
    let somaNotas = 0

    notas.forEach(nota => {
        somaNotas += nota
        
    })

    return somaNotas / notas.length

}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    adicionaLinha(inputNomeAtividade, inputNotaAtividade)
    atualizaTabela()
    atualizaMediaFinal()
})