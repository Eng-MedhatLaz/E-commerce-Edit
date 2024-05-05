import React from "react";
import { Link } from "react-router-dom";
import "./product.css"
const Product = (props) => {
    const { product , showButton} = props;
    return (
        <div>
            <div className="card mb-2">
                <img src={product.image} className=" photoimg " alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title} </h5>
                    {/* <p className="card-text">{product.description} </p> */}
                    {/* <p className="card-text">{product.category} </p> */}
                    <p className="card-text"> price{product.price} $ </p>
                    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
                    
                </div>
            </div>
        </div>
    );
};

export default Product;
