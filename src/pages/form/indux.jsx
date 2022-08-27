import React, { useRef } from "react";
import { Form } from "@unform/web"
import Input from './components/input'
import * as yup from "yup";
import { Scope } from "@unform/core";

export function UseForm(){
    const formRef = useRef(null)

  async  function handleSubmit(data,{reset}){
      
    try {
        const schema = yup.object({
            name: yup.string().required("o nome é obrigatório"),
            email: yup.string().email().required("o email é obrigatório"),
            password: yup.string().required(),
            confirmPassword: yup.string().required().oneOf([yup.ref("password")]),
            phone: yup.string().required("insira um numero de telefone válido"),
            address: yup.object({
            street: yup.string().required(),
            number: yup.string().required(),
            postalCode:yup.string().required(),
            city:yup.string().required(),
            state:yup.string().required(),
        }) 
          

        }) 
        
        await schema.validate(data,{
            abortEarly: false,
        })
        console.log(data)
        // await  axios.post("//localhost:3000/clients",data)
        reset()
    } catch(err){
        if (err instanceof yup.ValidationError){
            const errorMessages = {};

            err.inner.forEach(error=>{
                errorMessages[error.path] = error.message;
            })

            formRef.current.setErrors(errorMessages);
        }
        }
    }

    return(
        <Form ref={formRef} onSubmit={handleSubmit}> 
            <label htmlFor="name">name</label>
            <Input name="name" />

            <label htmlFor="email">email</label>
            <Input name="email" />

            <label htmlFor="password">password</label>
            <Input name="password" />

            <label htmlFor="confirmPassword">confirm password</label>
            <Input name="confirmPassword" />

            <label for="phone" >phone</label>
            <Input name="phone" id="phone" className="form-control"/>

            <label for="bithDate">birth date</label>
            <Input name="birthDate" id="bithDate" className="form-control"/>

            <label for="maritalStatus">marital status</label>
            <Input name="maritalStatus" id="maritalStatus" className="form-control"/>

            <label for="gender">gender</label>
            <Input name="gender" id="gender" className="form-control"/>

            <Scope path="address">
                <label for="addres.street">street Address</label>
                <Input name="street" id="addres.street" className="form-control"/>

                <label for="address.number">number</label>
                <Input name="number" id="address.number" className="form-control"/>

                <label for="address.postalCode">postal code</label>
                <Input name="postalCode" id="address.postalCode" className="form-control"/>

                <label for="address.city">city</label>
                <Input name="city" id="address.city" className="form-control"/>

                <label for="address.state">state</label>
                <Input name="state" id="address.state" className="form-control"/>
            </Scope>
            <button type="submit">eviar</button>
        </Form>
    )
}