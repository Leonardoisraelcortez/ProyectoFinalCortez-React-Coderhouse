import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product, isAddedToCart, itemInCart, onAddToCart }) {
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock;

    return (
        <div className="item-detail">
            <div className="item-image">
                <img className="rounded-image" src={product.img} alt="imagen" />
            </div>
            <div className="item-info">
                <h2>{product.title}</h2>
                <h4>$ {product.price}</h4>
                <small>{product.description}</small>
            </div>
            <div className="item-actions">
                {product.stock > 0 ? (
                    isAddedToCart ? (
                        <Link to="/cart" className="cart-link">Ir al carrito</Link>
                    ) : (
                        <ItemCount stock={maxItems} onConfirm={onAddToCart} />
                    )
                ) : (
                    <p className="stockError">No hay stock disponible</p>
                )}
                {itemInCart && (
                    <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;

