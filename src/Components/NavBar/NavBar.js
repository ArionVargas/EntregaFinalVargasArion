import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (

        <nav className="NavBar navbar-brand ">
            <Link to="/" className="navbar-start">
                <h2 className="title">VentaCars</h2>
            </Link>
            <div className="Categories navbar-start">

                <NavLink to={"/category/fiat"} activeclassname="ActiveOption" className="Option button">FIAT</NavLink>
                <NavLink to={"/category/ford"} activeclassname="ActiveOption" className="Option button">FORD</NavLink>
                <NavLink to={"/category/volkswagen"} activeclassname="ActiveOption" className="Option button">VOLKSWAGEN</NavLink>
                <NavLink to={"/category/renault"} activeclassname="ActiveOption" className="Option button">RENAULT</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar


