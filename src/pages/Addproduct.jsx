import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addproduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    let navigaate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault()
        // axios.post("https://fakestoreapi.com/products", {
        //     title, price,
        // })
        //     .then((data) => {
        //         console.log(data);
        //         navigaate('/about');
        //     });
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "Application/josn"
            },
            body: JSON.stringify({
                title, price,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigaate('/about');
            })
    };
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">Title</label>
                    <input type="text"
                        className="form-control"
                        id="productTitle"
                        placeholder='Product Title'
                        aria-describedby="ProductTitle" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number"
                        className="form-control"
                        id="productPrice" placeholder='Product Price'
                        aria-describedby="productPrice" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
}

export default Addproduct;
