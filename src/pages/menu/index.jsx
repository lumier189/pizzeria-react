import React, { useState, useEffect } from "react";
import Template from "../../components/template";
import MenuPizza from "./components/menuPizza";
// import arrayPizzas from "../../data/items.json";


export function Menu() {
  const [arrayPizzas, setArrayPizzas] = useState([])
  // console.log(arrayPizzas)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/pizzas`)
      .then((response) => response.json())
      .then((data) => {
        setArrayPizzas(data)
      })
  }, [])

  const sizeName = [null, "Small", "Medium", "Large"]
  return (
    <Template hasBanner={true}>
      <div className="album py-5 bg-light" style={{ border: "0" }}>
        <div className="row text-center" >
          {arrayPizzas.map((pizza) => <MenuPizza
            category={pizza.category}
            img={pizza.img}
            id={pizza.id}
            name={pizza.name}
            key={pizza.id}
            prices={pizza.menu_sizes.map((menu_size) => ({
              size: sizeName[menu_size.size_id],
              price: menu_size.price
            }))} />)}
        </div>
      </div>
    </Template>
  )
}

