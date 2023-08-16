import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import "./OrderConfirm.css";

function OrderConfirm() {
    const [orderData, setOrderData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getOrder(id).then((order) => {
        console.log(order);
        setOrderData(order);
        });
    }, []);

    return (
        <div className="container">
        <h1 className="title">Gracias por tu compra!</h1>
        {orderData !== null ? (
            <div className="itemList">
            <p>
                Tus productos comprados:
                {orderData.items.map((item, index) => (
                <div key={index} className="itemc">
                    <img src={item.img} alt={item.title} />
                    <small>
                    {item.title} - {item.count} unidades
                    </small>
                </div>
                ))}
            </p>
            </div>
        ) : (
            <p className="loading">Cargando</p>
        )}
        </div>
    );
}

export default OrderConfirm;