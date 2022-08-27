import { Route, Routes as Switch } from "react-router-dom"
import { Carrinho } from "./pages/carrinho";
import { Menu } from "./pages/menu";
import { PizzaId } from "./pages/menu/PizzaId";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/login";
import { Login2 } from "./pages/login/indux";
// import { Form } from "./pages/form"
import { UseForm } from "./pages/form/indux"
import { Testeform as Carrinho2} from "./pages/testeform"

export default function Routes() {
  
  return (    
            
      <Switch>    
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/carrinho2" element={<Carrinho2/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/menu/:id" element={<PizzaId/>} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/login2" element={<Login2/>}/>
        {/* <Route path="/cadastro" element={<Form/>}/> */}
        <Route path="/cadastro2" element={<UseForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Switch>  
    
  )
}
