import React, { useState } from "react";


export default function checkoutBtn({ carrinho }) {
  const price = carrinho.pizza.map((pizza) => pizza.preco * pizza.quantidade)
  const totalPrice = price.reduce((previousValue, currentValue) => previousValue + currentValue, 0 );

  return (
    <div className="my-5">
      <hr className="my-4" />
      <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
        <p className="mb-2">Total</p>
        <p className="mb-2">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPrice)}</p>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ width: "100%" }}>
          <div className="d-flex justify-content-between">
            <span>Checkout</span>
            <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPrice)}</span>
          </div>
        </button>
      </div>
    </div>
  )
}