// import { useContext } from "react"
// import { AuthContext } from "../../Context/AuthProvider"

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export const Products = () => {
    //lille l ellers virker den ikke (case sensitive)
// const {loginData} = useContext(AuthContext)



    return(
        // <>
        // <h2>Produkter</h2>
        // {!loginData ?
        // <p>Du er ikke logget ind</p>
        // :
        // <p>Du er logget ind som {loginData.username}</p>
        // }
        // </>
        <>
            <CategoryList />
            <Outlet />
        </>
    )
}

export const CategoryList = () => {
    //laver en state variable
    const [ apiData, setApiData ] = useState([])
    //kører useEffect
    useEffect(() => {
        //når den renderer vil den hente en liste over kategorier
        const getData = async () => {
            const result = await axios.get('https://api.mediehuset.net/bakeonline/categories')
            setApiData(result.data.items);
            
        }
        getData();
    }, [setApiData]);
    return(
        <ul className="productnav">
            {apiData && apiData.map(item => {
                return(
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.title}</Link></li>
                )
            })}
        </ul>
    )
}

export const ProductList = () => {
    const [apiData, setApiData] = useState([])
    const { cat_id } = useParams()
    
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/bakeonline/categories/${cat_id}`)
            console.log(result);
            setApiData(result.data.item.products);
        }
        getData()
    }, [cat_id])

    return(
        <ul>
            {apiData && apiData.map(item => {
                return(
                    <li key={item.id}>
                        <Link to={`/products/${cat_id}/${item.id}`}>{item.title}</Link></li>
                )
            })}
        </ul>
    )
}

export const ProductDetails = () => {
    const [apiData, setApiData] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/bakeonline/products/${id}`)
            setApiData(result.data.item);
        }
        getData()
    }, [id])

    return(
        <article className="productdetails">
            <h1>{apiData.title}</h1>
            <p>{apiData.description}</p>
        </article>
    )
}