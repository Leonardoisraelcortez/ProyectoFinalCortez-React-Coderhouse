import React from "react";
import Item from "../Item/Item";
import Saludo from "../Saludo/Saludo";
import "./ItemList.css";

function ItemList(props) {
    const { products } = props;

    return (
        <div>
            <Saludo/>
            <h1 className="flex-container-h1">Listado de Productos</h1>
            <div className="flex-container">
                {products.map((item) => (
                    <div className="item" key={item.id}>
                        <Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;




