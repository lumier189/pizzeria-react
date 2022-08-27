import Routes from "./routes";
import { BrowserRouter } from "react-router-dom"
import Template from "./components/template";


function App() {
  
  return (
    <BrowserRouter>    
    <Template>
     <Routes/>
    </Template>
    </BrowserRouter>    
  )
}


export default App