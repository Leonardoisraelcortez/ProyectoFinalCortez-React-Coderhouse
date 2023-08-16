import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';


export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item logo">
                    <img src="https://i.ibb.co/hRJ0dM9/logo.png" alt="logo" />
                    <h1 className="logo-text"><Link to="/">Bonsai Studio</Link></h1>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/Perennes">
                        Perennes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/Caducifolios">
                        Caducifolios
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/Sustrato">
                        Sustratos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/Cursos">
                        Cursos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/Libros">
                        Libros
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">
                        Detalle de Producto
                    </Link>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}