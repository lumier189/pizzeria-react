import React, { useState, useEffect } from "react";
import Items from "./components/items";
import MetodoP from "./components/metodoP";
import CheackoutBtn from "./components/chechoutBtn";
import Carrinho from "../../model/carrinhoModel";
import User from "../../model/userModel";
import EmptyCart from "./components/emptyCart";
import Template from "../../components/template";


export function Cart() {
  const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho());
  const user = User.getUser() 

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
    handleAlert.remove()
    return setCarrinho({ ...carrinho, pizza: newPizzas })
  }

  function handleSubmit(){
    if (!user || !user.token){
      throw handleAlert.login()
    }
    if(carrinho.metodoPagamento === "null"){
      throw handleAlert.payment()
    }
    // if(!isAuth()){
    //   return "você precisa efetuar login para terminar a compra"
    // }  
   fetch(`${process.env.REACT_APP_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${User.getUser().token}`
      },
      body: JSON.stringify({ 
        status: "enviado",
        client_id: user.id ,
        address_id: user.address_id ,
        payment_method: carrinho.metodoPagamento,
        items: carrinho.pizza    
    })
    
  })
  .then((response) => response.JSON())
  
  .then((data) => { 
   console.log(data)
  })
}
 

const [showAlert, setShowAlert] = useState({ login: false, payment: false,});
const handleAlert ={
  login: function(){
    setShowAlert(showAlert => { return { ...showAlert, login: true } })
    return setTimeout(() => {
      setShowAlert(showAlert => { return { ...showAlert, login: false } })
    }, 4000);
  },
  payment: function(){
    setShowAlert(showAlert => { return { ...showAlert, payment: true } })
    return setTimeout(() => {
      setShowAlert(showAlert => { return { ...showAlert, payment: false } })
    }, 4000);
  },
  remove: function(){   
      setShowAlert(showAlert => { return { ...showAlert, remove: true } })
      return setTimeout(() => {
        setShowAlert(showAlert => { return { ...showAlert, remove: false } })
      }, 4000);
  }
}


  return (
    <Template >
      <>
      <div>
      <div style={{ position: "fixed", top: "0", left: "0", right: "0", margin: "auto", width: "100%", maxWidth: 600, zIndex: 999 }}>
          {showAlert.payment && (
            <div className="alert alert-danger text-center fade show" role="alert" >
              escolha um metodo de pagamento
            </div>
          )}
          {showAlert.login && (
            <div className="alert alert-danger text-center fade show" role="alert">
              voce precisa estar logado para continuar
            </div>
          )}         
           {showAlert.remove && (
            <div className="alert alert-danger text-center fade show" role="alert">
              item removido do carrinho
            </div>
          )}         
        </div>

      </div>
        {quantidadeTotalDeItems() < 1 && (
          <EmptyCart />
        )}
        {carrinho.pizza.map((item) =>
          <Items
            handleAlert={handleAlert}
            pizza={item}
            onChange={changeHandler}
            onDelete={deleteHandler}
          />)}
        <MetodoP value={carrinho.metodoPagamento} handleChange={handleChange}/>
        <CheackoutBtn carrinho={carrinho} handleSubmit={handleSubmit}/>        
      </>
    </Template>
  )
}