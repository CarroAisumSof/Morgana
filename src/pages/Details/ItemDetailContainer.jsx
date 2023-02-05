import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ItemDetailContainer = () => {
    

    let {productId} = useParams()
   

    return(
        <>
            <div className="m-5 row cols-2">
                <div classname="col-12 col-lg-4" >
                    <h1>{products[productId].nombre}</h1>
                    <img src={products[productId].thumbnail}></img>
                </div>
                <div className="col-12 col-lg-8">
                    <p>{products[productId].detalle}</p>
                </div>
            </div>
        </>
    )
}

export {ItemDetailContainer};