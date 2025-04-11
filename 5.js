function ValorDoIgresso (idade) {
    if (idade > 59) {
        console.log('Tipo de ingresso: [Igresso Sênior]')
    }else if (idade > 17) {
        console.log('Tipo de ingresso: [Ingresso Adulto]')
    }else if (idade > 11) {
        console.log('Tipo de ingresso: [Ingresso Adolescente]')
    }else 
        console.log('Tipo de ingresso: [Ingresso Infantil]')
}
let idade = 45
ValorDoIgresso(idade)