# 02/03

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

font-family => muda a família de fontes da página

### Conexão com fontes do Google
1º é preciso selecionar a fonte e as intensidades que serão utilizadas (400, 500, 700, etc...)

2º copiar o link para conectar com a fonte que o próprio Google vai entregar
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

3º copiar a propriedade *font-family* que o Google vai entregar também. Geralmente colocamos essa propriedade dentro de um "*", já que ele seleciona todos os elementos do HTML.
    * {
        font-family: 'Kumbh Sans', sans-serif;
    }
