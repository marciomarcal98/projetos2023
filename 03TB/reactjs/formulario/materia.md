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


# 24/02

mobile first => a primeira parte a ser desenvolvida é a do celular (responsividade)

responsividade => site que se adapta ao tamanho da tela do dispositivo

O retorno de um componente só pode ter UM elemento pai, ou seja, um elemento em volta de tudo.

Atalho para selecionar múltiplas linhas: segurar o alt e clicar na linha escolhida


# 27/02

## Responsividade

1º => depois de abrir o projeto no navegado, inpecionar a página (F12 ou botão direito e inspecionar)

2º => selecionar a barra de ferramentas do dispositivo (ícone do celular e do tablet)
    Atalho: ctrl + shift + M

3º => selecionar 375px de largura do dispositivo.

## SASS
Biblioteca de CSS.
É possível utilizar condicionais, laços de repetição, funções (mixins).
CSS se torna uma linguagem de programação.

PARA INSTALAR:
    npm install sass -D

    "-D" significa que é uma dependência de desenvolvimento. devDependencies do package.json

Agora, para criar um arquivo CSS, usaremos a extensão *.scss*

O nome do arquivo CSS sempre terá o mesmo nome que o componente.

Depois de criar o arquivo, é necessário importa-lo no componente:

    import './Arquivo.scss'

Grande vantagem do SASS é o aninhamento de seleções.

Posso selecionar um elemento dentro do outro:

    header {

        h1 {

        }
    }

## Color Highlight => mostra a cor em cima do código

## Propriedades CSS
background => shorthand ou seja, pode receber mais de um valor ao mesmo tempo, como uma cor e uma imagem.

                        imagem                      cor
    background: url(./assets/bg-intro-mobile.png) #FF7979;

margin => distância entre os elementos. é um shorthand

              top   right bottom  left
    margin: 5.5rem 1.5rem 4rem 1.5rem;

### Seletor de filho direto ">"
Significa que o elemento que será selecionado deve ser um filho direto do elemento anterior:

    main > p

No caso do SASS, utilizamos o &:
    main {
        margin: 0 1.5rem 4.25rem 1.5rem;

        este & representa o elemento em que estiver dentro.
        & > p {
            background: #5E54A4;
        }
    }