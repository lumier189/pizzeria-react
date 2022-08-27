import React from "react";
import MenuPizza from "./components/menuPizza";

import arrayPizzas from "../../data/items.json"
export function Menu() {
    const sizeName = [null, "small", "medium", "large"]
    return (
        <div className="album py-5 bg-light" style={{ border: "0" }}>
            <div className="container" style={{ display: "flex" }}>
                <div className="row d-flex" >
                    {arrayPizzas.map((pizza) => <MenuPizza 
                    id={pizza.id}
                    name={pizza.name} 
                    prices={pizza.menu_sizes.map((menu_size) => ({
                    size: sizeName[menu_size.size_id], 
                    price: menu_size.price }))} />)}
                </div>
            </div>
        </div>

    )
}

