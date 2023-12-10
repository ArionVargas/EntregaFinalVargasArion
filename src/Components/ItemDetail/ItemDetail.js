import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="ContainerDetail">
            <div className="SegundoConteiner">
                <picture>
                    <img src={img} alt={name} className="ImgDetail" />
                </picture>
                <article className="CardItem">
                    <header className="Header">
                        <h2 className="ItemHeader">
                            {name}
                        </h2>
                    </header>
                    <section>
                        <p className="Info">
                            Marca: {category}
                        </p>
                        <p className="Info">
                            Precio: ${price}
                        </p>
                    </section>

                    <footer className="ItemFooter">
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
                    </footer>
                </article >
            </div>
                <p className="Info">
                    Descripcion: {description}
                </p>
        </div>
    )
}

export default ItemDetail