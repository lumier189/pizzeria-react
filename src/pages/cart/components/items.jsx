import React from "react";


export default function Items({ pizza, onChange, onDelete }) {

  function changeQuantidade(quantidade) {
    if (quantidade < 1) {
      return onDelete(pizza)
    }
    pizza.quantidade = quantidade
    onChange(pizza)
  }

  function deleteHandler(pizza) {
    onDelete(pizza)
  }
  return (
    <div className="table-responsive my-4">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th className="text-start" scope="col">Shopping Bag</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th className="text-end" scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td style={{ maxWidth: "160px", width: "145px" }}>
              <div className="d-flex align-items-center " style={{ maxWidth: "120px" }}>
                <img src={pizza.img || "https://via.placeholder.com/200x140.png?text=Pizza"}
                  className="img-fluid rounded-3" style={{
                    width: "120px"
                  }}
                  alt="Book" />
              </div>
            </td>
            <td className="align-middle" style={{ maxWidth: "160px", width: "145px" }}>
              <p className="mb-0"
                style={{
                  fontWeight: "500"
                }}
                > {pizza.name[0].toUpperCase() + pizza.name.substring(1)}
              

              </p>
            </td>
            <td className="align-middle" style={{ maxWidth: "160px", width: "145px" }}>
              <p className="mb-0" style={{ fontWeight: "500" }}>
                {pizza.tamanhoId}
              </p>
            </td>
            <td className="align-middle" style={{ maxWidth: "160px", width: "160px" }}>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-secondary"onClick={(e) => changeQuantidade(pizza.quantidade - 1)}> - </button>
                <input type="number" className="text-center ps-3" disabled style={{ width: "50px" }} value={pizza.quantidade} />
                <button className="btn btn-outline-secondary"  onClick={(e) => changeQuantidade(pizza.quantidade + 1)}> + </button>
              </div>
            </td>
            <td className="align-middle" style={{ maxWidth: "160px", width: "145px" }}>
              <p className="mb-0" style={{ fontWeight: "500" }}>
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(pizza.preco * pizza.quantidade)}
              </p>
            </td>
            <td className="align-middle text-end" style={{ maxWidth: "160px", width: "145px" }}>
              <button className="btn btn-danger " value="Remover" onClick={(e) => deleteHandler(pizza)}> Remove </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}