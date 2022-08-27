import React, { useState } from "react";

export default function PizzaMenu({ name, prices, id }) {

    const url = "menu/" + id


    return (

        <div className="col-md-4" style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <div className="card mb-4 box-shadow" style={{
                width: "100%",
                maxWidth: "348px"
            }}>
                <a href={url} >
                    <img className="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]"
                        style={{
                            height: "225px",
                            width: "100%",
                            maxWidth: "348px",
                            display: "block"
                        }}
                        src="https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg"
                        data-holder-rendered="true" />

                </a>
                <div className="card-body">
                    <p id="" className="card-text">{name}</p>
                    <dl>{prices.map(({ price, size }) =>
                    <>  <dt>{size}</dt>
                        <dd>{price}</dd>
                    </>)}
                </dl>
               
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Category</small>
                    <div className="btn-group">

                        <button type="button" className="btn btn-sm btn-outline-secondary"  >add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}