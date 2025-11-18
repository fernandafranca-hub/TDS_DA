function add() {
    //carregando o elemento ul que tem o ID "Itens"
    var lista = document.getElementById('Itens');

    //carregando o elemento input que tem o ID "campo"
    var campo = document.getElementById('campo');

    //criando um elemento li
    var li = document.createElement('li');

    //insere um valor do que foi digitado dentro do input usando a propriedade
    //"value" para o nosso elemento li
    li.innerHTML = campo.value;

    //botão apagar
    var btn = document.createElement('button');
    btn.innerHTML= "Apagar"
    btn.addEventListener('click', apagarElemento());


    //aplicando o elemento li dentro do elemento ul
    lista.appendChild(li);

    //limpamos a propriedade value do nosso elemento campo
    campo.value = "";
}
function apagarElemento(elemento);
document.removeChild(elemento);
