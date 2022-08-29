import React from "react";


export default function Items({removerItem, aumentarQuantidade, diminuirQuantidade, sizeId, quantidade, id, preco }) {

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


              >{id}


              </p>
            </td>
            <td className="align-middle">

              <p className="mb-0" style={{ fontWeight: "500" }}>


                {sizeId}


              </p>

            </td>
            <td className="align-middle">
              <div className="d-flex flex-row">
                <button value={id} onClick={(e) => diminuirQuantidade( e.target.value)}>-</button>



                <input type="number" value={quantidade} />



                <button value={id} onClick={(e) => aumentarQuantidade( e.target.value)}> +</button>
              </div>


              <div>

              </div>



            </td>
            <td className="align-middle">
              <p className="mb-0" style={{ fontWeight: "500" }}>


                {preco}
                

              </p>
            </td>
            <td className="align-middle">


              <button className="btn btn-danger" value={id} onClick={(e)=> removerItem( e.target.value)}>Remover</button>


            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}