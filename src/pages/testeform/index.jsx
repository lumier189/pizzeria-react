import React,{ useState,useEffect} from "react";
import Items from "./components/items"
import MetodoP from "./components/metodoP"
import CheackoutBtn from "./components/chechoutBtn"
import simpleItems from "../../data/simpleItem.json"
import Carrinho from "../../model/carrinhoModel"



export function Testeform(){ 
    const [carrinho, setCarrinho] = useState(Carrinho.getCarrinho())

    console.log(carrinho)

    useEffect(() => {
        Carrinho.setCarrinho(carrinho);
    }, [carrinho]);


    function isRadioChecked(value) {
        if (isRadioChecked === value)
            return value
    }

    function handleChange(e) {
        return setCarrinho({...carrinho, metodoPagamento:e.currentTarget.value})
    }


    function aumentarQuantidade(id){
        const infos = carrinho.pizza.find(pizza => pizza.nome === id);
       
        const index = carrinho.pizza.findIndex(pizza => pizza.nome === id);

        const infoCarrinho = carrinho.pizza
        const newPizza = infoCarrinho[index] = {
            nome: infos.nome,
            preco: infos.preco,
            tamanhoId: infos.tamanhoId,
            quantidade: infos.quantidade + 1
        }
     
        return setCarrinho({...carrinho, pizza: infoCarrinho})
     
    }    
    
    
    function diminuirQuantidade(id){
        const infos = carrinho.pizza.find(pizza => pizza.nome === id);
       
        const index = carrinho.pizza.findIndex(pizza => pizza.nome === id);

        const infoCarrinho = carrinho.pizza
        const newPizza = infoCarrinho[index] = {
            nome: infos.nome,
            preco: infos.preco,
            tamanhoId: infos.tamanhoId,
            quantidade: infos.quantidade - 1
        }
     
        return setCarrinho({...carrinho, pizza: infoCarrinho})
     
    }    



        function removerItem(id){ 
            const infoCarrinho = carrinho.pizza
            const index = carrinho.pizza.findIndex(pizza => pizza.nome === id)
            infoCarrinho.splice(index, 1)
                        
            // console.log(infoCarrinho)
            return setCarrinho({...carrinho, pizza:infoCarrinho})
        }
    // console.log(carrinho.pizza.findIndex(pizza => pizza.nome === "Calabresa"))

    // const calcularPreco = (id,quantidade) =>  id * quantidade 
    
    //console.log(calcularPreco(simpleItems[0].preco,quantidade))

    // console.log(carrinho[0].quantidade)


    return(


        <div>
       

           {carrinho.pizza.map((item) =><Items
            removerItem={removerItem}
            diminuirQuantidade={diminuirQuantidade}
            aumentarQuantidade={aumentarQuantidade}
            id={item.nome}
            quantidade={item.quantidade}    
            sizeId={item.tamanhoId}
            preco={item.preco * item.quantidade} /> )}

            
        
            
        
            <MetodoP isRadioChecked={isRadioChecked} handleChange={handleChange}></MetodoP>
            <CheackoutBtn></CheackoutBtn>
        </div>
    )
}