# 06/03

## Fontes do Google
1º - escolher a fonte e as intensidades necessárias.

2º - conectar o projeto com a font (utilizando HTML ou CSS)

3º - aplicar a fonte com o font-family.

# 07/03

## Cores
* Nome da cor em inglês
* RGB
* Hexadecimal RGB

### Nome da Cor
```css
p {
    color: green;
    color: red;
}
```

### RGB
* 3 valores de 0 até 255, separados por vírgula
* R => red (primeiro)
* G => green (segundo)
* B => blue (terceiro)

```css
p {
    color: rgb(255, 0, 0);
    color: rgb(0, 255, 0);
    color: rgb(0, 0, 255);
    color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    color: rgb(130, 80, 157)
}
```

### Hexadecimal RGB
* 6 valores de 0 até F (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)
* Sempre acompanhado de uma cerquilha
* #RRGGBB
```css
p {
    color: #FF0000;
    color: #F00;
    color: #0000FF;
    color: #00F;
    color: #00FF00;
    color: #0F0;
    color: #FFFFFF;
    color: #FFF;
    color: #000;
}
```

* Sempre que os dois valores que representam cada uma das cores forem repetidos, podemos abreviar de 6 para 3.

## Selecionar elementos diferentes na mesma linha
* Basta utilizar uma vírgula.
```css
p, span {
    
}
```

## Seletor de descendentes
```css
ul span {
    font-size: 10px;
}
```
* Nesse exemplo, estamos selecionando dos os spans que estiverem dentro da ul, ou seja, que são descendentes da ul.


## Propriedades CSS
color => altera a cor do texto

font-size => altera o tamanho do texto