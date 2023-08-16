import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductData } from "../../services/firebase";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { cartContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import swal from 'sweetalert';


function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { id } = useParams();

    const { addToCart, getItemInCart } = useContext(cartContext);

    const itemInCart = getItemInCart(id);

    useEffect(() => {
        async function requestProduct() {
            try {
                const respuesta = await getProductData(id);
                setProduct(respuesta);
            } catch (error) {
                console.error(error);
            }
        }

        requestProduct();
    }, [id]);

    function handleAddToCart(clickCount) {
        addToCart(product, clickCount);
        swal(`Producto agregado al carrito, cantidad: ${clickCount}`);
        setIsAddedToCart(true);
    }

    return (
        <div style={{ margin : "20px" }}>
            <ItemDetail
                product={product}
                isAddedToCart={isAddedToCart}
                itemInCart={itemInCart}
                onAddToCart={handleAddToCart}
            />
            <div style={{ margin: "30px" }}>
                <Link to="/">
                    <ButtonComponent>Volver al inicio</ButtonComponent>
                </Link>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
