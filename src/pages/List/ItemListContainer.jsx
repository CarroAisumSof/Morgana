import { products } from "../../data/products";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export const ItemListContainer = () => {
    return (
        <>
        <div className="row m-5">   
                {products.map(product => {
                    return (
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
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