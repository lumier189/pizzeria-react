import { Route, Routes as Switch } from "react-router-dom"
import { Menu } from "./pages/menu";
import { PizzaId } from "./pages/menu/PizzaId";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/login";
import { UseForm } from "./pages/form/";
import { Cart } from "./pages/cart";

export default function Routes() {  
  return (             
      <Switch>    
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Menu/>}/>
        <Route path="/:id" element={<PizzaId/>}/> 
        <Route path="/login" element={<Login/>}/>       
        <Route path="/cadastro" element={<UseForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Switch>      
  )
}
