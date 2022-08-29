import React, { useState, useEffect } from "react"
import Pizza from "./components/pizza"
import arrayPizzas from "../../data/items.json"
import { useParams } from "react-router-dom"
import Carrinho from "../../model/carrinhoModel"


export function PizzaId() {

  const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho());
  // console.log( carrinho, carrinho.pedidos, carrinho.pedidos.pizza)
  // const todasPizzas = carrinho.pedidos
  // console.log(todasPizzas) 

  useEffect(() => {
    Carrinho.setCarrinho(carrinho);
  }, [carrinho]);

  function addToCart(e) {

    if(carrinho.pizza.find( pizza => pizza.id === id && pizza.tamanhoId === tamanho ))
    return alert("o item já esta no carrinho")

    const newPedidos = [...carrinho.pizza, {
      name: pizza.name,
      id: id,
      preco: preco,
      img: pizza.img,
      tamanhoId: tamanho,
      quantidade: quantidade
    }]
    console.log("item adicionado")
    return setCarrinho({ ...carrinho, pizza: newPedidos })
  }

  const [tamanho, setTamanho] = useState("medium")
  // console.log(tamanho)

  function isRadioChecked(value) {
    if (isRadioChecked === value)
      return value
  }

  function handleChange(e) {
    return setTamanho(e.currentTarget.value)
  }

  const [quantidade, setQuantidade] = useState(() => {
    return 1
  })
  // console.log(quantidade)

  function aumentarQuantidade() {
    
    setQuantidade(prevQuantidade => prevQuantidade + 1)
  }

  function diminuirQuantidade() {
    if(quantidade<2){
      return alert("quantidade minima 1")
    }
   
    setQuantidade(prevQuantidade => prevQuantidade - 1)
  }

  const params = useParams()
  const { id } = params
  // console.log(Number(id))

  const idName = []
  const sizeName = [null, "small", "medium", "large"]
  const pizza = arrayPizzas.find(pizza => pizza.id === Number(id))
  // console.log(pizza)

  function calcularPreco() {
    const nameToSiz = () => {
      if (tamanho === "small") {
        // console.log("PEQUENOOOOOOOOOOOOO!")
        return 1
      } if (tamanho === "medium") {
        // console.log("MEDIOOOOOO")
        return 2
      } if (tamanho === "large") {
        // console.log("GRANDÃO")
        return 3
      }
    }
    const taporra = nameToSiz()
    // console.log(taporra)

    const filtrado = pizza.menu_sizes.filter(function (obj) { return obj.size_id === taporra })

    // console.log(filtrado)

    return filtrado[0].price
  }

  const preco = calcularPreco()

  return (
    <div className="row w-100">
      <Pizza
        img={pizza.img}
        adicionarCarrinho={addToCart}
        quantidade={quantidade}
        diminuirQuantidade={diminuirQuantidade}
        aumentarQuantidade={aumentarQuantidade}
        handleChange={handleChange}
        isRadioChecked={isRadioChecked}
        key={pizza.id}
        name={pizza.name}
        prices={pizza.menu_sizes.map((menu_size) => ({
          size: sizeName[menu_size.size_id],
          price: menu_size.price
        }))} />
    </div>




  )
}
