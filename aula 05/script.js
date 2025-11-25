localStorage.setItem('nome1', 'Guilherme');
var nome = localStorage.getItem('nome');

var h1 = document.createElement('h1');

h1.innerHTML = nome;

document.body.appendChild(h1)

var pessoas = JSON.parse(localStorage.getItem("pessoas"));

console.log(pessoas);

localStorage.setItem("pessoas", pessoas);

for (i = 0; i < 3; i++) {
    var h1 = document.createElement('h1');

    h1.innerHTML = pessoas[i]

    document.body.appendChild(h1);
}