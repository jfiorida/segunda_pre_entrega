import carrito from "../assets/carrito.svg"
const CasrtWidget = () => {
    return(
        <div>
            <img style = {{width: 30}} src={carrito} alt="cart_widget" />
            <p>0</p>
        </div>
    )
}
export default CasrtWidget