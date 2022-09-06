import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PizzaMenu({ name, prices, id, img, category }) {

  const url ="menu/" + id
  
  return (
    <div className="col-md-4" style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div className="card mb-4 box-shadow" style={{
        width: "100%",
        maxWidth: "348px"
      }}>
        <Link to={url}>
        
          <img className="card-img-top"
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
            alt="Thumbnail [100%x225]"
            style={{
              width: "100%",
              maxWidth: "348px",
              display: "block"
            }}
            src={img || "https://via.placeholder.com/200x140.png?text=Pizza"}
            data-holder-rendered="true" />
        </Link>
        <div className="card-body">
          <p id="" className="card-text">{name[0].toUpperCase() + name.substring(1)}</p>
          <table className="table">
            <thead>
              <tr>
                {prices.map(({ size }) => <th className="border-bottom-0" key={size} >{size}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                {prices.map(({ price, size }) => (
                  <td key={size}>
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(price)
                    }</td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{category}</small>
            <div className="btn-group">
            <Link to={url} className="btn btn-sm btn-outline-secondary">Show Info</Link>              
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}