import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (

        <nav className="navbar hero is-warning">
            <h1 className="title">VentaCars</h1>
            <div className="container">
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Marcas
                        </a>
                        <a className="navbar-item">
                            Modelos
                        </a>
                        <a className="navbar-item">
                            Año de fabricacion
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">

                                <a className="button is-link"><CartWidget /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>




    )
}

export default NavBar