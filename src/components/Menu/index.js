import { Link } from "react-router-dom";
import "./styles.css"

const Menu = () => {

    return (
        <header>
            <nav>
                <ul className="menu-container">
                    <li className="menu-item"> <Link to={"/"}> Início </Link> </li>
                    <li className="menu-item"> <Link to={"/formatura"}> Formatura </Link> </li>
                    <li className="menu-item"> <Link to={"/casamento"} > Casamento </Link> </li>
                    <li className="menu-item"> <Link to={"/confraternizacao"}> Confraternização </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;