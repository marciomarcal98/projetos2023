# 28/02

Os 10 mandamentos do React:

1º - npm create vite@latest 

2º - definir o nome do projeto

3º - escolher o react

4º - escolher o javascript

5º - arrastar a pasta do projeto para o meio do VS Code

6º - Excluir a pasta public, a pasta assets (dentro de src), excluir o App.css e o index.css

7º - reescrever o arquivo App.jsx

8º - apagar o import do index.css de dentro do main.jsx (geralmente a linha 4)

9º - no terminal, npm install

10º - para executar o projeto: npm run dev

## Atalhos úteis
ctrl + " => abrir o terminal

shift + alt + seta pra baixo => duplicar a linha ou um trecho do código

alt + botão esquerdo do mouse => selecionar múltiplos lugares

## Componentes
São funções do Javascript que retornam HTML.

O retorno de um componente só pode ter um elemento pai, ou seja, não é possível ter dois elementos no mesmo nível.

Para burlar esse sistema, podemos utilizar o elemento vazio: <></> (fragmento)



# 02/03

## Instalar bibliotecas como depedência de desenvolvimento
* É necessário utilizar o "-D" para que as bibliotecas sejam instaladas como depência de desenvolvimento.

## SASS
* Sass é uma biblioteca do CSS para facilitar a vida do desenvolvedor.
* Deve sempre ser instalada como dependência de desenvolvimento.

    npm install sass -D

* Para criar um arquivo de SASS utiliza-se a extensão *.scss*.

    App.scss

* No caso do react, é necessário importar esse arquivo de SASS dentro do arquivo *.jsx*
* Colocamos o caminho do arquivo entre aspas (simples ou duplas)

    import './App.scss'

## Responsividade
* Responsividade diz respeito a criação de sites que se adaptam ao tamanho do dispositivo em que estão sendo utilizados.
* O padrão mais comum de responsividade é o *mobile first*, que significa que começaremos a desenvolver primeiro o design para celular e depois partiremos para os dispositivos maiores.
* Para facilitar a vida do desenvolvedor, o navegador proporciona uma ferramenta que simula o tamanho do dispositivo. Para acessá-la, faça o seguinte:

    Inspecionar (F12) => Ferramenta do dispositivo (ctrl + shift + M ou o ícone que tem um celular e um tablet)

* O tamanho utilizado geralmente para o celular é o tamanho médio de 375px.