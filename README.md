# Sorteador de Amigo Secreto

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)

Um projeto simples e interativo para realizar sorteios de amigo secreto. Esta aplicação web permite que os usuários adicionem uma lista de participantes e, em seguida, sorteiem um nome aleatoriamente dentre os listados.

## 🎯 Visão Geral

O objetivo deste projeto é fornecer uma ferramenta fácil e rápida para sorteios. A interface é limpa e intuitiva, focando na experiência do usuário para adicionar nomes e visualizar o resultado do sorteio de forma clara e direta.

---

## ✨ Funcionalidades Principais

O projeto foi desenvolvido com as seguintes funcionalidades em mente:

### 1. Adicionar Participantes
-   **Entrada de Nomes:** Um campo de texto permite que o usuário digite o nome de cada participante do amigo secreto.
-   **Lista Dinâmica:** Ao clicar no botão **"Adicionar"**, o nome é instantaneamente exibido em uma lista na tela, permitindo que o usuário veja todos os participantes já incluídos.

### 2. Validação de Dados
-   **Nomes Vazios:** O sistema impede a adição de um campo vazio à lista, exibindo um alerta para que o usuário digite um nome válido.
-   **Nomes Duplicados:** A aplicação verifica se um nome já foi adicionado anteriormente. Caso o usuário tente inserir um nome repetido, um alerta é exibido, garantindo que cada participante seja único na lista.

### 3. Sorteio Aleatório
-   **Sorteio de um Amigo:** Ao clicar no botão **"Sortear amigo"**, o algoritmo em JavaScript seleciona aleatoriamente um nome da lista de participantes cadastrados.
-   **Exibição do Resultado:** O nome do amigo sorteado é destacado e exibido de forma proeminente na tela, logo abaixo da lista de participantes.

---

## 🚀 Como Utilizar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://URL-DO-SEU-REPOSITORIO.git](https://URL-DO-SEU-REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` em seu navegador de preferência para começar a usar a aplicação.

**Passo a passo na aplicação:**
1.  Digite o nome de um amigo no campo de texto.
2.  Clique no botão **"Adicionar"**.
3.  Repita o processo para todos os participantes.
4.  Quando todos os nomes estiverem na lista, clique no botão **"Sortear amigo"**.
5.  O resultado será exibido na tela!

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias web:

-   **HTML5:** Para a estrutura e semântica do conteúdo.
-   **CSS3:** Para a estilização, layout e design da interface, utilizando Flexbox para um layout responsivo.
-   **JavaScript:** Para toda a lógica de programação, incluindo a adição de nomes, validações e a função de sorteio.
