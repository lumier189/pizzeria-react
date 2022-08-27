import React, { useState } from "react";

export default function MetodoP(props) {

    return (
        <div>

            <input name="formaPagamento" type="radio" value="credit" checked={props.isRadioChecked("credit")} onChange={props.handleChange} /> credito <br/>


            <input name="formaPagamento" type="radio" value="debit" checked={props.isRadioChecked("debit")} onChange={props.handleChange} /> debito <br/>


            <input name="formaPagamento" type="radio" value="cash" checked={props.isRadioChecked("cash")} onChange={props.handleChange} /> dinheiro <br/> 
        </div>

    )
}