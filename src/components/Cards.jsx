import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Card(props){
    const title = props.title;
    const picture = props.picture;
    const logementId = props.id;

    return (
        <Link to={{pathname:'/logement/' + logementId}} key={logementId}>
            <figure className="App-card" style={{backgroundImage: `linear-gradient(0deg, rgba(0,17,24,0.35) 0%, rgba(255,255,255,0) 27%), url(${picture})`, objectFit: 'contain'}}>
                <figcaption className="App-cardTitle">{title}</figcaption>
            </figure>
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
    logementId: PropTypes.string
}

export default Card