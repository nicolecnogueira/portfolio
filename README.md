# Portfólio

Este projeto é um portfólio web dinâmico para a artista multimédia Julia Martins, desenvolvido para apresentar os seus trabalhos. O site foi construído com foco numa estética moderna e minimalista, com animações e interações personalizadas.

**Link para o site:** [www.juliamartinsa.com](https://www.juliamartinsa.com/)

## Funcionalidades

* **Logo com Animação de Fontes:** A identidade visual do site inclui uma logo que troca de fonte ciclicamente.
* **Navegação Responsiva:** O site apresenta um menu de navegação completo em ecrãs maiores e um menu "hambúrguer" com um painel lateral (drawer) em ecrãs menores.
* **Galeria de Obras Dinâmica:** As obras são carregadas a partir de um ficheiro de dados central (`obras.js`), funcionando como um "mini banco de dados".
* **Filtragem por Categoria e Ferramenta:** Os utilizadores podem navegar pelas obras através de páginas de categoria (ex: Ilustração, Fotografia) ou páginas de ferramentas (ex: Figma, Photoshop), todas geradas dinamicamente.
* **Páginas de Detalhe:** Cada obra possui uma página de detalhe individual com descrição, ano, técnica e outras informações.


## Como Executar o Projeto Localmente

Para clonar e executar este projeto na sua máquina local, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* npm (geralmente instalado com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/nicolecnogueira/portfolio.git
    ```

2.  **Navegue para a pasta do projeto:**
    ```bash
    cd portfolio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```