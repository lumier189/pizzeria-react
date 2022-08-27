import React,{ useState } from "react";
import Items from "./components/items"
import MetodoP from "./components/metodoP"
import CheackoutBtn from "./components/chechoutBtn"
import simpleItems from "../../data/simpleItem.json"



export function Testeform(){

   
        const stored = sessionStorage.getItem("carrinho");
    // console.log(JSON.parse(stored));

    function getSessionStorageOrDefault(key, defaultValue) {
        const stored = sessionStorage.getItem(key);
        if (!stored) {
          return defaultValue;
        }
        return JSON.parse(stored);
      }
    const carrinho = getSessionStorageOrDefault("carrinho") 
    // console.log(carrinho)

   

    const [formaPagamento, setFormaPagamento] = useState(() => {
        return
    })
    // console.log(formaPagamento)

    function isRadioChecked(value) {
        if (isRadioChecked === value)
            return value
    }

    function handleChange(e) {
        return setFormaPagamento(e.currentTarget.value)
    }


    const [quantidade,setQuantidade] = useState(()=>{
        return 1
    })
    // console.log(quantidade)
    // function aumentarQuantidade(){
    //     setQuantidade(prevQuantidade => prevQuantidade +1)
    // }

    // function diminuirQuantidade(){
    //     setQuantidade(prevQuantidade => prevQuantidade -1)
    // }

    // const calcularPreco = (id,quantidade) =>  id * quantidade 
    
    //console.log(calcularPreco(simpleItems[0].preco,quantidade))

    const supostoItem = simpleItems[0]

    console.log(carrinho[0].quantidade)


    return(


        <div>
            {carrinho.map((item) => <Items
            id={item.id}
            quantidade={item.quatidade}
            sizeId={item.sizeId}
           
            // diminuirQuantidade={diminuirQuantidade}
            // aumentarQuantidade={aumentarQuantidade}
            // calcularPreco={calcularPreco}
            />)}
            
            {/* <Items diminuirQuantidade={diminuirQuantidade}
            aumentarQuantidade={aumentarQuantidade}
            calcularPreco={calcularPreco}
            supostoItem={supostoItem}
            quantidade={quantidade}
            ></Items> */}
            <MetodoP isRadioChecked={isRadioChecked} handleChange={handleChange}></MetodoP>
            <CheackoutBtn></CheackoutBtn>
        </div>
    )
}