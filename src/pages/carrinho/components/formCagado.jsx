import React from "react"
import { useForm } from "react-hook-form";


export default function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm({ radio: "" });



  const onSubmit = data => console.log(data);
  console.log(errors);

  return (

    <main role="main" className="text-center">


      <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
        <div className="card-body p-4">
          <div className="row">
            <div className="">
              <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    
                    <input {...register("radio")} type="radio" value="Credit Card" />
                    
                  </div>
                  <div className="rounded border p-3 col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                      Card
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    
                    <input {...register("radio")} type="radio" value="Debit Card" />

                  </div>
                  <div className="rounded border p-3 col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="d-flex align-items-center pe-2">

                    <input {...register("radio")} type="radio" value="Cash" />

                  </div>
                  <div className="rounded border p-3 col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>Cash
                    </p>
                  </div>
                </div>
               
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Total </p>
                    <p className="mb-2">$26.48</p>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>$26.48</span>
                    </div>
                  </button>              

              </form>

            </div>
             
          </div>
        </div>
      </div>
      
    </main>
  )
}
