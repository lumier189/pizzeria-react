import React from "react";


export default function Items({aumentarQuantidade,diminuirQuantidade,calcularPreco,supostoItem,sizeId,quantidade,id}) {

// console.log(sizeId,id)

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="h5">Shopping Bag</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src="https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640"
                  className="img-fluid rounded-3" style={{
                    width: "120px"
                  }}
                  alt="Book" />
              </div>
            </td>
            <td className="align-middle">
              <p className="mb-0" style={{
                fontWeight: "500"
              }}
              >{id}</p>
            </td>
            <td className="align-middle">
              
              <p className="mb-0" style={{ fontWeight: "500" }}>{sizeId}</p>

            </td>
            <td className="align-middle">
              <div className="d-flex flex-row">
                <button onClick={diminuirQuantidade}>-</button>

                <input type="number" value={quantidade}/>
                
                <button onClick={aumentarQuantidade}>+</button>
              </div>
            </td>
            <td className="align-middle">
              <p className="mb-0" style={{ fontWeight: "500" }}>

               
              </p>
            </td>
            <td className="align-middle">
              <a href="/delete"><i className="bi-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}