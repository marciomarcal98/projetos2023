# 27/02

ctrl + espaço: ver todos os arquivos que estão dentro da pasta

## Live Server
Extensão: Live Server => cria um servidor fake que atualiza toda vez que você salva uma alteração no VS Code.

NO LABORATÓRIO: mudar a configuração do IP.

Como executar? Clique no botão *Go Live* no canto inferior direito.

## <span></span>
Elemento genérico (não tem uma regra de uso específica). Serve para textos. Geralmente utilizado para textos curtos.

## <hr>
Linha horizontal. Quebra temática.

## Listas
<ol></ol> => lista ordenada (ordered list). Ordenação por números, algarismos romanos, ordem alfabética.

<ul></ul> => lista não ordenada (unordered list). Ordenação por bolinhas, quadrados e etc.

Toda lista precisa ter um <li></li> (list item).

Para mudar o tipo de ordenação da <ol></ol> basta colocar o atributo *type*.

Atributos sempre são colocados dentro da tag de abertura: 
    <ol type="A"> = alfabeto maiúsculo
    <ol type="a"> = alfabeto minúsculo
    <ol type="I"> = romanos maiúsculos
    <ol type="i"> = romanos minúsculos

Para mudar o tipo de ordenação da <ul></ul> é necessário utilizar CSS.

## <strong></strong>
Deixa o texto em negrito e dá importância ao texto.

## Atalho para duplicar
shift + alt + seta pra baixo

## CSS
1º criar um arquivo chamado *style.css*
2º conectar o CSS ao HTML. Dentro do <head> colocar um elemento <link>
    <link rel="stylesheet" href="style.css">
    rel => relacionamento do arquivo, que no caso é uma folha de estilos
    href => localização do arquivo.

Selecionar um elemento: basta digitar o nome do elemento seguido de chaves.
    body {
        aqui dentro é onde escrevemos o estilo
    }

### Propriedades do CSS
background ou background-color => mudar a cor do fundo