import React from "react";


export default function Items({removerItem, aumentarQuantidade, diminuirQuantidade, sizeId, quantidade, id, preco,name,img}) {

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
                <img src={img}
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


              >{name}


              </p>
            </td>
            <td className="align-middle">

              <p className="mb-0" style={{ fontWeight: "500" }}>


                {sizeId}


              </p>

            </td>
            <td className="align-middle">
              <div className="d-flex flex-row">

                <button  onClick={(e) => diminuirQuantidade(id,sizeId)}>-</button>



                <input type="number" onkeypress="return event.charCode >= 48" min="1"  value={quantidade} />



                <button value={[id,sizeId]} onClick={(e) => aumentarQuantidade( e.target.value)}> +</button>
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