import Carousel from "react-material-ui-carousel"
import arrSliderImages from "../../../assets/data/arrSliderImages"
import Style from './Home.module.scss'

function Item(props) {
    return(
        <figure className={Style.slide}>
            <figcaption>
                <h3>{props.item.title}</h3>
            </figcaption>
            <img src={props.item.url} width='100%' alt={props.item.alt} />
        </figure>
    )
}

export const Home = () => {
    return(
        <>
        <section id={Style.section1}>
        <Carousel animation="fade" interval="3000">
            {
                arrSliderImages.map((item, index) => {
                    return(
                        <Item key={index} item={item} />
                    )
                })
            }
        </Carousel>
        </section>
        <section id={Style.section2}>

        </section>
        </>
    )
}