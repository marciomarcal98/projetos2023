# 27/02

ctrl + espaço => mostrar os arquivos que estão dentro da pasta

extensão: Live Server => cria uma página "falsa" online.
Vantagem: toda alteração que for feita e salva no VS Code fará a página atualizar automaticamente.

NO LABORATÓRIO: é necessário alterar a configuração do IP.

PARA EXECUTAR: clique no botão *Go Live*



# 02/03

## Elementos HTML
<hr> => coloca uma linha horizontal na página

## Listas

### Listas Ordenadas

<ol></ol> => ordered list

* A ordenação pode ser feita através de números cardinais (1, 2, 3...), alfabeto maiúsculo ou minúsculo (a, b, c, d) e algarimos romanos maiúsculos ou minúsculos (I, II, III...)]

* Por padrão, sempre começará com os números cardinais.

* Para alterar o tipo de ordenação é necessário utilizar o atributo *type*.

<ol type="A"></ol> => alfabeto maiúsculo
<ol type="a"></ol> => alfabeto maiúsculo
<ol type="I"></ol> => romanos maiúsculos
<ol type="i"></ol> => romanos minúsculos
<ol type="1"></ol> => numeros cardinais


### Listas Não Ordenadas (desordenadas)

<ul></ul> => unordered list
    * A ordenação é feita através de símbolos, como pontos, quadrados e etc.

    * Por padrão, sempre começará como uma bolinha.

### Elemento da lista
O elemento da lista é representado por um <li></li> (list item).

### Exemplo de lista ordenada
<ol>
    <li>iPhone</li>
    <li>Xiaomi</li>
    <li>Samsung</li>
</ol>

1. iPhone
2. Xiaomi
3. Samsung

### Exemplo de lista NÃO ordenada
<ul>
    <li>iPhone</li>
    <li>Xiaomi</li>
    <li>Samsung</li>
</ul>

° iPhone
° Xiaomi
° Samsung



# 03/03

## CSS => Cascading Style Sheets

### Conexão
1º é necessário criar um arquivo chamado *style.css*

2º conectar o arquivo CSS com o arquivo HTML através de um <link> que deve ser colocado dentro do <head>.
    <link rel="stylesheet" href="style.css">

### Estilização
Sempre será necessário selecionar o elemento que deve ser estilizado. Começaremos utilizando o nome do elemento.
Se queremos estilizar o <body>, vamos escrever body no CSS e colocar chaves:

body {
    aqui dentro das chaves escreveremos todas as propriedades do CSS que forem necessárias.
    é importante lembrar que toda linha precisa terminar com ";".
}

body {
    background-color: #19a1ae;
}

### Propriedades do CSS
background-color => altera a cor do fundo do elemento que for selecionado