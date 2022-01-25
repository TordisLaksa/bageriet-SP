import { Home } from '../../components/Pages/Home/Home'
import { About } from '../../components/Pages/About/About'

const arrNavItems = [
    {
        title: 'Forside',
        path: '/',
        element: <Home />,
        display: true
    },
    {
        title: 'Om os',
        path: '/about',
        element: <About />,
        display: true
    }
]

export default arrNavItems