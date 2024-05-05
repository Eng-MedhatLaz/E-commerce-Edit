import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductView = () => {
    const [product, setProduct] = useState();
    let { ProductId } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${ProductId}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product)
            });
    }, []);
    return (
        <div>
            {product && <h1>{product.title}</h1>}
        </div>
    );
}

export default ProductView;
