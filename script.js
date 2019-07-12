let palavras = ['carro', 'batata', 'feijão'];


function ver(listaPalavras, palavraBuscada){
    for(let palavra of listaPalavras){
        if(palavra === palavraBuscada){
            return true;
        }
    }
    return false;
}
