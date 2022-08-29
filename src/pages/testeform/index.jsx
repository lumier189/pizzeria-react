import React, { useState, useEffect } from "react";
import Items from "./components/items"
import MetodoP from "./components/metodoP"
import CheackoutBtn from "./components/chechoutBtn"
import simpleItems from "../../data/simpleItem.json"
import Carrinho from "../../model/carrinhoModel"



export function Testeform() {
  const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho())

  // console.log(carrinho)

  useEffect(() => {
    Carrinho.setCarrinho(carrinho);
  }, [carrinho]);


  function isRadioChecked(value) {
    if (isRadioChecked === value)
      return value
  }

  function handleChange(e) {
    return setCarrinho({ ...carrinho, metodoPagamento: e.currentTarget.value })
  }


  function aumentarQuantidade(value) {
    const meucu = value.split(",")

    const infos = carrinho.pizza.find(pizza => pizza.id === meucu[0] && pizza.tamanhoId === meucu[1]);
    const index = carrinho.pizza.findIndex(pizza => pizza.id === meucu[0] && pizza.tamanhoId === meucu[1]);


    const infoCarrinho = carrinho.pizza
    const newPizza = infoCarrinho[index] = {
      name: infos.name,
      id: infos.id,
      preco: infos.preco,
      img: infos.img,
      tamanhoId: infos.tamanhoId,
      quantidade: infos.quantidade + 1
    }

    return setCarrinho({ ...carrinho, pizza: infoCarrinho })

  }


  function diminuirQuantidade(id,sizeId) {
  
    // const meucu = value.split(",")
    // console.log(meucu)


    const infos = carrinho.pizza.find(pizza => pizza.id === id && pizza.tamanhoId === sizeId)
    const index = carrinho.pizza.findIndex(pizza => pizza.id === id && pizza.tamanhoId === sizeId)
   
    const infoCarrinho = carrinho.pizza
    const newPizza = infoCarrinho[index] = {
      id: infos.id,
      name: infos.name,
      preco: infos.preco,
      img: infos.img,
      tamanhoId: infos.tamanhoId,
      quantidade: infos.quantidade - 1
    }

    if(newPizza.quantidade < 1){
      removerItem(index)    
    }
    return setCarrinho({ ...carrinho, pizza: infoCarrinho })
  }



  function removerItem(index) {
    const infoCarrinho = carrinho.pizza


    // const index = carrinho.pizza.findIndex(pizza => pizza.id === id)

    console.log("aqui")
    infoCarrinho.splice(index, 1)

    console.log(infoCarrinho)
    return setCarrinho({ ...carrinho, pizza: infoCarrinho })
  }
  // console.log(carrinho.pizza.findIndex(pizza => pizza.nome === "Calabresa"))

  // const calcularPreco = (id,quantidade) =>  id * quantidade 

  //console.log(calcularPreco(simpleItems[0].preco,quantidade))

  // console.log(carrinho[0].quantidade)


  return (


    <div>


      {carrinho.pizza.map((item) => <Items
        removerItem={removerItem}
        diminuirQuantidade={diminuirQuantidade}
        aumentarQuantidade={aumentarQuantidade}
        id={item.id}
        name={item.name}
        quantidade={item.quantidade}
        sizeId={item.tamanhoId}
        img={item.img}
        preco={item.preco * item.quantidade} />)}





      <MetodoP isRadioChecked={isRadioChecked} handleChange={handleChange}></MetodoP>
      <CheackoutBtn></CheackoutBtn>
    </div>
  )
}