    
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const bolsistas = alunos.map(aluno => aluno.bolsista);
const resultado = bolsistas.reduce((primeiroBolsista, segundo) => primeiroBolsista && segundo)
const resposta = (resultado) ? 'Sim' : 'Não';
console.log(resposta)

// Desafio 2: Algum aluno é bolsista?

const bolsistas2 = alunos.map(aluno => aluno.bolsista);
const resultado2 = bolsistas2.reduce((primeiroBolsista, segundo) => primeiroBolsista || segundo)
const resposta2 = (resultado2) ? 'Sim' : 'Não';
console.log(resposta2)