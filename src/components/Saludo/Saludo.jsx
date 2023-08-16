import React from 'react';
import './Saludo.css';

function Saludo() {
    const palabra = "Bonsai Studio";

    return (
        <div className="Saludo">
            <div className="Saludo-content">
                <h1 className="Saludo-title">¡Bienvenidos a <span className="Saludo-highlight">{palabra}</span>!</h1>
                <p className="Saludo-subtitle">Descubre nuestra colección exclusiva</p>
            </div>
        </div>
    );
}

export default Saludo;

