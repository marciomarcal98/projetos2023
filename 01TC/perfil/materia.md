# 28/02

## Live Server
cria um servidor fake do seu site.
Vantagem: todas as alterações que forem feitas no VS Code serão atualizadas automaticamente no navegador.

NO LABORATÓRIO: mudar a configuração do IP (use local ip as host).

PARA EXECUTAR: clique no botão *Go Live* que está no canto inferior direito.

## Atributos
São configurações colocadas dentro da tag de abertura

## Atalhos úteis
shift + alt + seta pra baixo => duplicar um trecho ou uma linha

shift + alt + F => arrumar o código

ctrl + S => pra salvar

## Listas

### Lista Ordenada
<ol></ol> (ordered list)

* Pode ordenar os itens através de números cardinais (1, 2, 3...), de alfabeto maiúsculo ou minúsculo (a, b, c...) e de números romanos maiúsculos ou minúsculos (I, II, III...).

* O padrão é começar pelos números cardinais.

<ol>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Xiaomi</li>
</ol>

1. iPhone
2. Samsung
3. Xiaomi

Para alterar o tipo de ordenação é necessário utilizar o atributo *type*.

<ol type="A">

type="A" => alfabeto maiúsculo
type="a" => alfabeto minúsculo
type="I" => romanos maiúsculos
type="i" => romanos minúsculos

### Lista Não Ordenada
<ul></ul> (unordered list)

* Pode ordenar os itens através de figuras.

* O padrão é começar com uma bolinha.

* Para alterar o tipo de ordenação é necessário utilizar CSS.

### Elemento da lista
Todos os elementos da lista são colocados em <li></li>
