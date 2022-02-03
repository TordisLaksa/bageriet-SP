import { Home } from '../../components/Pages/Home/Home'
import { ProductList, Products } from '../../components/Pages/Products/Products'
import { Contact } from '../../components/Pages/Contact/Contact'
import { Login } from '../../components/Pages/Login/Login'

const arrNavItems = [
    {
        title: 'FORSIDE',
        path: '/',
        element: <Home />,
        display: true
    },
    {
        title: 'PRODUKTER',
        path: '/products',
        element: <Products />,
        display: true
    },
    {
        title: 'Produkt Liste',
        path: '/products/:cat_id',
        element: <Products />,
        display: false
    },
    {
        title: 'Produkt Detaljer',
        path: '/products/:cat_id/:id',
        element: <Products />,
        display: false
    },
    {
        title: 'bageriet',
        path: '/',
        element: <Home />,
        display: true
    },
    {
        title: 'KONTAKT',
        path: '/contact',
        element: <Contact />,
        display: true
    },
    {
        title: 'LOGIN',
        path: '/login',
        element: <Login />,
        display: true
    },

]

export default arrNavItems