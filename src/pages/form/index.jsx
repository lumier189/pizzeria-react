import React, { useRef } from "react";
import { Form } from "@unform/web"
import Input from './components/input'
import * as yup from "yup";
import { Scope } from "@unform/core";
import Template from "../../components/template";

export function UseForm() {
  const formRef = useRef(null)
  async function handleSubmit(data, { reset }) {
    try {
      const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref("password")]),
        phone: yup.string().required(),
        address: yup.object({
          street: yup.string().required("address street is a required field"),
          number: yup.string().required("address number is a required field"),
          postalCode: yup.string().required("postal code is a required field"),
          city: yup.string().required("address city is a required field"),
          state: yup.string().required("address state is a required field"),
        })
      })
      await schema.validate(data, {
        abortEarly: false,
      })

      // await  axios.post("//localhost:3000/clients",data)

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
                  <Input className="form-control" name="password" placeholder="Digite um senha" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                  <Input className="form-control" name="confirmPassword" placeholder="Repita sua senha" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" for="phone" >Phone</label>
                  <Input name="phone" id="phone" className="form-control" placeholder="Digite seu telefone" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" for="bithDate">Birth date</label>
                  <Input name="birthDate" id="bithDate" className="form-control" placeholder="Digite sua data de nascimento" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" for="maritalStatus">Marital status</label>
                  <Input name="maritalStatus" id="maritalStatus" className="form-control" placeholder="Digite seu estado social" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label className="form-label" for="gender">Gender</label>
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
                      <label className="form-label" for="address.postalCode">Postal code</label>
                      <Input name="postalCode" id="address.postalCode" className="form-control" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label" for="addres.street">Street Address</label>
                      <Input name="street" id="addres.street" className="form-control" />
                    </div>
                    <div className="form-group col-md-2 mb-3">
                      <label className="form-label" for="address.number">Number</label>
                      <Input name="number" id="address.number" className="form-control" />
                    </div>
                    <div className="form-group col-md-5 mb-3">
                      <label className="form-label" for="address.city">City</label>
                      <Input name="city" id="address.city" className="form-control" />
                    </div>
                    <div className="form-group col-md-5 mb-3">
                      <label className="form-label" for="address.state">State</label>
                      <Input name="state" id="address.state" className="form-control" />
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