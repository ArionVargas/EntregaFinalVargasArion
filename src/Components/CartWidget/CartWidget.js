import { useContext } from "react"
import cart from "./assets/carrito.png"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
                <img className="CartWidget" src={cart} alt="img-carrito" />
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget