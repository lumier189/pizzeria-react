import React, { useState } from "react";

export function Login2() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ email, password })
    }

    return (

        <main role="main" className="text-center"> 
            <form className="form-signin" onSubmit={handleSubmit}>
                
                <img className="mb-4" src="https://cdn.discordapp.com/attachments/727458678638379082/1010245096412807199/pizza.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password </label>
                <input type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div >

                <button type="submit" className="btn btn-secondary">enviar</button>
                <a href="/register" className="btn btn-secondary">Register</a>
                <p className="mt-5 mb-3 text-muted">&copy;2022</p>
                </div>

            </form>
          
        </main>
    )
}