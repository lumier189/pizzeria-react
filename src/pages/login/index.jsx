import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),

}).required();

export function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });



    const onSubmit = data => console.log(data);
    console.log(errors);

    return (

        <main role="main" className="text-center">

            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                <img className="mb-4" src="https://cdn.discordapp.com/attachments/727458678638379082/1010245096412807199/pizza.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <label >
                    email
                    <input type="text" defaultValue="email" {...register("email", { required: true })} />
                    <span>{errors.email?.message}</span>

                </label>

                <label>
                    <input type="password" {...register("password", { required: true })} />
                    <span>{errors.password?.message}</span>
                </label>
                <input className="btn btn-secondary" type="submit" />

                <a href="/register" className="btn btn-secondary">Register</a>
                <p className="mt-5 mb-3 text-muted">&copy;2022</p>
            </form>
        </main>
    )
}