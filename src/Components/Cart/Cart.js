import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div className="ContainerCart">
                <h1 className="Mensaje">No hay ningun producto en el carrito</h1>
                <Link to="/" className="BCart button">Productos</Link>
            </div>
        )
    }

    return (
        <div className="ContainerCart">
            <div>

                {cart.map(p => <CartItem key={p.id} product={p} />)}
            </div>


            <div>
                <h3>Total: ${totalPrice}</h3>
                <button onClick={() => clearCart()} className="button">Limpiar carrito</button>
                <Link to="/checkout" className="BCart button">Finalizar compra</Link>

            </div>
        </div>
    )


}
//revisar CardItem product...
export default Cart