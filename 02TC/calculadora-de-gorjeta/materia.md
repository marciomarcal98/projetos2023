# 02/03

## Eventos
* onchange => evento de mudança. Chama uma função quando houver alguma alteração do usuário.
* onclick => evento de clique. Chama uma função quando há um clique do usuário

## Escopo
* Limite de existência de uma variável.
* Sempre é definido pelas {}, ou seja, as variáveis só vão existir dentro das chaves.
* Quando colocamos as variáveis fora de qualquer chave, chamamos de escopo global.

## Reatribuição
* Alteração do valor inicial de uma variável.

    let numero = 0
    numero = 2

* No exemplo acima, o número começa valendo 0 e em seguida tem seu valor alterado para 2. Isso é a reatribuição.

## Parâmetros e Argumentos
* Comunicação de informações para a função.
* Sempre que criamos uma função que precisa de valores para "trabalhar", colocamos os parâmetros.
* Os parâmetros são como variáveis, ou seja, servem para guardar informações.

    function soma(numero1, numero2)

* Toda vez que a função for executada, deverá receber os dois valores que são solicitados.

    soma(31, 21)

* No caso acima, o número *31* ficará guardado dentro da variável *numero1*. O *21* ficará guardado dentro do *numero2*.
* Os números que são enviados na chamada da função são chamados de argumentos.