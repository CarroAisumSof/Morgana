import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../data/products";


export const ItemListContainer = () => {
    
    let {catId} = useParams(); 
    console.log(catId)


    
    let newArray = catId === undefined ? products : products.filter(prod => {return prod.categoria === catId})

    
    
    console.log (newArray)

    
    return (
        <>
        <div className="row m-5">  
                {newArray.map(product => {
                    return (
                            <div key={product.id}className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={product.thumbnail} alt={product.nombre}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.nombre}</h5>
                                        <p className="card-text">{product.detalle}</p>
                                    </div>
                                    <div className="card-body">
                                        <Link to={`/item/${product.id}`}>
                                            <button className="btn btn-secondary">See product</button>
                                        </Link>
                                    </div>
                                    </div>
                            </div>
                    )
                })
                }
        </div>
        </>       
    )
};