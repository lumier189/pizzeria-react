import React from "react";


export default function emptyCart() {
  return (
    <div className="card text-center d-flex align-items-center justify-content-center my-4 " style={{ height: "64.8vh" }}>
      <div class="alert alert-danger" role="alert" style={{ width: "45vw" }}>
        Your cart are empty!
      </div>
      <a href="/" className="my-4"> check-out some pizza here</a>
    </div>
  )

}