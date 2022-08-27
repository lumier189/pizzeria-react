export default function getCarrinho() {

    return JSON.parse(sessionStorage.getItem('carrinho')) ?? {
        metodo_pagamento: null,
        pedidos: [{
            id: 1,
            quantidade: 1,
            pizza: {
                nome: 'Calabresas',
                tamanho: {
                    tamanho_id: 1,
                    preco: 15.50
                },
            },
        }],
        total: 0
    }
}

setCarrinho(carrinho) {
    return sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
}
