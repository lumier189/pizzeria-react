import React, { useRef } from "react";
import { Form } from "@unform/web"
import Input from './components/input'
import * as yup from "yup";
import { Scope } from "@unform/core";
import Template from "../../components/template";
import { useNavigate } from "react-router-dom"

export function UseForm() {
  const formRef = useRef(null)
  const navigate = useNavigate();
  
  async function handleSubmit(data, { reset }) {
    console.log(data)
    try {
      const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref("password")]),
        phone: yup.string().required(),
        address: yup.object({
          street_address: yup.string().required("address street is a required field"),
          number: yup.string().required("address number is a required field"),
          postal_code: yup.string().required("postal code is a required field"),
          city: yup.string().required("address city is a required field"),
          state_province: yup.string().required("address state is a required field"),
        })
      })
      await schema.validate(data, {
        abortEarly: false,
      })
     fetch(`${process.env.REACT_APP_API_URL}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
          name : data.name,
          phone : data.phone,
          email : data.email,
          birth_date : data.birth_date,
          marital_status : data.marital_status,
          gender : data.gender,
          password : data.password,
           address :{
            street_address: data.address.street_address,
              number : data.address.number,
              city : data.address.city,
              state_province: data.address.state_province,
              postal_code : data.address.postal_code
      }
      }),
        
      })
      .then(res => res.json())
      
      .then(() => {
        
        return navigate("/login")
      })
     
      

      reset()
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
    }
  }
  
  return (
    <Template>
      <h1 className=" mt-3 mb-4">Register</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="" style={{ fontSize: "1.2em" }}>
          <div className="card">
            <div className="card-header">
              Personal data
            </div>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <Input className="form-control" name="name" placeholder="Digite seu nome" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <Input className="form-control" name="email" placeholder="Digite um email" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <Input className="form-control" type="password" name="password" placeholder="Digite uma senha" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                  <Input className="form-control" type="password" name="confirmPassword" placeholder="Repita sua senha" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="phone" >Phone</label>
                  <Input name="phone" id="phone" className="form-control" placeholder="Digite seu telefone" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="bith_date">Birth date</label>
                  <Input name="birth_date" id="bith_date" className="form-control" placeholder="Digite sua data de nascimento" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="maritalStatus">Marital status</label>
                  <Input name="maritalStatus" id="maritalStatus" className="form-control" placeholder="Digite seu estado social" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="gender">Gender</label>
                  <Input name="gender" id="gender" className="form-control" placeholder="Digite seu genero" />
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">
              Address
            </div>
            <div className="card-body">
              <div className="mt-3">
                <Scope path="address">
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label" htmlFor="address.postalCode">Postal code</label>
                      <Input name="postal_code" id="address.postalCode" className="form-control" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label" htmlFor="addres.street">Street Address</label>
                      <Input name="street_address" id="addres.street" className="form-control" />
                    </div>
                    <div className="form-group col-md-2 mb-3">
                      <label className="form-label" htmlFor="address.number">Number</label>
                      <Input name="number" id="address.number" className="form-control" />
                    </div>
                    <div className="form-group col-md-5 mb-3">
                      <label className="form-label" htmlFor="address.city">City</label>
                      <Input name="city" id="address.city" className="form-control" />
                    </div>
                    <div className="form-group col-md-5 mb-3">
                      <label className="form-label" htmlFor="address.state">State</label>
                      <Input name="state_province" id="address.state" className="form-control" />
                    </div>
                  </div>
                </Scope>
              </div>
            </div>
          </div>
          <div className="text-end my-4">
            <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
          </div>
        </div>
      </Form>
    </Template>
  )
}