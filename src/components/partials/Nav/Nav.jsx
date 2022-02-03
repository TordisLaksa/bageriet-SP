import { NavLink } from "react-router-dom";
import React from "react";
import arrNavItems from "../../../assets/data/arrNavItems";
import styles from './Nav.module.scss'
import { useMediaQuery } from 'react-responsive'

export const Nav = () => {
    
    const desktop = useMediaQuery({ query: '(min-width: 980px)' })
    const tablet = useMediaQuery({ query: '(max-width: 980px)' })

    class TabletNav extends React.Component{
        state = {
            showMenu: false
        };
    onClick = () => {
        //jeg sætter state til at : showMenus state, skal være det modsatte af hvad det er når du klikker
        this.setState({showMenu: !this.state.showMenu})
    }
    render(){
            return(
            <>
                <a href="#" className={styles.icon} onClick={this.onClick}><i className="fas fa-bars"></i></a>
                {this.state.showMenu &&
                <ul id={styles.myLinks}>
                {arrNavItems.map((item, key) => {
                    return(
                        item.display ?
                        <li key={key} onClick={this.onClick}>
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>
                        : null
                        )
                    })}
                </ul>
                }
            </>
            )
        }
    }

   
    return(
        <>
            <nav className={styles.nav}>
                { tablet && 
                <TabletNav />
                }
                { desktop && 
                <ul id={styles.myLinks}>
                {arrNavItems.map((item, key) => {
                    return(
                        item.display ?
                        <li key={key}>
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>
                        : null
                        )
                    })}
                </ul>
                }
            </nav>
        </>
    )
}