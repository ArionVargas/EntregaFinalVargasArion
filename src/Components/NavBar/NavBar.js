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
                <a className="">
                    <NavLink to={"/category/fiat"} className={({ isActive }) => `${isActive ? "ActiveOption" : "Option"} button`}>FIAT</NavLink>
                </a>
                <a className="">
                    <NavLink to={"/category/ford"} className={({ isActive }) => `${isActive ? "ActiveOption" : "Option"} button`}>FORD</NavLink>
                </a>
                <a className="">
                    <NavLink to={"/category/volkswagen"} className={({ isActive }) => `${isActive ? "ActiveOption" : "Option"} button`}>VOLKSWAGEN</NavLink>
                </a>
                <a className="">
                    <NavLink to={"/category/renault"} className={({ isActive }) => `${isActive ? "ActiveOption" : "Option"} button`}>RENAULT</NavLink>
                </a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar


