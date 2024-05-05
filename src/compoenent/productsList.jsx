import React, { useEffect, useState } from "react";
import Product from "./product";
const ProductsList = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }
    const getProductInCategory = (catName) => {
        console.log(catName);
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then((data) => setProducts(data));
    }
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    return (
        <>
            <h2 className="text-center p-4">our products</h2>
            <div className="container ">
                <button
                    onClick={() => {
                        getProducts();
                    }}
                    className="btn btn-dark mb-3 "
                > All
                </button>
                {
                    categories.map((cat) => {
                        return (
                            <button
                                key={cat}
                                onClick={() => {
                                    getProductInCategory(cat);
                                }}
                                className="btn btn-dark mb-3 "
                            > {cat}
                            </button>
                        );
                    })}
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-3" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ProductsList;
