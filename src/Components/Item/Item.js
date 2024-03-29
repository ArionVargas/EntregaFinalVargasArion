import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {

    return (

        <article>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className="card-image">
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <div className="CardItem">
                <section>
                    <p className="Info">
                        Precio: usd ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter card-footer">
                    <Link to={`/item/${id}`} className="button is-small detalle">Ver detalles</Link>
                </footer>
            </div>
        </article>
    )
}

export default Item