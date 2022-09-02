import React, { useState, useEffect } from "react";
import Items from "./components/items"
import MetodoP from "./components/metodoP"
import CheackoutBtn from "./components/chechoutBtn"
import Carrinho from "../../model/carrinhoModel"
import EmptyCart from "./components/emptyCart";
import Template from "../../components/template";



export function Cart() {
  const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho())

  function quantidadeTotalDeItems() {
    const items = carrinho.pizza.length
    return items
  }
  quantidadeTotalDeItems();

  useEffect(() => {
    Carrinho.setCarrinho(carrinho);
  }, [carrinho]);

  function handleChange(value) {
    return setCarrinho({ ...carrinho, metodoPagamento: value })
  }

  function changeHandler(pizza) {
    const index = carrinho.pizza.indexOf(pizza)
    carrinho.pizza[index] = pizza
    setCarrinho({ ...carrinho, pizza: [...carrinho.pizza] })
  }

  function deleteHandler(pizza) {
    const newPizzas = [...carrinho.pizza]
    newPizzas.splice(newPizzas.indexOf(pizza), 1)
    console.log("deletou")
    setCarrinho({ ...carrinho, pizza: newPizzas })
  }


  return (
    <Template >
      <>
        {quantidadeTotalDeItems() < 1 && (
          <EmptyCart />
        )}
        {carrinho.pizza.map((item) =>
          <Items
            pizza={item}
            onChange={changeHandler}
            onDelete={deleteHandler}
          />)}
        <MetodoP value={carrinho.metodoPagamento} handleChange={handleChange}/>
        <CheackoutBtn carrinho={carrinho}/>        
      </>
    </Template>
  )
}



