import React from "react";

export default function Pizza({ name, prices, id, isRadioChecked, handleChange, aumentarQuantidade, diminuirQuantidade, quantidade, adicionarCarrinho, img, category, ingredients }) {

  const url = id
  const sizeName = [null, "Small", "Medium", "Large"]

  return (
    <>
     
        <div className="card mb-4 box-shadow" style={{
          width: "100%",
          maxWidth: "348px",
          maxHeight: "740.5px"
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
              src={img || "https://via.placeholder.com/200x140.png?text=Pizza"}
              data-holder-rendered="true" />
          </a>
          <div className="card-body" >
            <div className="d-flex justify-content-between alignt-items-center" style={{ position: "relative" }}>
              <div>
                <h3 className="card-text">
                  {name}
                </h3>
              </div>
              <div style={{ position: "absolute", right: "0", top: "8px" }}>
                <small className="text-muted">{category}</small>
              </div>
            </div>
            <span>
              Ingredients :<br />
              <div>{ingredients.map(({ name, id }) => <span key={id}>{name}/</span>)}</div>
            </span>
            <hr />
            <div className="col my-4">
              <table className="table text-center my-4">
                <thead>
                  <tr>
                    {prices.map(({ size }) => <th className="border-bottom-0" key={size}>{sizeName[size]}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {prices.map(({ price, size }) => (
                      <td key={size} className="border-top-0 border-bottom-0 border-end-0">
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(price)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {prices.map(({ size, price }) => (
                      <td key={size} className="border-top-0 border-bottom-0 border-end-0">
                        <button style={{ minWidth: 35 }} type="radio" checked={isRadioChecked(size)} className="btn btn-outline-secondary" onClick={(e) => handleChange(size, price)} value={size} >Choose</button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div className="container" style={{ position: "relative" }}>
                <div className="my-2 text-center">
                  <button style={{ width: 28 }} type="button" className="btn btn-outline-dark btn-sm" onClick={diminuirQuantidade}> -</button>
                  <input type="number" className="text-center ps-3 border-0 " disabled style={{maxWidth:80, outline: "0" }} value={quantidade} />
                  <button style={{ width: 28 }} type="button" className="btn btn-outline-dark btn-sm" onClick={aumentarQuantidade}>+</button>
                </div>
                <div className="text-center">
                  <strong> Quantity</strong>
                </div>
                <div className="text-end my-4">
                  <button type="button" className="btn btn-sm btn-secondary " onClick={() => adicionarCarrinho()}  >Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}