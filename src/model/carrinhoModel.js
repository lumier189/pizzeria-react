// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCarrinho() {
    return JSON.parse(sessionStorage.getItem('carrinho')) ?? {
      id: 0,
      metodoPagamento: "",
      name: "cliente",
      pizza: [
      ],

    }
  },
  
  setCarrinho(carrinho) {
    return sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
  }
}