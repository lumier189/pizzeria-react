import React, { useState } from "react";

export default function MetodoP({ handleChange, value }) {

  return (

    <div className="row ">
      <div className="col">
        <h5>Method of payment</h5>
      </div>
      <div className="form-group col">
        <select className="form-control" required value={value} onChange={(e) => handleChange(e.target.value)}>
          <option value="" disabled>Selecione...</option>
          <option value="debito">Debit card</option>
          <option value="credito">Credit card</option>
          <option value="dinheiro">Cash</option>
        </select>
      </div>
    </div>


  )
}