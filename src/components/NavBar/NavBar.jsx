import icon from "./morgana-favicon.png";
import { Link } from "react-router-dom";
import {CartWidget} from "../CartWidget"

const NavBar = () => {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src={icon} alt="morgana" width="60" height="60"/>
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/category/potions" className="nav-link px-2 link-dark">Potions</Link>
                    </li>
                    <li>
                        <Link to="/category/amulets" className="nav-link px-2 link-dark">Amulets</Link>                        
                    </li>
                    <li>
                        <Link to="/category/tools" className="nav-link px-2 link-dark">Tools</Link>                        
                    </li>                    
                    <li>
                        <Link to="/category/weapons" className="nav-link px-2 link-dark">Weapons</Link>                        
                    </li>
                    <li>
                        <Link to="/category/protection" className="nav-link px-2 link-dark">Amulets</Link>                        
                    </li>
                    <li>
                        <Link to="/category/companions" className="nav-link px-2 link-secondary">Companions</Link>                        
                    </li>
                </ul>
                <CartWidget/>
                </div>
            </div>
        </header>
    )
}

export {NavBar};