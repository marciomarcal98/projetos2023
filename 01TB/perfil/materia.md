# 27/02

## Atalhos úteis
ctrl + c => só copia
ctrl + x => copia e apaga (corta)

Para selecionar uma palavra: clique duas vezes sobre ela.

ctrl + espaço => mostrar os arquivos disponíveis na pasta

## Live Server
Simula um servidor para o seu site.
Toda a atualização que for feita no VS Code será atualizada automaticamente na página.

NO LABORATÓRIO: mudar a configuração do IP. (Use local IP as host)

PARA EXECUTAR: clique no botão *Go Live* que está no canto inferior direito.


# 28/02

## <hr>
Utilizado para colocar uma linha horizontal na página.

## Atributos
São informações adicionadas na tag de abertura que mudam alguma característica daquele elemento.

## Listas

### Listas Ordenadas

<ol></ol> => ordered list
    * A ordenação pode ser feita através de números cardinais (1, 2, 3...), alfabeto maiúsculo ou minúsculo (a, b, c, d) e algarimos romanos maiúsculos ou minúsculos (I, II, III...)]

    * Por padrão, sempre começará com os números cardinais.

    * Para alterar o tipo de ordenação é necessário utilizar o atributo *type*.

<ol type="A"></ol>

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

## Atalhos úteis
shift + alt + seta pra baixo => duplicar linha. É PRECISO SELECIONAR O TRECHO A SER COPIADO ANTES DE USAR O ATALHO.

shift + alt + F => organizar o código HTML.

## CSS3 => Cascading Style Sheets

1º => criar um arquivo chamado "style.css"

2º => conectar o CSS ao HTML através de um <link> que deve ser colocado dentro do <head>.
    <link rel="stylesheet" href="style.css">

### Como funciona?
Sempre precisamos selecionar um elemento do HTML, e essa seleção pode ser feita através do nome do elemento, de uma classe, de um id ou até mesmo por um atributo.

### Seletor pelo nome do elemento
body {
    escrevo as propriedades. Toda linha precisa terminar com ";"
}

### Reset do CSS
Remover algumas configurações padrão do CSS.

Geralmente é a primeira coisa a ser feita no CSS.

Precisa ser aplicado a todos os elementos.

É necessário lembrar que todos os elementos do HTML são caixas.

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

box-sizing: border-box; => define que o tamanho da caixa do elemento será sempre o tamanho que eu escolher

### Propriedades do CSS
background-color => mudar a cor do fundo

margin => distância entre os elementos

padding => espaço interno do elemento

width => largura

height => altura

## Extensões úteis (não precisa copiar)
Material Icon Theme => imagem dos ícones

Shades of Purple => tema do VS Code

Omni da Rockeseat => tema do VS Code

Live Server

Autorename Tag => renomeia tags de abertura e de fechamento ao mesmo tempo.