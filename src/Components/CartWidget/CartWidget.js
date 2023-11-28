import { useState } from "react"
import cart from "./assets/carrito.png"

const CartWidget = () => {

    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>

            <img src={cart} alt="img-carrito" />
           
            {count}
        </div>
    )
}

export default CartWidget