const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome , idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n , i)

const{endereco:{logradouro,numero}}=pessoa
console.log(logradouro,numero)

//const {a:{b}} = pessoa
//console.log(b)