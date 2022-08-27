import React from "react";

export default function Template({ children }) {
    return (
        <div>
            <header>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <form className="form-signin d-flex justify-content-end">
                            <input type="email" id="inputEmail" className="form-control-sm" placeholder="Email address" required  />
                            <input type="password" id="inputPassword" className="form-control-sm" placeholder="Password" required />
                            <button className="btn btn-secondary btn-block" type="submit">Sign in</button>
                            <a href="/register" className="btn btn-secondary">Register</a>
                        </form>
                     </div>
                </div>                
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container justify-content-between">
                        <a href="/teste" className="navbar-brand d-flex align-items-center">
                        <img
                        src="https://cdn.discordapp.com/attachments/727458678638379082/1010244518253182986/userlmn_575787676f42bb785cb9d7699f442f64.png"
                        width="20" height="20" alt="imagem"/>
                        <strong>VitorPizzas</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
             </header >
        { children }
            <footer className="text-muted" style={{
                background:"#212529",
                padding:"10px"
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