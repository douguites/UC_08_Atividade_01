
let entrada = require('readline-sync');

//Entrada

let listaPeca = [];
let pesoPeca = 0;

//Processamento
console.log('Bem-vindo ao sistema de registro de peca!',
    'Preencha os dados solicitados.');

do {
    let pesoPeca = entrada.question('Qual o peso da peca a ser cadastrada?');

    if (pesoPeca >= 100) {
        console.log('Peca com o peso adequado para ser cadastrada.');
        listaPeca.push(100);

        let nomePeca = entrada.question('Qual o nome da peça desejado?');

        if (nomePeca.length >= 3) {
           console.log('Nome desejado adequado.');
           console.log('O Total de itens cadastros até o momento é de ' + listaPeca.length 
           +' pecas.');
           
        } else {
            console.log('O nome cadastrado é muito curto, ',
            'registre um nome maior que 3 caracteres.');             
        }
    } else {
        console.log('Peso da peça menor que 100 gramas, por favor,',
         'digite um valor maior que 100 gramas.');
    }
    



} while (listaPeca.length <= 9);
console.log('Total de itens a serem cadastrados atingido.',
            'Inicie o programa novamente para ser cadastrado novos itens.')
console.log('Fim do Programa')