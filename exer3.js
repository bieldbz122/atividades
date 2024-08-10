let lado1, lado2, lado3, soma 

alert('diga os lados do triangulo que eu irei classificar ele como equilatero, isoceles e escaleno')
lado1 = parseInt(prompt('diga o valor do primeiro lado'))
lado2 = parseInt(prompt('diga o valor do segundo lado'))
lado3 = parseInt(prompt('diga o valor do terceiro lado'))

soma = lado1 + lado2

if(lado3 > soma)
    alert('erro a soma dos lados 1 e 2 e maior que 3 por favor repita o codigo')
else if(lado1 == lado2 || lado1 == lado3)
 alert(`seu triangulo é equilatero (3 lados iguais) ${lado1} ${lado2} ${lado3}`)
else if (lado1 == lado2 || lado1 == lado3)
alert(`seu triangulo é isoceles (2 lados iguais) ${lado1} ${lado2} ${lado3}`)
else
alert(`seu triangulo é escaleno (todos os lados diferentes) ${lado1} ${lado2} ${lado3}`)