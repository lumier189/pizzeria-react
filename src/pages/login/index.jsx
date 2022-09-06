import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../components/template";
import User from "../../model/userModel";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then(res => {
        if(res.status === 200){
          return res.json()
        }
        throw handleAlert()
      })    
      .then((data) => {
        return User.setUser(data)
      })
      .then(() => { 
        return fetch(`${process.env.REACT_APP_API_URL}/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${User.getUser().token}`
          }
        })
          .then(res => res.json())
          .then((data) => {
            User.setUser({ ...User.getUser(), ...data })
          })
          
      })
      .then(() => {
        
        return navigate("/")
      })
      .catch((error)=>{
        console.log(error)
      })
  }   

  const [showAlert, setShowAlert] = useState({ sucess: false, error: false, pickSize: false });
  // console.log(showAlert)

  function handleAlert() {
     setShowAlert(showAlert => { return { ...showAlert, error: true } })
      return setTimeout(() => {
        setShowAlert(showAlert => { return { ...showAlert, error: false } })
      }, 4000);
    }

  return (
    <Template>
      
        <div style={{ position: "fixed", top: "0", left: "0", right: "0", margin: "auto", width: "100%", maxWidth: 600, zIndex: 999 }}>

          {showAlert.error && (
            <div className="alert alert-danger text-center fade show" role="alert">
              Error, invalid email or password.
            </div>
          )}
         
        </div>
      <div className="">
        <div className="container ptcd -5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white mt-5">
                <div className="card-body p-5 text-center ">
                  <div className="mb-md-5 mt-md-4">
                    <form className="form-signin" onSubmit={handleSubmit}>
                      <img className="mb-4" src="../img/logo.png" alt="" width="72" height="72" />
                      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                      <div className="form-outline form-white mb-4">
                        <input type="email"
                          required
                          className="form-control form-control-lg"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password"
                          required
                          className="form-control form-control-lg"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                      <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                      </div>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/cadastro" className="text-white-50 fw-bold">Sign Up</a></p>
                    <p className="mt-5 mb-3 text-muted">&copy;2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Template>


  )
}