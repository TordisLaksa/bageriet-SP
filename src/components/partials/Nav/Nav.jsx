import { NavLink } from "react-router-dom";
import arrNavItems from "../../../assets/data/arrNavItems";
import styles from './Nav.module.scss'

export const Nav = () => {
    return(
        <nav className={styles.navbar}>
            {arrNavItems.map((item, key) => {
                return(
                    item.display ?
                    //ul key????
                    <ul key={key} id={styles.myLinks}>
                        <li key={key}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    </ul>
                    : null
                )
            })}
        </nav>
    )
}