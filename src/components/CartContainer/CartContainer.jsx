import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CartContainer.css";

function CartContainer() {
    const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

    return (
    <div className="container">
        <h1>Carrito de Compras</h1>
        {cart.map((item) => (
        <div className="cart-item" key={item}>
            {console.log(item.id)}
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} className="product-image" />
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
            <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
        ))}
        {cart.length === 0 ? (
                <p className="stockError">El carrito está vacío</p>
            ) : (
                <div>
                    <div className="total">Total de la compra: ${getTotalPriceInCart()}</div>
                    <Link to="/checkout">
                        <ButtonComponent>Comprar</ButtonComponent>
                    </Link>
                </div>
            )}
    </div>
    );
}

export default CartContainer;