// Criamos um array para armazenar a lista de amigos.
// Isso será útil mais tarde, por exemplo, para a função de sortear.
let amigos = [];

function adicionarAmigo() {
    // 1. Seleciona o campo de input e a lista no HTML
    const campoAmigo = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');

    // 2. Pega o nome digitado e remove espaços em branco extras
    const nomeAmigo = campoAmigo.value.trim();

    // 3. Verifica se o campo não está vazio
    if (nomeAmigo === '') {
        alert("Por favor, digite um nome antes de adicionar!");
        return; // Para a execução da função se o campo estiver vazio
    }

    // 4. Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        campoAmigo.value = ''; // Limpa o campo
        campoAmigo.focus(); // Foca no campo novamente
        return;
    }

    // 5. Adiciona o nome ao array 'amigos'
    amigos.push(nomeAmigo);

    // 6. Cria um novo elemento <li>
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo; // Define o texto do <li>

    // 7. Adiciona o novo <li> à lista <ul> no HTML
    lista.appendChild(novoItem);

    // 8. Limpa o campo de input para o próximo nome
    campoAmigo.value = '';

    // 9. Coloca o foco (cursor) de volta no campo de input
    campoAmigo.focus();

    console.log(amigos); // Opcional: mostra a lista atualizada no console
}

function sortearAmigo() {
    const tamanho = amigos.length;
    numeroSorteado = Math.floor(Math.random() * tamanho);
    const amigoSorteado = amigos[numeroSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;




}



