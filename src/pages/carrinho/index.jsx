import React from "react"
import Items from "./components/items"
import Form from "./components/form"
import FormCagado from "./components/formCagado";
import Contador from "./components/contador"


export function Carrinho() {

   
    
    return (
        <section className="h-100 h-custom">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col"> 
                    {/* {carrinho.map()}                        */}
                        <Items />
                        <FormCagado />
                    </div>
                </div>
            </div>
        </section >
    )
}