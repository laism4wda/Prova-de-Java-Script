const devolucoes = []
    
livro1 = {
    titulo: "Chico Bento",
    autor: "Robeto Carlos",
    atraso: true
}

livro2 = {
    titulo: "Chapeuzinho Amarelo",
    autor: "Chico Buarque",
    atraso: false
}

livro3 = {
    titulo: "Diário de Um Banana",
    autor: "banana",
    atraso: false
}

devolucoes.push(livro1)
devolucoes.push(livro2)
devolucoes.push(livro3)

console.log(devolucoes)

devolucoes.shift()
devolucoes.shift()
devolucoes.shift()