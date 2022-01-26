import Carousel from "react-material-ui-carousel"
import arrSliderImages from "../../../assets/data/arrSliderImages"
import Style from './Home.module.scss'

function Item(props) {
    return(
        <figure className={Style.slide} style={{height: 'auto'}}>
        <h3>{props.item.title}</h3>
        <img src={props.item.url} width='100%' alt={props.item.alt} />
        </figure>
    )
}

export const Home = () => {
    return(
        <section>
        <h1>Home</h1>
        <Carousel animation="fade" interval="5000">
            {
                arrSliderImages.map((item, index) => {
                    return(
                        <Item key={index} item={item} />
                    )
                })
            }
        </Carousel>
        </section>
    )
}