import React, { useState } from "react";
import "./ItemCount.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";


function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);

    function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
        setClickCount(clickCount + 1);
    }
    }

    function handleClickSub() {
    if (clickCount > 1) {
        setClickCount(clickCount - 1);
    }
    }

    return (
            <div>
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="item-count-container"
                >
                <ButtonComponent onTouch={handleClickSub} colorFondo="colorDeseado">
                    -
                </ButtonComponent>
                <h2 className="count-text">{clickCount}</h2>
                <ButtonComponent onTouch={handleClickAdd} colorFondo="colorDeseado">
                    +
                </ButtonComponent>
                </div>
                <ButtonComponent
                onTouch={() => props.onConfirm(clickCount)}
                colorFondo="colorDeseado"
                >
                <h4>Añadir al carrito</h4>
                </ButtonComponent>
            </div>
        );
}

export default ItemCount;