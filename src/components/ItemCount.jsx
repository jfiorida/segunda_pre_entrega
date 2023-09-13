import { useState, usesState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const[quantity, setQuantity] = useState(initial)
    const Increment = () =>{
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="button" onClick={Increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount