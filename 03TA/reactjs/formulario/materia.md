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

## Seletor de um filho direto
é o sinal de ">"

Vai selecionar apenas o elemento que estiver diratemente dentro do outro:
    main > p

Seleciona somente os filhos.

No SCSS, o "&" representa o elemento em que ele estiver dentro:
    main {
        & > p {
            neste caso, o "&" representa o main
        }
    }

    main {
        p {
            & > strong {
                neste caso, o "&" representa o p
            }

        }
    }

## Propriedades do CSS
padding-block ou margin-block => padding ou margin apenas em cima e em baixo.

padding-inline ou margin-inline => padding ou margin apenas na esquerda e na direita (laterais).