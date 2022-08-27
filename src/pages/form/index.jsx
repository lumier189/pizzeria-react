// import React, { useState } from "react";

// export  function Form() {
//     const [form, setForm] = useState({
//         name:"",
//         email:"",
//     })


//     function handleName(value){
//         setForm({...form,email:value})
//     }
    
//     const handleForm = (e)=>{
//         const { value,name } = e.target;
//         setForm({...form,[name]: value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

       
//     }

//     const handleAddress=(e) => {
//         setForm({...form,address:{...form.address,[name]: value}})
//     }


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label for="name" class="form-label">name</label>
//                 <input type="text"
//                     name= "name"
//                     id="name"
//                     class="form-control"
//                     placeholder="name"
//                     value={form.name}
//                     onChange={handleForm}
//                 />

//                 <label for="email" class="form-label">email</label>
//                 <input 
//                     type="text"
//                     id="email"
//                     class="form-control"
//                     value={form.email}
//                     onChange={(e)=> setEmail(e.target.value)}
//                      />

//                 <label for="password" class="form-label">password</label>
//                 <input 
//                     type="password"
//                     id="password"
//                     class="form-control" 
//                     value={form.password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     />
//                 <label for="confirmPassword" class="form-label">confirm password</label>
//                 <input 
//                     type="password"
//                     id="confirmPassword"
//                     class="form-control"
//                 />

//                 <label for="phone" class="form-label">phone</label>
//                 <input 
//                     type="number"
//                     id="phone"
//                     class="form-control" />

//                 <label for="bithDate" class="form-label">birth date</label>
//                 <input 
//                     type="text"
//                     id="bithDate"
//                     class="form-control"
//                 />

//                 <label for="marital_status" class="form-label">marital status</label>
//                 <input 
//                     type="text"
//                     id="marital_status"
//                     class="form-control"
//                 />

//                 <label for="gender" class="form-label">gender</label>
//                 <input 
//                     type="text"
//                     id="gender"
//                     class="form-control"
//                 />

//                 <label for="street" class="form-label">street adress</label>
//                 <input 
//                     type="text"
//                     id="group[0].street"
//                     class="form-control"
//                     value={street}
//                     onChange={(e)=> setStreet(e.target.value)}
//                     />

//                 <label for="number" class="form-label">number</label>
//                 <input
//                 name="group[1].number" 
//                     type="text"
//                     id="number"
//                     class="form-control"
//                     value={number}
//                     onChange={(e)=>setNumber(e.target.value)}
//                 />

//                 <label for="postal_code" class="form-label">postal_code</label>
//                 <input 
//                 name="adress.postalCode"
//                     type="text"
//                     id="postalCode"
//                     class="form-control"
//                 />

//                 <label for="city" class="form-label">city</label>
//                 <input
//                 name="adress.city"
//                     type="text"
//                     id="city"
//                     class="form-control"
//                 />

//                 <label for="state" class="form-label">state</label>
//                 <input
//                     name="adress.state"
//                     type="text"
//                     id="state"
//                     class="form-control"
//                 />

//                 <button type="submit" class="btn btn-secondary">submit</button>
//             </form>
//         </div>
//     )
// }