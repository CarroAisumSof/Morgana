import icon from "./pouch-icon.png";

const CartWidget = () => {

    return (
        <>
        <img src={icon} height="60" alt="pouch"/>
        <span className='badge badge-warning' id='lblCartCount'> 7 </span>
        </>
    )
}

export {CartWidget}