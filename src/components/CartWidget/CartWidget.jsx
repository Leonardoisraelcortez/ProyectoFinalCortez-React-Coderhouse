import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

function CartWidget() {
    const context = useContext(cartContext);

    const totalItems = context.getTotalItemsInCart();

    return (
        <Link to="/cart">
            <div className="cart-icon-container">
                <ShoppingCartIcon className="cart-icon" />
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
        </Link>
    );
}

export default CartWidget;











