//1.Criando um objeto, que é um tipo de dado
let pessoa = {
    nome: 'ana',
    CPF:'99966655512',
    Genero: 'F',
    Idade: '27',
    altura: '1.69',
    dataDeNascimento: '19/02/1998',
    endereço:'rua 5, conjunto pq mondubim',
    adicionar: function(){
        console.log('Adicionando...');

    },
 remover:function(){
    console.log('Removendo...');
 },

    // telefone: '999952333',
    // emial: 'ana@ig.com.br',
    tamanho: ['GG', 'G'],
    Estrangeiro: false,
    contato: {
        
    telefone: '999952333',
    email: 'ana@ig.com.br',
    }

}

//1- imprimindo no console

console.log(pessoa);

//2- acessando os dados do objeto
console.log(pessoa.dataDeNascimento);
console.log(pessoa.endereço);
console.log(pessoa.contato.emial);