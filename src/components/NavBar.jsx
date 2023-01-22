import icon from "../assets/morgana-favicon.png";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header class="p-3 mb-3 border-bottom">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src={icon} alt="morgana" width="60" height="60"/>
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="../Apps.js" class="nav-link px-2 link-dark">Potions</a></li>
                    <li><a href="../Apps.js" class="nav-link px-2 link-dark">Amulets</a></li>
                    <li><a href="../Apps.js" class="nav-link px-2 link-dark">Tools</a></li>
                    <li><a href="../Apps.js" class="nav-link px-2 link-dark">Weapons</a></li>
                    <li><a href="../Apps.js" class="nav-link px-2 link-dark">Protection</a></li>
                    <li><a href="../Apps.js" class="nav-link px-2 link-secondary">Companions</a></li>
                </ul>
                <CartWidget/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;