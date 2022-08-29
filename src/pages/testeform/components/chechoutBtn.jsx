import React,{useState} from "react";
import Carrinho from "../../../model/carrinhoModel"



export default function checkoutBtn() {
   
   




    return (
        <div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                <p className="mb-2">Total </p>
                <p className="mb-2">$26.48</p>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ width: "100%" }}>
                <div className="d-flex justify-content-between">
                    <span>Checkout</span>
                    <span>$26.48</span>
                </div>
            </button>
        </div>
    )
}