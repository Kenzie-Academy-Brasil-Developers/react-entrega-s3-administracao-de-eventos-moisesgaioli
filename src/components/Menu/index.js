import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <nav>
            <ul>
                <li> <Link to={"/"}> Início </Link> </li>
                <li> <Link to={"/formatura"}> Formatura </Link> </li>
                <li> <Link to={"/casamento"} > Casamento </Link> </li>
                <li> <Link to={"/confraternizacao"}> Confraternização </Link> </li>
            </ul>
        </nav>
    )
}

export default Menu;