import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="button is-link is-small" onClick={decrement}>-</button>
                <h3 className="Number">{quantity}</h3>
                <button className="button is-link is-small" onClick={increment}>+</button>
            </div>
            <div className="AgregarAlCarrito">
                <button className="button is-link is-small" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount