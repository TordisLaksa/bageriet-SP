import { Nav } from '../Nav/Nav'

export const Header = (props => {
    return(
        <header>
                <h1>{(props.pagetitle) ? props.pagetitle : 'My React Project'}</h1>
                <Nav />
        </header>
    )
})