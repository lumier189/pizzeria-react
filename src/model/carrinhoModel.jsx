export default {
    getCarrinho() {
        return JSON.parse(sessionStorage.getItem('carrinho')) ?? {
            
                metodoPagamento: "deu boa",
                id: 1,
                name:"teste",                
                pizza: [{
                    nome: 'Calabresa',
                    preco: 15.50,
                    quantidade: 2,
                    tamanhoId: 1
             
                }],
            
        }
    },



    

    setCarrinho(carrinho) {
        return sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
}