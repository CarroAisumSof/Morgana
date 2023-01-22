import icon from "../assets/pouch-icon.png";

const CartWidget = () => {

    return (
        <>
        <img src={icon} height="60" alt="pouch"/>
        <span class='badge badge-warning' id='lblCartCount'> 7 </span>
        </>
    )
}

export default CartWidget