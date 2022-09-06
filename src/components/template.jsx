import React from "react";
import Carrinho from "../model/carrinhoModel";
import User from "../model/userModel";

export default function Template({ children, hasBanner }) {
  const carrinho = Carrinho.getCarrinho()
  const user = User.getUser()
 

  function isAuth() {
    if (!user || !user.token)
      return false      
    return true
  }

  function quantidadeTotalDeItems() {
    const items = carrinho.pizza.length
    if (items > 0) {
      return items
    }
  }

  return (
    <div>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container justify-content-between">
            <a href="/" className="navbar-brand align-items-center">
              <img
                style={{ marginTop: -3 }}
                src="../img/logowhite.png"
                width="20" height="20" alt="imagem" />
              <strong>&nbsp;VitorPizzas</strong>
            </a>
            {isAuth() ? (
              <div className="d-flex">
                <div className="col-auto ">
                  <span onClick={(e)=>User.removeUser()} className="btn btn-dark btn-sm" type="submit">logout</span>
                </div>
                <div className="col-auto mx-3">
                  <span className="btn btn-dark btn-sm">{user.name}</span>
                </div>
                <a className="rounded-circle" href="/cart" style={{ position: "relative" }}>
                  <img className="" src="../img/cart.png" width="25" alt="cart" style={{ filter: "invert(100)", position: "relative" }} />

                  {quantidadeTotalDeItems() > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "20px", height: "1.3rem", position: "absolute", bottom: "10px", right: "0", transform: "translate(40%,63%)" }}>
                      {quantidadeTotalDeItems()}
                    </div>
                  )}
                </a>
              </div>
            ) :
              <div className="d-flex">
                <div className="col-auto ">
                  <a href="/login" className="btn btn-dark btn-sm" type="submit">Sign in</a>
                </div>
                <div className="col-auto mx-3">
                  <a href="/cadastro" className="btn btn-dark btn-sm">Register</a>
                </div>
                <a className="rounded-circle" href="/cart" style={{ position: "relative" }}>
                  <img className="" src="../img/cart.png" width="25" alt="cart" style={{ filter: "invert(100)", position: "relative" }} />

                  {quantidadeTotalDeItems() > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "20px", height: "1.3rem", position: "absolute", bottom: "10px", right: "0", transform: "translate(40%,63%)" }}>
                      {quantidadeTotalDeItems()}
                    </div>
                  )}
                </a>
              </div>
            }
          </div>
        </div>

      </header >

      {hasBanner && (
        <div className="jumbotron jumbotron-fluid" id="jumbotron" style={{
          display: "block", width: "100%",
          height: 250,
          backgroundImage: "url(../img/baner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
        </div>
      )}
      <div>
      </div>
      <div className="container" style={{ minHeight: hasBanner ? "calc(100vh - 366px)" : "calc(100vh - 116px)" }}>
        {children}
      </div>
      <footer className="text-muted" style={{
        background: "#212529",
        padding: "10px"
      }}>
        <div className="container">
          <p className="float-right">
            <a href="/teste">Back to top</a>
          </p>
        </div>
      </footer>
    </div >
  )
}