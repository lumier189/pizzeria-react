import React from "react";
import Contador from "./contador"

export default function Items() {

 
  
 

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
              >Nome</p>
            </td>
            <td className="align-middle">
              <p className="mb-0" style={{ fontWeight: "500" }}>Size</p>
            </td>
            <td className="align-middle">
              <div className="d-flex flex-row">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="bi-file-minus"></i>
                </button>
                <input  value="" type="number" 
                   style={{ width: "50px" }} />
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="bi-file-plus"></i>
                </button>
              </div>
            </td>
            <td className="align-middle">
              <p className="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
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