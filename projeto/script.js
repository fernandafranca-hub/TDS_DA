const tabela = document.getElementById("tabelaAgenda");

document.addEventListener("click", e => {
    if (e.target.classList.contains("btnExcluir")) {
        e.target.closest("tr").remove();
    }
});


function adicionar() {
    const tr = document.createElement("tr");


    tr.innerHTML = `<tr>
        <td><button class="btnExcluir">❌</button></td>

        <td><input type="time" class="time"></td>

        <td>
            <select>
                <option>Segunda-feira</option>
                <option>Terça-feira</option>
                <option>Quarta-feira</option>
                <option>Quinta-feira</option>
                <option>Sexta-feira</option>
            </select>
        </td>

        <td><input type="text" placeholder="Descreva a tarefa" class="tarefa"></td>
    </tr>`;


    tabela.appendChild(tr);
}