let cem, cin, dez,saque

saque = parseFloat(prompt("Digite o valor do saque"))

if(saque % 10 !== 0){
    window.alert("valor não aceito, digite outro valor para sacar")
}else{
    valor = saque

    cem = Math.floor(valor / 100)
    valor %= 100

    cin = Math.floor(valor / 50)
    valor %= 50

    dez = Math.floor(valor / 10)

    window.alert(`Notas de 100 ; ${cem}\n Notas de 50 ${cin} Notas de 10 ${dez}`)
}