import { Nav } from '../Nav/Nav'
import styles from './Header.module.scss'

export const Header = (props => {
    return(
        <header className={styles.header}>
                <h1>{(props.pagetitle) ? props.pagetitle : 'My React Project'}</h1>
                <Nav />
        </header>
    )
})