import React, { useState, useEffect } from "react"
import Pizza from "./components/pizza"
import arrayPizzas from "../../data/items.json"
import {useParams} from "react-router-dom"
import Carrinho from "../../model/carrinhoModel"





export function PizzaId() { 

   
        const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho());
        // console.log( carrinho, carrinho.pedidos, carrinho.pedidos.pizza)
    
        // const todasPizzas = carrinho.pedidos
        // console.log(todasPizzas)
    
        
    
            
        useEffect(() => {
            Carrinho.setCarrinho(carrinho);
        }, [carrinho]);
    
    
        function addToCart(e){ 
            const newPedidos = [...carrinho .pizza,{
                
                    nome: id,
                    preco:"22,50",
                    tamanhoId: tamanho,
                    quantidade: quantidade
                } ]
          
           
            console.log(newPedidos)
            return setCarrinho({...carrinho, pizza: newPedidos})
        } 

  


    const [tamanho, setTamanho] = useState("")
    console.log(tamanho)
    
    function isRadioChecked(value) {
        if (isRadioChecked === value)
            return value
    }

    function handleChange(e) {
        return setTamanho(e.currentTarget.value)
    }

    
    const [quantidade,setQuantidade] = useState(()=>{
        return 1
    })
    console.log(quantidade)
    function aumentarQuantidade(){
        setQuantidade(prevQuantidade => prevQuantidade +1)
    }

    function diminuirQuantidade(){
        setQuantidade(prevQuantidade => prevQuantidade -1)
    }

    const params = useParams()
    const { id } = params
   // console.log(Number(id))

   
    
    const sizeName = [null, "small", "medium", "large"]
    const pizza = arrayPizzas.find(pizza => pizza.id === Number(id))
    //console.log(pizza)



    return (

        <div className="row w-100">
            <Pizza
                adicionarCarrinho={addToCart}
                quantidade={quantidade}
                diminuirQuantidade={diminuirQuantidade}
                aumentarQuantidade={aumentarQuantidade}
                handleChange={handleChange}
                isRadioChecked={isRadioChecked}
                key={pizza.id}
                name={pizza.name}
                prices={pizza.menu_sizes.map((menu_size) => ({
                    size: sizeName[menu_size.size_id],
                    price: menu_size.price
                }))} />
        </div>




    )
}
