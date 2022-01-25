import { NavLink } from "react-router-dom";
import arrNavItems from "../../../assets/data/arrNavItems";

export const Nav = () => {
    return(
        <nav className="navbar">
            {arrNavItems.map((item, key) => {
                return(
                    item.display ?
                    <li key={key}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                    : null
                )
            })}
        </nav>
    )
}