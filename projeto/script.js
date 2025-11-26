const tabela = document.getElementById("tabelaAgenda");
const botaoAdd = document.getElementById("addLinha");

botaoAdd.addEventListener("click", () => {
    const linha = document.createElement("tr");

    tabela.appendChild(linha);
});

document.addEventListener("click", e => {
    if (e.target.classList.contains("btnExcluir")) {
        e.target.closest("tr").remove();
    }
});


