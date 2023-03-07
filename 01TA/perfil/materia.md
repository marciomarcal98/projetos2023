# 28/02

## Atalhos úteis
ctrl + espaço => para ver os arquivos que existem na pasta
ctrl + S => para salvar



# 03/02

## Live Server
* Simula um servidor para o seu site.
* Atualiza a página do navegador automaticamente sempre que uma mudança é feita no VS Code.

NO LABORATÓRIO:
* Engrenagem (canto esquerdo) => Configurações (Settings) => pesquisar por "ip" => marcar a primeira opção (use local ip as host)

* PARA EXECUTAR: clicar no botão *Go Live* no canto inferior direito.


## Elementos HTML
<hr> => adiciona uma linha horizontal na tela

## Listas

### Lista Ordenada
<ol></ol> => ordered list

<ol>
    <li>Lasanha</li>
    <li>Strogonoff</li>
    <li>Bife</li>
    <li>Carne do Pedro</li>
</ol>

* Existem 5 tipos de ordem possíveis.
* Para mudar a ordem, basta utilizar o atributo *type*

<ol type="1"></ol> => é o padrão da lista ordenada. Utiliza os numeros cardinais.
<ol type="A"></ol> => alfabeto maiúsculo
<ol type="a"></ol> => alfabeto minúsculo
<ol type="I"></ol> => romanos maiúsculos
<ol type="i"></ol> => romanos minúsculos


### Lista NÃO Ordenada
<ul></ul> => unordered list

<ul>
  <li>Lasanha</li>
  <li>Strogonoff</li>
  <li>Bife</li>
  <li>Carne do Pedro</li>
</ul>

* Ordenação utilizando caracteres como figuras.
* Só é possível mudar o tipo da ordenação usando CSS

### Elemento da Lista
<li></li> => list item

* Cada item da lista deve ser colocado dentro de um <li>