import React, { useState, useEffect } from "react";
import Pizza from "./components/pizza";
import { useParams } from "react-router-dom";
import Carrinho from "../../model/carrinhoModel";
import Template from "../../components/template";

export function PizzaId() {

  const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho());

  useEffect(() => {
    Carrinho.setCarrinho(carrinho);
  }, [carrinho]);


  function addToCart(e) {
    if (tamanho === null) {
      return handleAlert()
    }
    if (carrinho.pizza.find(pizza => pizza.menu_id === id && pizza.size_id === tamanho)) {
      return handleAlert()
    }

    const newPedidos = [...carrinho.pizza, {
      name: pizza.name,
      menu_id: id,
      preco: price,
      img: pizza.img,
      size_id: tamanho,
      quantity: quantidade
    }]
    handleAlert()
    return setCarrinho({ ...carrinho, pizza: newPedidos })
  }

  const [price, setPrice] = useState(null)
  const [tamanho, setTamanho] = useState(null)
  // console.log(tamanho)

  function isRadioChecked(value) {
    if (tamanho !== value)
      return false
  }

  function handleChange(size, price) {
    setPrice(price)
    console.log(price)
    return setTamanho(size)
  }

  const [quantidade, setQuantidade] = useState(() => {
    return 1
  })
  // console.log(quantidade)

  function aumentarQuantidade() {
    setQuantidade(prevQuantidade => prevQuantidade + 1)
  }

  function diminuirQuantidade() {
    if (quantidade < 2) {
      return alert("quantidade minima 1")
    }

    setQuantidade(prevQuantidade => prevQuantidade - 1)
  }

  const params = useParams()
  const { id } = params
  // console.log(Number(id))

  const [pizza, setPizza] = useState({
    "id": 4,
    "name": null,
    "is_active": null,
    "img": null,
    "category": null,
    "created_at": null,
    "updated_at": null,
    "ingredients": [],
    "menu_sizes": []


  });
  console.log(process.env)
  useEffect(() => { 
    
    fetch(`${process.env.REACT_APP_API_URL}/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPizza(data)
      })
  }, [])

  const [showAlert, setShowAlert] = useState({ sucess: false, error: false, pickSize: false });


  function handleAlert() {
    if (carrinho.pizza.find(pizza => pizza.menu_id === id && pizza.size_id === tamanho)) {
      setShowAlert(showAlert => { return { ...showAlert, error: true } })
      return setTimeout(() => {
        setShowAlert(showAlert => { return { ...showAlert, error: false } })
      }, 4000);
    }
    if (tamanho === null) {
      setShowAlert(showAlert => { return { ...showAlert, pickSize: true } })
      return setTimeout(() => {
        setShowAlert(showAlert => { return { ...showAlert, pickSize: false } })
      }, 4000);
    }
    setShowAlert(showAlert => { return { ...showAlert, sucess: true } })
    return setTimeout(() => {
      setShowAlert(showAlert => { return { ...showAlert, sucess: false } })
    }, 3000);
  }
  return (
    <Template>
       <div className="album py-5 bg-light" style={{ border: "0" }}>
      <div className="row d-flex"style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{ position: "fixed", top: "0", left: "0", right: "0", margin: "auto", width: "100%", maxWidth: 600, zIndex: 999 }}>
          {showAlert.sucess && (
            <div className="alert alert-success text-center fade show" role="alert" >
              Item added in your cart!
            </div>
          )}
          {showAlert.error && (
            <div className="alert alert-danger text-center fade show" role="alert">
              Error, item already in your cart! Pick a diferent size or choose another pizza.
            </div>
          )}
          {showAlert.pickSize && (
            <div className="alert alert-danger text-center fade show" role="alert">
              You must choose one size first.
            </div>

          )}
        </div>
        <Pizza
          ingredients={pizza.ingredients}
          img={pizza.img}
          category={pizza.category}
          adicionarCarrinho={addToCart}
          quantidade={quantidade}
          diminuirQuantidade={diminuirQuantidade}
          aumentarQuantidade={aumentarQuantidade}
          handleChange={handleChange}
          isRadioChecked={isRadioChecked}
          key={pizza.id}
          name={pizza.name}
          prices={pizza.menu_sizes.map((menu_size) => ({
            size:menu_size.size_id,
            price: menu_size.price
          }))} />
      </div>
      </div>
    </Template>
  )
}
