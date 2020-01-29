/*Desafio 01-2. 
Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260

Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260 */

const empresa = [
    {
        nome: "Rocketseat",
        endereço: "Rua Guilherme Genbala",
        número: 260
    },
    {
        cor: "roxa",
        foco: "programação"
    }
]

console.log (`A empresa ${empresa[0].nome}, está localizada em ${empresa[0].endereço}, ${empresa[0].número} e o prédio é de cor ${empresa[1].cor}. 
O foco da empresa está em ${empresa[1].foco}.`)

/* DESAFIO 02-2.
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: 'C++', especialidade: 'Desktop' }, 
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop*/
/*
const dev = [
    {nome:"Junior", idade: 35},
    {nome:"Maria", idade: 25},
    {nome:"Pedro", idade: 40}
]
const tec = [
    {nome:"C++", especialidade:"Desktop"},
    {nome:"JavaScript", especialidade:"Web/Mobile"},
    {nome:"Python", especialidade:"Data Science"}
]

console.log (`O desenvolvedor ${dev[0].nome} tem ${dev[0].idade} anos e usa a tecnologia ${tec[0].nome} com a especialidade em ${tec[0].especialidade}.`)*/