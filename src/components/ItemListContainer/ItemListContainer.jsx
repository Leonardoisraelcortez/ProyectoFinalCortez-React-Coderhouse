import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { SuperBalls } from '@uiball/loaders';
import './ItemListContainer.css';






function ItemListContainer() {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
    setIsLoading(true);
    async function requestProducts() {
        let respuesta = categoryId
        ? await getCategoryData(categoryId)
        : await getData();
        setProducts(respuesta);
        setIsLoading(false);
    }

    requestProducts();
    }, [categoryId]);

        if (isLoading) {
        return (
            <div className="loader-container">
                <SuperBalls size={150} color="BlueViolet" className="loader" />
            </div>
        );
        } else {
        return products.length === 0 ? (
            <p>No hay productos disponibles para esa consulta.</p>
        ) : (
            <ItemList products={products} />
        );
    }
}

export default ItemListContainer;