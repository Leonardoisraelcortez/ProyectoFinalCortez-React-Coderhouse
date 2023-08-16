import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import swal from 'sweetalert';
import "./Checkout.css";


function Checkout() {
    const [buyer, setBuyer] = useState({
    firstname: "",
    email: "",
    address: "",
    });

    const navigate = useNavigate();
    const { cart, getTotalPriceInCart, clearCart } = useContext(cartContext);

    async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
        items: cart,
        buyer: buyer,
        date: new Date(),
        total: getTotalPriceInCart(),
    };

    try {
        const idOrder = await createOrder(orderData);
        swal(`Gracias por tu compra, tu numero de orden es ${idOrder}`);
        navigate(`/order-confirmation/${idOrder}`);
        clearCart();
    } catch (error) {
        swal(`No se pudo realizar la compra ${error.message}`);
    }
    }

    function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
    }

    function resetForm(e) {
    e.preventDefault();
    setBuyer({
        firstname: "",
        email: "",
        address: "",
    });
    }

    return (
        <form>
            <h2>Completa tus datos para completar la compra</h2>
            <div className="form-field">
                <label htmlFor="firstname">Nombre</label>
                <input
                    className="input-field"
                    value={buyer.firstname}
                    name="firstname"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                    className="input-field"
                    value={buyer.email}
                    name="email"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div className="form-field">
                <label>Domicilio de la entrega</label>
                <input
                    className="input-field"
                    value={buyer.address}
                    name="address"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div className="button-container">
                <button
                    className="custom-button"
                    disabled={
                        !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")
                    }
                    onClick={handleCheckout}
                    >
                    <span>Confirmar Compra</span>
                </button>
                <button className="custom-button secondary-button" onClick={resetForm}>
                    <span>Cancelar</span>
                </button>
            </div>
        </form>
    );
}

export default Checkout;