import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import './../compoenent/About.css';
const About = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllproducts()
    }, []);
    const getAllproducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    };
    const deleteProduct = (product) => {
        Swal.fire({
            title: ` You Are Sure To Delete ${product.title} ? `,
            showCancelButton: true
        })
            .then((data) => {
                if (data.isConfirmed) {
                    fetch(`https://fakestoreapi.com/products/${product.id}`, {
                        method: "DELETE"
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            getAllproducts()
                        });
                }
            })
    };
    return (
        <>
            <h1>About</h1>
            <Link to={'/about/add'} className='btn btn-success mt-2'> Add New Product</Link>
            <table className="table table-success table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                        <th> Description </th>
                        <th> Prise</th>
                        <th> Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td> {product.id} </td>
                                <td> {product.title} </td>
                                <td> {product.description.slice(0, 20)} .... </td>
                                <td> {product.price} </td>
                                <td>
                                    <button className='btn btn-danger btn-sm m-1' onClick={() => deleteProduct(product)}> Delete</button>
                                    <Link to={`/about/${product.id}`} className='btn btn-info btn-sm m-1'> View</Link>
                                    <button className='btn btn-primary btn-sm m-1'> Edit</button>
                                </td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
            {/* <Outlet/> */}
        </>
    );
}
export default About;
